import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSelector, createStructuredSelector} from "reselect";
import PropTypes from "prop-types";
import {Nominee} from "../../components";
import * as NomineesActions from "../../actions/settings/NomineesActions";
import {client} from "../../apollo";
import gql from "graphql-tag";
import {AddNomineeForm} from "../../components/settings/AddNomineeForm"; import Validators from "../../services/Validators";

class NomineeContainer extends React.Component {

  static propTypes = {
    getInitialNomineesList: PropTypes.func.isRequired,
    add_notification: PropTypes.func.isRequired,
    on_click_add_nominee: PropTypes.func.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onBlurNomineeName: PropTypes.func.isRequired,
    onAgreementChange: PropTypes.func.isRequired,
    onBlurNomineeAgreement: PropTypes.func.isRequired,
    onTypeChange: PropTypes.func.isRequired,
  };

  getBase64 = (file) => {
    let self = this;
    let reader = new FileReader();
    let name = file.name;
    reader.readAsDataURL(file);
    reader.onload = function () {
        self.props.onAgreementChange(reader.result, name)
    };
    reader.onerror = function (error) {
      return false;
    };
  }

  componentDidMount(){
    client.query({
      query: gql`
        query{
          nominees{
            id
            exists
            name
            agreement
            nomineeType
            agreementOriginalName
          }
        }
      `
    })
    .then(({data}) => {
        this.props.getInitialNomineesList(data.nominees)
      }
    )
    .catch((err) => {
      this.props.add_notification("Oops", "error")
    });
  }

  onClickAddNominee = () => {
    client.mutate({
      mutation: gql`
        mutation addNominee($addNominee:NomineeInput){
          addNominee(addNominee:$addNominee){
            nominee{
              id
              name
              agreementOriginalName
              agreement
              nomineeType
            }
          }
        }
      `,
      variables: {
        addNominee: {
          name: this.props.nominees_list.new_nominee.name,
          agreement: this.props.nominees_list.new_nominee.agreement,
          nomineeType: this.props.nominees_list.new_nominee.nomineeType,
          agreementOriginalName: this.props.nominees_list.new_nominee.agreementOriginalName
        }
      }
    })
    .then(({data}) => {
      this.props.on_click_add_nominee(data.addNominee['nominee'])
    })
    .catch((err) => {
      console.log(err)
      this.props.add_notification('Oops', 'error');
    });

  }

  onChangeNomineeName = (event) => {
    this.props.onNameChange(event.target.value)
  };

  onChangeNomineeAgreement = (event) => {
    let files = document.getElementById('agreement').files;
    if(files.length > 0){
      this.getBase64(files[0])
    }
  };

  onChangeNomineeType = (event) => {
    this.props.onTypeChange(event.value)
  };

  checkNomineeName = (event) => {
    let valid = Validators.required(event.target.value,"Nominee Name")
    this.props.onBlurNomineeName(valid)
  }

  checkNomineeAgreement = () =>{
    let valid = Validators.required(document.getElementById('agreement').files[0], "Agreement")
    this.props.onBlurNomineeAgreement(valid)
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    console.log(selected)
  }
  render() {
    let typesOptions = [
      {value: 'INDIVIDUAL', label: 'Individual'},
      {value: 'CORPORATE', label: 'Corporate'}
    ];
    let new_nominees_components =
      <AddNomineeForm
        onChangeNomineeType={this.onChangeNomineeType}
        options={typesOptions}
        data={this.props.nominees_list.new_nominee}
        onChangeNomineeAgreement={this.onChangeNomineeAgreement}
        checkNomineeAgreement={this.checkNomineeAgreement}
        checkNomineeName={this.checkNomineeName}
        onChangeNomineeName={this.onChangeNomineeName}
        error={this.props.nominees_list.errors.new_nominee}
        key={11}
      />
    return (
      <Nominee
        nominees={this.props.nominees_list.nominees}
        handlePageClick={this.handlePageClick}
        onClickAddNominee={this.onClickAddNominee}
        new_nominees_components={new_nominees_components}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  nominees_list: createSelector(
    (state) => state.nominees_list,
    (NomineeState) => NomineeState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NomineesActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NomineeContainer)
