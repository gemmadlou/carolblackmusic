import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails
} from 'amazon-cognito-identity-js'

const poolId = 'eu-west-1_u4nERMAzy'

var poolData = {
  UserPoolId: '...', // Your user pool id here
  ClientId: '...' // Your client id here
}
var userPool = new CognitoUserPool({
  UserPoolId: poolId,
  ClientId: '47lglvqr6aluuh9g2b4bes8ci6'
})

export const state = () => ({
  loggedIn: false,
  jwt: async () => {
    return null
  }
})

export const mutations = {
  login(state, payload) {
    state.loggedIn = payload.loggedIn
    state.jwt = payload.jwt
  }
}

// const refreshSession = () => {
//   return new Promise((resolve, reject) => {
//     cognitoUser.refreshSession(refresh_token, (err, session) => {
//       if (err) {
//         reject(err)
//       }

//       resolve(session)
//     })
//   })
// }

export const actions = {
  async init({
    commit
  }) {

    await new Promise((resolve, reject) => {
        var cognitoUser = userPool.getCurrentUser()

        cognitoUser.getSession((err, session) => {
          console.log(err, session)
          if (err) {
            reject(err)
          }

          console.log('session validity: ' + session.isValid())

          resolve({
            loggedIn: session.isValid()
            // jwt: async () => {
            //   let token = session.getIdToken().getJwtToken()
            //   let refreshToken = session.getRefreshToken()
            //   // let expired = (new Date).getTime() < session.
            //   // if ()

            //   return token
            // }
          })
          console.log(this.$store.state.auth)
        })
      })
      .then((session) => {
        commit('login', session)
      })
  }
}
