const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  version: '2020-04-01',
  authenticator: new IamAuthenticator({
    apikey: 'lN4kVFilT6blmprBl-TRc5vC9ET2QWhXQUqcakfkK5NA',
  }),
  url: 'https://api.us-south.assistant.watson.cloud.ibm.com',
});


function crearSession() {
  return assistant.createSession({
    assistantId: '5637685d-92d2-426d-ab00-9e833070760d'
  })
}

function deleteSession(id_session) {
  return assistant.deleteSession({
    assistantId: '5637685d-92d2-426d-ab00-9e833070760d',
    sessionId: id_session
  })
}


function sendMessage(input, id_session){
  return assistant.message({
    assistantId: '5637685d-92d2-426d-ab00-9e833070760d',
    sessionId: id_session,
    input: {
      'message_type': 'text',
      'text': input
      }
  })
}

module.exports = {
  crearSession,
  deleteSession,
  sendMessage
}