import React from 'react';
import {Box, Button, Checkbox, FormLabel, Input} from "@chakra-ui/react";
import {withFormik, FormikProps} from "formik";
import * as Yup from "yup";


interface FormValues {
  email: string
  password: string
  rememberMe: boolean
}

interface OtherProps {
  title?: string;
}

interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
  initialRememberMe?: boolean;
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
    title
  } = props;
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Box w={'400px'} borderWidth='1px' borderRadius='lg' p={'3'} mt={'100px'}>
        <FormLabel><h1>Login{title}</h1></FormLabel>
        <form onSubmit={handleSubmit}>

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
export const Login = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    email: props.initialEmail || "",
    password: props.initialPassword || "",
    rememberMe: props.initialRememberMe || false
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string().required("Password is required")
  }),
  handleSubmit({email, password, rememberMe}: FormValues, {props, setSubmitting, setErrors}) {
    console.log(email, password, rememberMe);
  }
})(InnerForm)
