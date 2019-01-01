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

export const getAuth = () => {
  return new Promise((resolve, reject) => {
    var cognitoUser = userPool.getCurrentUser()

    cognitoUser.getSession(async function (err, session) {
      console.log(err, session)
      if (err) {
        reject(err)
      }

      console.log('session validity: ' + session.isValid())

      if (!session.isValid()) {
        reject(new Error('Session is not valid'))
      }

      console.log(session.getRefreshToken())

      let now = (new Date).getTime()
      let refreshToken = session.getRefreshToken()

      if (now > session.getIdToken().getExpiration()) {
        console.log('here')
        session = await new Promise((resolve, reject) => {
          cognitoUser.refreshSession(refreshToken, (err, newSession) => {
            console.log('refreshr', refreshToken)
            if (err) {
              return reject(err)
            }

            resolve(newSession)
          })
        })

        console.log('new', session)
      }

      console.log('new', session)

      resolve({
        loggedIn: session.isValid(),
        jwt: session.getIdToken().getJwtToken()
      })
    })
  })
}
