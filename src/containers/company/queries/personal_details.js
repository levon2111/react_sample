import {client} from "../../../apollo";
import gql from "graphql-tag";


export const personal_details_step_get_members = (id, setInitialData) => {
  client.query({
    query: gql`
      query companyData($id: Int){
        companyData(id: $id){
          memberSet{
            id
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
      id: id
    }
  }).then(({data}) => {
    console.log(data)
    let res = data.companyData;
    let corporate_members = [];
    let individual_members = [];
    if (res.memberSet) {
      for (let i = 0; i < res.memberSet.length; i++) {
        if (res.memberSet[i].nominee[0].nomineeType === "CORPORATE") {
          let corporate_member = {
            id:res.memberSet[i].id,
            nominee: res.memberSet[i].nominee[0].name,
            nominee_id: res.memberSet[i].nominee[0].id,
            companyName: '',
            types:'/ ',
            position: 'corporate'
          };
          if (res.memberSet[i].memberType) {
            for (let j = 0; j < res.memberSet[i].memberType.length; j++) {
              let array = Object.values(res.memberSet[i].memberType[j]);
              if (array.indexOf("corporate_director") !== -1) {
                corporate_member.types += 'Director';
              }
              if (array.indexOf("corporate_shareholder") !== -1) {
                corporate_member.types += ' / Shareholder';
              }
            }
          }
          corporate_members.push(corporate_member)
        } else if (res.memberSet[i].nominee[0].nomineeType === "INDIVIDUAL") {
          let individual_member = {
            nominee: res.memberSet[i].nominee[0].name,
            nominee_id: res.memberSet[i].nominee[0].id,
            companyName: '',
            types: ' ',
            position: 'individual'
          };
          if (res.memberSet[i].memberType) {
            for (let j = 0; j < res.memberSet[i].memberType.length; j++) {
              let array = Object.values(res.memberSet[i].memberType[j]);
              if (array.indexOf("individual_director") !== -1) {
                individual_member.types += '/ Director';
              }
              if (array.indexOf("individual_shareholder") !== -1) {
                individual_member.types += ' / Shareholder';
              }
              if (array.indexOf("secretary") !== -1) {
                individual_member.types += ' / Secretary';
              }
              if (array.indexOf("bank_signatory") !== -1) {
                individual_member.types += ' / Bank Signatory';
              }
              if (array.indexOf("beneficiary") !== -1) {
                individual_member.types += ' / Beneficiary';
              }
              if (array.indexOf("settlor") !== -1) {
                individual_member.types += ' / Settlor';
              }
              if (array.indexOf("protector") !== -1) {
                individual_member.types += ' / Protector';
              }
              if (array.indexOf("administrator") !== -1) {
                individual_member.types += ' / Administrator';
              }
            }
          }
          individual_members.push(individual_member)
        }
      }
    }
    setInitialData(corporate_members, individual_members)
  }).catch(({err}) => {
    console.log(err)
  })
}
