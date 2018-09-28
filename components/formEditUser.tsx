import { Component } from 'react'
import { Form, Input, Row, message, Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import { graphql, compose, MutationFunc } from 'react-apollo'
import { UploadUserPhoto, UploadUserPhotoVariables, DeleteUserPhoto, DeleteUserPhotoVariables, UpdateUserVariables, UpdateUser, User_user, User_user_photo } from 'types/schema-types'
import UPLOAD_USER_PHOTO from 'queries/user/uploadUserPhoto.graphql'
import DELETE_USER_PHOTO from 'queries/user/deleteUserPhoto.graphql'
import UPDATE_USER2 from 'queries/user/updateUser.graphql'
import USER_QUERY from 'queries/user/user.graphql'
import UploadFormUser from 'components/uploadFormUser'
import hasErrors from 'utilities/hasError'
import Router from 'next/router'

type FuncMutation = {
  uploadPhotoMutation: MutationFunc<UploadUserPhoto, UploadUserPhotoVariables>,
  deletePhotoMutation: MutationFunc<DeleteUserPhoto, DeleteUserPhotoVariables>,
  updateUser: MutationFunc<UpdateUser, UpdateUserVariables>,
}

type Props = {
  data: User_user
} & FormComponentProps & FuncMutation

const FormItem = Form.Item

type State = typeof initialState

const initialState = {
  filelist: {} as User_user_photo
}

class FormEditUser extends Component<Props, State> {
  readonly state: State = initialState

  componentDidMount() {
    const { form, data } = this.props 
    // To disabled submit button at the beginning.
    form.validateFields()
  
    form.setFieldsValue({
      name: data.name,
      email: data.email,
    })
  }

  private handleSubmit = (e) => {
    e.preventDefault()
    const { updateUser, form, data } = this.props

    form.validateFields((err, fieldsValue) => {
      if (!err) {
        updateUser({
          variables: {
            email: fieldsValue['email'],
            name: fieldsValue['name'],
            password: fieldsValue['password'],
            whereId: data.id
          }
        }).then(() => {
          message.success('Berhasil update')
          Router.push({ pathname: '/data-user' })
        }
        ).catch(() => 
          message.error('error update')
        )
      }
    })
  }
  
  render() {
    const { filelist } = this.state
    const { data } = this.props
    const { isFieldTouched, getFieldError, getFieldDecorator, getFieldsError } = this.props.form
    
    const nameError = isFieldTouched('name') && getFieldError('name')
    const emailError = isFieldTouched('email') && getFieldError('email')

    return (
      <Form
        layout="vertical"
        style={{ width: 480 }}
        onSubmit={this.handleSubmit}
      >
        <Row type="flex" justify="center">
          <div>
           <UploadFormUser 
              requesRemove={this.props.deletePhotoMutation}
              requestUpload={this.props.uploadPhotoMutation}
              defaultPhoto={filelist && filelist.id ? filelist : data.photo}
              callback={(data: any) => this.setState({ filelist: {...data.uploadUserPhoto}})}
              refetchQueries={[{
                query: USER_QUERY,
                variables: {
                  id: data.id
                }
              }]}
           />
          </div>
        </Row>
        <FormItem 
          label="Nama"
          validateStatus={nameError ? 'error' : 'success'}
          help={nameError || ''}
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'tolong masukkan nama!' }],
          })(
            <Input type="text"/>
          )}
        </FormItem>
        <FormItem 
          label="email"
          validateStatus={emailError ? 'error' : 'success'}
          help={emailError || ''}
        >
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'tolong masukkan email!' }],
          })(
            <Input type="text" />
          )}
        </FormItem>
        <FormItem 
          label="Password"
        >
          {getFieldDecorator('password', {
            rules: [{ required: false, message: 'tolong masukkan password!' }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} className="button-submit-login">
            Update
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const WithCompose = compose(
  graphql<{}, UploadUserPhoto, UploadUserPhotoVariables, {}>(UPLOAD_USER_PHOTO, {
    name: 'uploadPhotoMutation'
  }),
  graphql<{}, DeleteUserPhoto, DeleteUserPhotoVariables, {}>(DELETE_USER_PHOTO, {
    name: 'deletePhotoMutation'
  }),
  graphql<{}, UpdateUser, UpdateUserVariables, {}>(UPDATE_USER2,{
    name: 'updateUser'
  }),
  Form.create({}),
)(FormEditUser)

export default WithCompose