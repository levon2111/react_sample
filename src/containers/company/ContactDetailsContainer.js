import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {ContactDetails} from "../../components";
import * as ContactDetailsActions from "../../actions/create_new_company/ContactDetailsActions";
import {createSelector, createStructuredSelector} from "reselect";
import PropTypes from "prop-types";
import {DebitCard} from "../../components/settings/DebitCard";
import {client} from "../../apollo";
import gql from "graphql-tag";
import Validators from "../../services/Validators";
import {BankManagerDetails} from "../../components/company/BankManagerDetails";

class ContactDetailsContainer extends React.Component {

  static propTypes = {
    onChangeBankAccount: PropTypes.func.isRequired,
    onChangeMasterDebitRequire: PropTypes.func.isRequired,
    onClickAddDebitCard: PropTypes.func.isRequired,
    set_initial_data: PropTypes.func.isRequired,
    changeIndividualMember: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired,
    blurName: PropTypes.func.isRequired,
    changeAddress: PropTypes.func.isRequired,
    blurAddress: PropTypes.func.isRequired,
    onClickDeleteDebitCards: PropTypes.func.isRequired,
    set_initial_errors: PropTypes.func.isRequired,
    onChangeSurname: PropTypes.func.isRequired,
    blurSurname: PropTypes.func.isRequired,
    onChangeBankName: PropTypes.func.isRequired,
    blurBankName: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    blurEmail: PropTypes.func.isRequired,
    onChangePhone: PropTypes.func.isRequired,
    blurPhone: PropTypes.func.isRequired,
    blurRegisteredMember: PropTypes.func.isRequired,
  };

  componentDidMount() {
    client.query({
      query: gql`
        query companyData($id: Int){
          companyData(id: $id){
            memberSet{
              nominee{
                name,
                id,
                nomineeType
              },
              memberType{
                name,
                id
              }
            },
          }
        }
      `,
      variables: {
        id: 1
      }
    }).then(({data}) => {
      let res = data.companyData;
      let individual_members = [];
      let corporate_members = [];
      if (res.memberSet) {
        for (let i = 0; i < res.memberSet.length; i++) {
          if (res.memberSet[i].nominee[0].nomineeType === "CORPORATE") {
            let corporate_member = {
              nominee: res.memberSet[i].nominee[0].name,
              companyName: '',
              surname: '',
              bankName: '',
              email: '',
              phone: '',
              types: {
                corporate_director: false,
                corporate_shareholder: false
              },
              nominee_id: res.memberSet[i].nominee[0].id,
              position: 'corporate'
            };
            if (res.memberSet[i].memberType) {
              for (let j = 0; j < res.memberSet[i].memberType.length; j++) {
                let array = Object.values(res.memberSet[i].memberType[j]);
                if (array.indexOf("corporate_director") !== -1) {
                  corporate_member.types.corporate_director = true;
                }
                if (array.indexOf("corporate_shareholder") !== -1) {
                  corporate_member.types.corporate_shareholder = true;
                }
              }
            }
            corporate_members.push(corporate_member)
          } else if (res.memberSet[i].nominee[0].nomineeType === "INDIVIDUAL") {
            let individual_member = {
              nominee: res.memberSet[i].nominee[0].name,
              nominee_id: res.memberSet[i].nominee[0].id,
              companyName: '',
              surname: '',
              bankName: '',
              email: '',
              phone: '',
              types: {
                individual_director: false,
                individual_shareholder: false,
                secretary: false,
                bank_signatory: false,
                beneficiary: false,
                settlor: false,
                protector: false,
                administrator: false,
              },
              position: 'individual'
            };
            if (res.memberSet[i].memberType) {
              for (let j = 0; j < res.memberSet[i].memberType.length; j++) {
                let array = Object.values(res.memberSet[i].memberType[j]);
                if (array.indexOf("individual_director") !== -1) {
                  individual_member.types.individual_director = true;
                }
                if (array.indexOf("individual_shareholder") !== -1) {
                  individual_member.types.individual_shareholder = true;
                }
                if (array.indexOf("secretary") !== -1) {
                  individual_member.types.secretary = true;
                }
                if (array.indexOf("bank_signatory") !== -1) {
                  individual_member.types.bank_signatory = true;
                }
                if (array.indexOf("beneficiary") !== -1) {
                  individual_member.types.beneficiary = true;
                }
                if (array.indexOf("settlor") !== -1) {
                  individual_member.types.settlor = true;
                }
                if (array.indexOf("protector") !== -1) {
                  individual_member.types.protector = true;
                }
                if (array.indexOf("administrator") !== -1) {
                  individual_member.types.administrator = true;
                }
              }
            }
            individual_members.push(individual_member)
          }
        }
      }
      this.props.set_initial_data(individual_members, corporate_members)
    }).catch((err) => {
      console.log(err)
    })
  }

