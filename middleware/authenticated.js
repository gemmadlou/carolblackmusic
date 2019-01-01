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

export default async ({
  store,
  redirect
}) => {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    return redirect('/login')
  }
  return new Promise((resolve, reject) => {
    var cognitoUser = userPool.getCurrentUser()

    cognitoUser.getSession((err, session) => {
      if (err) {
        reject(err)
      }

      if (session.isValid()) {
        resolve(redirect('/admin/login'))
      }

      resolve({
        authenticated: true
      })
    })
  })
}
