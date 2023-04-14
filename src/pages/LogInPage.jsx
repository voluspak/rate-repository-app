import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { loginValidationSchema } from '../validationSchemas/login'

const initialValues = {
  email: '',
  password: ''
}

const style = StyleSheet.create({
  form: {
    margin: 12
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -5,
    marginBottom: 20
  }
})

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        inputMode='email'
        {...props}
      />
      {meta.error && <StyledText style={style.error}>{meta.error}</StyledText>}
    </>
  )
}

const LogInPage = () => {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(value) => console.log(value)}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={style.form}>
            <FormikInputValue
              placeholder='E-mail'
              inputMode='email'
              name='email'
            />
            <FormikInputValue
              placeholder='Password'
              name='password'
              inputMode='text'
              secureTextEntry
            />
            <Button onPress={handleSubmit} title='Log In' />
          </View>
        )
      }}
    </Formik>
  )
}

export default LogInPage