  changeBankAccount = (event) => {
    this.props.onChangeBankAccount(event.target.value)
  }

  changeMasterDebitRequire = (event) => {
    this.props.onChangeMasterDebitRequire(event.target.value)
  }

  addDebitCard = () => {
    this.props.onClickAddDebitCard()
  }

  onChangeIndividualMember = (index, event) => {
    this.props.changeIndividualMember(index, event.value)
  }

  deleteDebitCard = (index, event) => {
    this.props.onClickDeleteDebitCards(index)
  }

  onChangeName = (index, event) => {
    this.props.changeName(index, event.target.value)
  }

  onBlurName = (index, event) => {
    let valid = Validators.required(event.target.value, "Name Surname")
    this.props.blurName(index, valid)
  }

  onChangeAddress = (index, event) => {
    this.props.changeAddress(index, event.target.value)
  }

  onBlurAddress = (index, event) => {
    let valid = Validators.required(event.target.value, "Address")
    this.props.blurAddress(index, valid)
  }

  changeSurname = (index, type, event) => {
    this.props.onChangeSurname(index, type, event.target.value);
  }

  onBlurSurname = (index, type, event) => {
    let valid = Validators.required(event.target.value, "Name Surname")
    this.props.blurSurname(index,type,valid)
  }

  changeBankName = (index, type, event) => {
    this.props.onChangeBankName(index, type, event.target.value);
  }

  onBlurBankName = (index, type, event) => {
    let valid = Validators.required(event.target.value, "Bank Name")
    this.props.blurBankName(index, type, valid);
  }

  changeEmail = (index, type, event) => {
    this.props.onChangeEmail(index, type, event.target.value);
  }

  onBlurEmail = (index, type, event) => {
    let valid = Validators.email(event.target.value, "Email")
    this.props.blurEmail(index, type, valid);
  }

  changePhone = (index, type, event) => {
    this.props.onChangePhone(index, type, event.target.value);
  }

  onBlurPhone = (index, type, event) => {
    let valid = Validators.email(event.target.value, "Phone")
    this.props.blurPhone(index, type, valid);
  }

  toValidation = () => {
    let validation_error = false;
    let debit_cards = this.props.contact_details.debit_cards;
    for (let i = 0; i < debit_cards.length; i++) {
      if(!debit_cards[i].member){
        validation_error = true;
        let valid = Validators.required('',"Registered Member")
        this.props.blurRegisteredMember(i,valid)
      }
      if(!debit_cards[i].name){
        validation_error = true;
        let valid = Validators.required('',"Name Surname")
        this.props.blurName(i, valid)
      }
      if(!debit_cards[i].address){
        validation_error = true;
        let valid = Validators.required('',"Address")
        this.props.blurAddress(i, valid)
      }
    }

    let individual = this.props.contact_details.individual_members;
    for(let i = 0; i < individual.length; i++){
      if(!individual[i].surname){
        validation_error = true;
        let valid = Validators.required('',"Name Surname")
        this.props.blurSurname(i,'individual',valid)
      }
      if(!individual[i].bankName){
        validation_error = true;
        let valid = Validators.required('',"Bank Name")
        this.props.blurBankName(i,'individual',valid)
      }
      if(!individual[i].email){
        validation_error = true;
        let valid = Validators.required('',"Email")
        this.props.blurEmail(i,'individual',valid)
      }
      if(!individual[i].phone){
        validation_error = true;
        let valid = Validators.required('',"Phone")
        this.props.blurPhone(i,'individual',valid)
      }
    }
    let corporate = this.props.contact_details.corporate_members;
    for(let i = 0; i < corporate.length; i++){
      if(!corporate[i].surname){
        validation_error = true;
        let valid = Validators.required('',"Name Surname")
        this.props.blurSurname(i,'corporate',valid)
      }
      if(!corporate[i].bankName){
        validation_error = true;
        let valid = Validators.required('',"Bank Name")
        this.props.blurBankName(i,'corporate',valid)
      }
      if(!corporate[i].email){
        validation_error = true;
        let valid = Validators.required('',"Email")
        this.props.blurEmail(i,'corporate',valid)
      }
      if(!corporate[i].phone){
        validation_error = true;
        let valid = Validators.required('',"Phone")
        this.props.blurPhone(i,'corporate',valid)
      }
    }
    return validation_error
  }
  saveInDraft = () => {
   if (this.toValidation){
     return false
   }

    client.mutate({
      mutation: gql`
        mutation addContactDetails($contactDetails:ContactDetailsInput){
          addContactDetails(contactDetails:$contactDetails){
            ok
          }
        }
      `,
      variables: {
        contactDetails: {
          'requireMasterDebit': this.props.contact_details.require_master_debit,
          'openBankAccount': this.props.contact_details.bank_account,
          'company':  localStorage.getItem('company_id'),
          'managers':this.props.contact_details.individual_members.concat(this.props.contact_details.corporate_members),
          'debitCard':this.props.contact_details.debit_cards
        }
      }
    }).then(({data}) => {
        console.log(data)
      }
    )
    .catch((err) => {
      console.log(err)
    });

  }

