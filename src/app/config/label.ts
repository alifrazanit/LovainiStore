export const Label = {
  forms: {
    username: {
      label: "Username",
      placeholder: "Username"
    },
    name: {
      label: "Name",
      placeholder: "Name"
    },
    password: {
      label: "Password",
      placeholder: "Password"
    },
    email: {
      label: "Email",
      placeholder: "Email"
    },
    phone: {
      label: "Phone",
      placeholder: "Phone",
      validationMessage: {
        validFormat:"phone  maxlength = 15 & minlength = 11, phone must start with 62 | +62 | 08"
      }
    },
  },
  loginPage:{
    signIn:"Sign In.",
    signUp:"Sign Up.",
    rememberMe: 'Remember me?',
    dontHaveAccount: "Don\'t have account?"
  },
  buttons:{
    signIn:"Sign In",
    signUp:"Sign Up",
    okay: "Okay"
  },
  message:{
    failLogin1: "Incorrect username or password",
    errorServer: "An error occurred on the server",
    pleasefillform:"please complete the form correctly"
  },
  labels: {
    titleModal: 'System Info',
    pleaseProvideValid: 'Please provide a valid'
  }
}
