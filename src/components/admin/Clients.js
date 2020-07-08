import React from "react";
import pure from "recompose/pure";
import {Button, Container, Form, Header, Input, Table} from "semantic-ui-react";

function Clients({
                   client,
                   clients,
                   onChangeEmail,
                   onChangeFirstName,
                   onChangeLastName,
                   onChangeCompany,
                   onClickAddClient,
                   onClickSendInvitation,
                 }) {
  return (
    <div>
      <Container text>
        <div>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field control={Input} icon='close' label='EMAIL ADDRESS' onChange={onChangeEmail}
                          value={client.email} placeholder='Email address'/>
              <Form.Field control={Input} icon='close' label='FIRST NAME' onChange={onChangeFirstName}
                          value={client.firstName} placeholder='First name'/>
              <Form.Field control={Input} icon='close' label='LAST NAME' onChange={onChangeLastName}
                          value={client.lastName} placeholder='Last name'/>
              <Form.Field control={Input} icon='close' label='COMPANY' onChange={onChangeCompany} value={client.company}
                          placeholder='Company name'/>
            </Form.Group>
            <Form.Field control={Button} type="button" onClick={onClickAddClient}>Add another</Form.Field>
            <Form.Field control={Button} type="button" onClick={onClickSendInvitation}>Send Invitation</Form.Field>
          </Form>
        </div>
      </Container>
      <Container text>
        <Header as='h2'>CLIENT USERS LIST</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>EMAIL ADDRESS</Table.HeaderCell>
              <Table.HeaderCell>FIRST NAME</Table.HeaderCell>
              <Table.HeaderCell>LAST NAME</Table.HeaderCell>
              <Table.HeaderCell>COMPANY NAME</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {clients}
          </Table.Body>
        </Table>
      </Container>
    </div>
  )
}

export default pure(Clients)