  onChangeStepToPersonal = () => {
    if (this.saveInDraft){
      return false;
    }
    this.props.changeStepToPersonal('activities_information')
  }

  render() {
    let individual_members = [];
    let nominees = this.props.contact_details.individual_members;
    individual_members.push({value: '', label: "Already registered person"})
    for (let i = 0; i < nominees.length; i++) {
      individual_members.push({value: nominees[i].nominee_id, label: nominees[i].nominee})
    }
    let debit_cards_components = [];
    let debit_cards = this.props.contact_details.debit_cards;
    if (debit_cards.length) {
      for (let i = 0; i < debit_cards.length; i++) {
        if (debit_cards[i]) {
          debit_cards_components.push(
            <DebitCard
              error={this.props.contact_details.errors.debit_cards[i]}
              onChangeIndividualMember={this.onChangeIndividualMember}
              onBlurAddress={this.onBlurAddress}
              onChangeName={this.onChangeName}
              onChangeAddress={this.onChangeAddress}
              onBlurName={this.onBlurName}
              deleteDebitCard={this.deleteDebitCard}
              individual_members={individual_members}
              data={debit_cards[i]}
              debit_cards_components={debit_cards_components}
              key={i}
              flag={false}
              index={i}
            />
          )
        }
      }
    } else {
      this.addDebitCard(true);
      debit_cards_components.push(
        <DebitCard
          onChangeAddress={this.onChangeAddress}
          error={this.props.contact_details.errors.debit_cards[0]}
          onChangeIndividualMember={this.onChangeIndividualMember}
          onBlurAddress={this.onBlurAddress}
          onChangeName={this.onChangeName}
          onBlurName={this.onBlurName}
          deleteDebitCard={this.deleteDebitCard}
          individual_members={individual_members}
          debit_cards_components={debit_cards_components}
          data={debit_cards[0]}
          key={999999}
          flag={true}
          index={0}
        />
      )
    }

    let individual_bank_managers_component = [];
    let individual_bank_managers = this.props.contact_details.individual_members;
    if (individual_bank_managers) {
      for (let i = 0; i < individual_bank_managers.length; i++) {
        individual_bank_managers_component.push(
          <BankManagerDetails
            onBlurPhone={this.onBlurPhone}
            changeEmail={this.changeEmail}
            changePhone={this.changePhone}
            onBlurEmail={this.onBlurEmail}
            changeBankName={this.changeBankName}
            onBlurBankName={this.onBlurBankName}
            changeSurname={this.changeSurname}
            onBlurSurname={this.onBlurSurname}
            error={this.props.contact_details.errors.individual_members[i]}
            type="individual"
            data={individual_bank_managers[i]}
            key={i}
            index={i}
          />
        )
      }
    }

    let corporate_bank_managers_component = [];
    let corporate_bank_managers = this.props.contact_details.corporate_members;
    if (corporate_bank_managers.length) {
      for (let i = 0; i < corporate_bank_managers.length; i++) {
        corporate_bank_managers_component.push(
          <BankManagerDetails
            onBlurPhone={this.onBlurPhone}
            changeEmail={this.changeEmail}
            changePhone={this.changePhone}
            onBlurEmail={this.onBlurEmail}
            changeBankName={this.changeBankName}
            onBlurBankName={this.onBlurBankName}
            changeSurname={this.changeSurname}
            onBlurSurname={this.onBlurSurname}
            error={this.props.contact_details.errors.corporate_members[i]}
            type="corporate"
            data={corporate_bank_managers[i]}
            key={i}
            index={i}
          />
        )
      }
    }

    return (
      <ContactDetails
        onChangeStepToPersonal={this.onChangeStepToPersonal}
        saveInDraft={this.saveInDraft}
        individual_bank_managers_component={individual_bank_managers_component}
        corporate_bank_managers_component={corporate_bank_managers_component}
        debit_card={this.props.contact_details.require_master_debit}
        addDebitCard={this.addDebitCard}
        deleteDebitCard={this.deleteDebitCard}
        onChangeIndividualMember={this.onChangeIndividualMember}
        individual_members={individual_members}
        debit_cards_components={debit_cards_components}
        data={this.props.contact_details}
        changeBankAccount={this.changeBankAccount}
        changeMasterDebitRequire={this.changeMasterDebitRequire}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  contact_details: createSelector(
    (state) => state.contact_details,
    (ContactDetailsState) => ContactDetailsState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ContactDetailsActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactDetailsContainer)
