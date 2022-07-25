import React from 'react';
import {Box, Button, Checkbox, FormLabel, Input} from "@chakra-ui/react";
import {withFormik, FormikProps} from "formik";
import * as Yup from "yup";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";


interface FormValues {
  email: string
  password: string
  rememberMe: boolean
  captcha: boolean
}

interface OtherProps {
  title?: string;
}


interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
  initialRememberMe?: boolean;
  login: (email: string,
          password: string,
          rememberMe: boolean,
          captcha: boolean,
          setStatus:any
          )=>void,
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    title,
    status
  } = props;

  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Box w={'400px'} borderWidth='1px' borderRadius='lg' p={'3'} mt={'100px'}>
        <FormLabel><h1>Login{title}</h1></FormLabel>
        <form onSubmit={handleSubmit} name={'login'}>

          <Box borderWidth='1px' borderRadius='lg' p={'5'}>
            <Box>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

            </Box>
            <Box>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </Box>
            <Box color={'red'}>
              {status.error}
            </Box>
          </Box>
          <Box mt={'5'}>
            <Box float={'left'}>
              <Checkbox name='rememberMe'
                        colorScheme={'teal'}
                        onChange={handleChange}>
                Remember
              </Checkbox>
            </Box>
            <Button
              float={'right'}
              type="submit"
              colorScheme={'teal'}
              disabled={
                isSubmitting ||
                !!(errors.email && touched.email) ||
                !!(errors.password && touched.password)
              }
            >
              Sign In
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export const LoginFormik = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    email: props.initialEmail || "",
    password: props.initialPassword || "",
    rememberMe: props.initialRememberMe || false,
    captcha: true,
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string().required("Password is required")
  }),
  mapPropsToStatus: props => ({
    error : ""
  }),
  handleSubmit({email, password, rememberMe, captcha}: FormValues, {props, setSubmitting,setStatus}) {

    props.login(email, password, rememberMe, captcha,setStatus)
    setSubmitting(false)
  }
})(InnerForm)

export const Login = connect(null,
  {login})(LoginFormik)