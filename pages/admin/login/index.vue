<template>
  <div id="page" class="relative hidden page pa3 df items-center minh-75v">
    <form v-on:submit="login" class="maxw-xxbig w-100 ml-au mr-au">
      <fieldset>
        <div class="bg-white pa1 pl2 pr2 db bwa1 mb1">
          <input
            v-model="email"
            class="bg-transparent bwa0 db w-100 fs2 blue"
            name="email"
            type="text"
            placeholder="Enter email"
          >
        </div>
      </fieldset>

      <fieldset>
        <div class="bg-white pa1 pl2 pr2 db bwa1 mb1">
          <input
            v-model="password"
            class="bg-transparent bwa0 db w-100 fs2 blue"
            name="password"
            type="password"
            placeholder="password"
          >
        </div>
      </fieldset>
      <span v-if="error" class="mb1 fs1 lh2 dib red">{{ error }}</span>
      <button
        href="/admin/dashboard"
        class="pointer fs2 pa1 pl3 pr3 w-100 db align-center bdr6 bs-solid bwa1 lh2 bc-transparent bg-blue tl ice ls2"
      >Login</button>
    </form>
  </div>
</template>

<script>
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails
} from 'amazon-cognito-identity-js'

export default {
  layout: 'admin',
  data() {
    return {
      password: '',
      email: '',
      error: ''
    }
  },
  methods: {
    login(e) {
      e.preventDefault()

      this.error = ''

      const poolId = 'eu-west-1_u4nERMAzy'
      const region = 'eu-west-1'

      const creds = {
        Username: this.email,
        Password: this.password
      }

      console.log(creds)

      const auth = new AuthenticationDetails(creds)

      var pool = new CognitoUserPool({
        UserPoolId: poolId,
        ClientId: '47lglvqr6aluuh9g2b4bes8ci6'
      })

      let handleErrors = err => {
        this.error = err.message
      }

      let goTo = route => {
        this.$router.push(route)
      }

      try {
        const cognitoUser = new CognitoUser({
          Username: creds.Username,
          Pool: pool
        })

        console.log(pool)

        console.log(cognitoUser)

        cognitoUser.authenticateUser(auth, {
          onSuccess: function(result) {
            console.log('here')
            var accessToken = result.getIdToken().getJwtToken()
            console.log(accessToken)
            if (accessToken) {
              goTo('/admin/dashboard')
            }
          },

          onFailure: err => {
            if (err.code === 'UnknownError') {
              return
            }
            handleErrors(err)
          },

          newPasswordRequired: function(userAttributes, requiredAttributes) {
            alert('new pass')
            delete userAttributes.email_verified
            goTo('/admin/login/reset')
          },

          //Optional automatic callback
          inputVerificationCode: function() {
            var verificationCode = prompt(
              'Please input verification code: ',
              ''
            )
            cognitoUser.verifyAttribute('email', verificationCode, this)
          }
        })
      } catch (error) {
        this.error = `${error.message} ///`
      }
    }
  }
}
</script>