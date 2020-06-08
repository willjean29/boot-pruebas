const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  version: '2020-04-01',
  authenticator: new IamAuthenticator({
    apikey: '{apikey}',
  }),
  url: 'https://api.us-south.assistant.watson.cloud.ibm.com',
});


function crearSession() {
  return assistant.createSession({
    assistantId: '{assistantId}',
  })
}

function deleteSession(id_session) {
  return assistant.deleteSession({
    assistantId: '{assistantId}',
    sessionId: id_session
  })
}


function sendMessage(input, id_session){
  return assistant.message({
    assistantId: '{assistantId}',
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
