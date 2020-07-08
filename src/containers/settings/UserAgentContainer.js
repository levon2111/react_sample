import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {UserAgent} from "../../components";
import {createSelector, createStructuredSelector} from "reselect";
import PropTypes from "prop-types";
import {client} from "../../apollo";
import gql from "graphql-tag";


import * as UserAgentActions from "../../actions/settings/UserAgentActions";
import Validators from "../../services/Validators";

class UserAgentContainer extends React.Component {

  static propTypes = {
    getInitialAgentsList: PropTypes.func.isRequired,
    onDiligenceChange: PropTypes.func.isRequired,
    onAgreementChange: PropTypes.func.isRequired,
    onAgentNameChange: PropTypes.func.isRequired,
    add_notification: PropTypes.func.isRequired,
    addAgentsList: PropTypes.func.isRequired,
    onBlurName: PropTypes.func.isRequired,
    onBlurDiligence: PropTypes.func.isRequired,
    onBlurAgreement: PropTypes.func.isRequired,
  };

  componentDidMount(){
    client.query({
      query: gql`
        query{
          agents{
            id
            name
            agreementOriginalName
            diligenceOriginalName
            agentAgreement
            dueDiligence
          }
        }
      `
    })
    .then(({data}) => {
        this.props.getInitialAgentsList(data.agents)
      }
    )
    .catch((err) => {
      this.props.add_notification("Error", "warning")
    });
  }

  getBase64 = (file, type) => {
    let self = this;
    let reader = new FileReader();
    let name = file.name;
    reader.readAsDataURL(file);
    reader.onload = function () {
      if (type === "agreement") {
        self.props.onAgreementChange(reader.result, name)
      } else {
        self.props.onDiligenceChange(reader.result, name)
      }
    };
    reader.onerror = function (error) {
      return false;
    };
  }

  agreementChange = (event) => {
    let files = document.getElementById('agreement').files;
    if (files.length > 0) {
      this.getBase64(files[0], "agreement")
    }
  }

  diligenceChange = (event) => {
    let files = document.getElementById('dilegence').files;
    if (files.length > 0) {
      this.getBase64(files[0], "dilegence")
    }
  }

  onChangeAgentName = (event) => {
    this.props.onAgentNameChange(event.target.value)
  }

  onBlurName = (event) => {
    let valid = Validators.required(event.target.value, "Name")
    this.props.onBlurName(valid)
  }

  onBlurAgreement = (event) => {
    let valid = Validators.required(document.getElementById('agreement').files[0], "Agreement Name")
    this.props.onBlurAgreement(valid)
  }

  onBlurDiligence = (event) => {
    let valid = Validators.required(document.getElementById('dilegence').files[0], "Due Deligence")
    this.props.onBlurDiligence(valid)
  }

  newAgentStateValidation = () => {

    let new_agent = this.props.agents_list.new_agent
    let error = this.props.agents_list.error.new_agent
    let validation_error = false;
    if (!new_agent.name) {
      validation_error = true;
      let valid = Validators.required('', error.name.label)
      this.props.onBlurName(valid)
    }
    if (!new_agent.dueDiligence) {
      validation_error = true;
      let valid = Validators.required('', error.dueDiligence.label)
      this.props.onBlurDiligence(valid)
    }
    if (!new_agent.agentAgreement) {
      validation_error = true;
      let valid = Validators.required('', error.agentAgreement.label)
      this.props.onBlurAgreement(valid)
    }
    return validation_error
  }


  onClickAddAgent = () => {

    if (this.newAgentStateValidation()) {
      return false
    }

    client.mutate({
      mutation: gql`
        mutation addAgent($addAgent:AgentInput){
          addAgent(addAgent:$addAgent){
            agent{
              id
              name
              agreementOriginalName
              diligenceOriginalName
              agentAgreement
              dueDiligence
            }
          }
        }
      `,
      variables: {
        addAgent: {
          name: this.props.agents_list.new_agent.name,
          agentAgreement: this.props.agents_list.new_agent.agentAgreement,
          dueDiligence: this.props.agents_list.new_agent.dueDiligence,
          agreementName: this.props.agents_list.new_agent.agreementName,
          diligenceName: this.props.agents_list.new_agent.diligenceName,
        }
      }
    })
    .then(({data}) => {
      this.props.addAgentsList(data.addAgent.agent);
    })
    .catch((err) => {
      console.log(err)
      this.props.add_notification('Oops', 'error');
    });
  }

  render() {

    let rows = [];
    if (this.props.agents_list.agents_list && this.props.agents_list.agents_list.length) {
      this.props.agents_list.agents_list.forEach(function (user, i) {
        rows.push(<Agent key={i} list={user}/>);
      });
    }

    return (
      <UserAgent
        agent={this.props.agents_list.new_agent}
        agents={rows}
        agreementChange={this.agreementChange}
        diligenceChange={this.diligenceChange}
        onClickAddAgent={this.onClickAddAgent}
        onChangeAgentName={this.onChangeAgentName}
        onBlurName={this.onBlurName}
        onBlurAgreement={this.onBlurAgreement}
        onBlurDiligence={this.onBlurDiligence}
        error={this.props.agents_list.error.new_agent}
      />
    )
  }
}

class Agent extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.list.name}</td>
        <td>{this.props.list.agreementOriginalName}</td>
        <td>{this.props.list.diligenceOriginalName}</td>
        <td>
          <ul className="clearAfter iconCell">
            <li><a href="#"><span className="icon-ic_edit blue"></span></a></li>
            <li><a href="#"><span className="icon-ic_delete blue"></span></a></li>
          </ul>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  agents_list: createSelector(
    (state) => state.agents_list,
    (UserAgentState) => UserAgentState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserAgentActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserAgentContainer)
