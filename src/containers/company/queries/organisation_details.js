import {client} from "../../../apollo";
import gql from "graphql-tag";


export const organisation_details_initial_data_query = (getInitialData) => {
  client.query({
    query: gql`
      query{
        usersWithType(userType:"employee"){
          firstName
          lastName
          id
        }
      }
    `
  })
  .then(({data}) => {
      let employees = data.usersWithType;
      client.query({
        query: gql`
          query{
            agents{
              id
              name
            }
          }
        `
      }).then(({data}) => {
        let agents = data.agents;
        client.query({
          query: gql`
            query{
              individualNominees{
                id
                name
              }
            }
          `
        }).then(({data}) => {
          let individual_nominees = data.individualNominees;
          client.query({
            query: gql`
              query{
                corporateNominees{
                  id
                  name
                }
              }
            `
          }).then(({data}) => {
            let corporate_nominees = data.corporateNominees;
            client.query({
              query: gql`
                query{
                  memberTypes{
                    id
                    name
                  }
                }
              `
            }).then(({data}) => {
              let memberTypes = data.memberTypes;
              client.query({
                query:gql`
                  query{
                    usersWithType(userType:"client"){
                      id
                      lastName
                      firstName
                    }
                  }
                `
              }).then(({data}) => {
                let usersWithType = data.usersWithType
                client.query({
                  query: gql`
                    query {
                      shareTypes{
                        id
                        name
                      }
                    }
                  `
                }).then(({data}) => {
                  let shareTypes = data.shareTypes
                  client.query({
                    query: gql`
                      query{
                        registeredAddress{
                          id
                          address
                        }
                      }
                    `
                  }).then(({data}) => {
                    let registeredAddress = data.registeredAddress
                    client.query({
                      query: gql`
                        query{
                          memberTypes{
                            displayValue,
                            name,
                            id
                          }
                        }
                      `
                    }).then(({data}) => {
                      let member_types = []
                      for (let i = 0; i < data.memberTypes.length; i++) {
                        let one_data = {}
                        one_data[data.memberTypes[i].name] = data.memberTypes[i].id
                        member_types.push(one_data)
                      }
                      getInitialData(
                        agents,
                      employees,
                      individual_nominees,
                      corporate_nominees,
                      memberTypes,
                      usersWithType,
                      shareTypes,
                      registeredAddress,
                      member_types
                      )

                    })
                  })
                })
              })
            }).catch((err) => {
              console.log(err)
            })
          })
          .catch((err) => {
            console.log(err)
          })
        })
        .catch((err) => {
          console.log(err)
        })
      })
      .catch((err) => {
        console.log(err)
      });
    }
  )
  .catch((err) => {
    console.log(err)
  });

}

export const organisation_details_company_data = (id,setInitialData) => {
  client.query({
    query: gql`
      query companyData($id: Int){
        companyData(id: $id){
          name,
          tradingActivity,
          ultimateOwner,
          authorisedPerson,
          abbreviation,
          user{
            id
          },
          agent{
            id
          }
          sharecapitalSet{
            numberOfShares,
            typeOfShares {
              id
            },
            valuePerShare,
            classOfShare
          },
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
          companyregisteredaddressSet{
            registered{
              id,
              address
            }
          }
        }
      }
    `,
    variables:{
      id: id
    }
  }).then(({data}) => {
    let res = data.companyData;
    let organisation_details = {
      uma_user:'',
      beneficial_owner: res.ultimateOwner,
      proposed_company_name: res.name,
      agent:res.agent.id,
      authorised_person:res.authorisedPerson,
      proposed_company_abbreviation:res.abbreviation.toLowerCase(),
      company_type:'corporate_shareholder',
      client_user: res.user.id,
      company_other_address: '',
      company_address_service: res.companyregisteredaddressSet[0].registered.id,
      trading_activity: res.tradingActivity
    };
    let authorised_share_capital = [];
    if (res.sharecapitalSet){
      for(let i = 0; i < res.sharecapitalSet.length; i++){
        authorised_share_capital.push(
          {
            numberOfShares:res.sharecapitalSet[i].numberOfShares,
            typeOfShare:res.sharecapitalSet[i].typeOfShares.id,
            classOfShare:res.sharecapitalSet[i].classOfShare,
            valuePerShare:res.sharecapitalSet[i].valuePerShare,
          }
        )
      }
    }
    let corporate_members = [];
    let individual_members = [];


    if (res.memberSet){
      for (let i = 0; i < res.memberSet.length; i++ ){
        if (res.memberSet[i].nominee[0].nomineeType === "CORPORATE"){
          let corporate_member = {
            nominee:res.memberSet[i].nominee[0].id,
            companyName:'',
            types:
              {
                corporate_director: false,
                corporate_shareholder: false
              },
            position:'corporate'
          };
          if(res.memberSet[i].memberType){
            for (let j = 0; j< res.memberSet[i].memberType.length; j++){
              let array = Object.values(res.memberSet[i].memberType[j]);
              if(array.indexOf("corporate_director") !== -1){
                corporate_member.types.corporate_director = true;
              }
              if(array.indexOf("corporate_shareholder") !== -1){
                corporate_member.types.corporate_shareholder = true;
              }
            }
          }
          corporate_members.push(corporate_member)
        }else if(res.memberSet[i].nominee[0].nomineeType === "INDIVIDUAL"){
          let individual_member = {
            nominee:res.memberSet[i].nominee[0].id,
            companyName:'',
            types:
              {
                individual_director: false,
                individual_shareholder: false,
                secretary: false,
                bank_signatory: false,
                beneficiary: false,
                settlor: false,
                protector: false,
                administrator: false,
              },
            position:'individual'
          };
          if(res.memberSet[i].memberType){
            for (let j = 0; j< res.memberSet[i].memberType.length; j++){
              let array = Object.values(res.memberSet[i].memberType[j]);
              if(array.indexOf("individual_director") !== -1){
                individual_member.types.individual_director = true;
              }
              if(array.indexOf("individual_shareholder") !== -1){
                individual_member.types.individual_shareholder = true;
              }
              if(array.indexOf("secretary") !== -1){
                individual_member.types.secretary = true;
              }
              if(array.indexOf("bank_signatory") !== -1){
                individual_member.types.bank_signatory = true;
              }
              if(array.indexOf("beneficiary") !== -1){
                individual_member.types.beneficiary = true;
              }
              if(array.indexOf("settlor") !== -1){
                individual_member.types.settlor = true;
              }
              if(array.indexOf("protector") !== -1){
                individual_member.types.protector = true;
              }
              if(array.indexOf("administrator") !== -1){
                individual_member.types.administrator = true;
              }
            }
          }
          individual_members.push(individual_member)
        }
      }
    }

    setInitialData(corporate_members,individual_members,authorised_share_capital,organisation_details)
  })
}
