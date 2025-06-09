// app.js
function sendMessage() {
  const input = document.getElementById('userInput');
  const chat = document.getElementById('chat');

  const userMessage = input.value;
  if (!userMessage.trim()) return;

  const userDiv = document.createElement('div');
  userDiv.className = 'message user';
  userDiv.textContent = userMessage;
  chat.appendChild(userDiv);

  const botDiv = document.createElement('div');
  botDiv.className = 'message bot';
  botDiv.textContent = "अगं काय म्हणतोस महेश? 😊";  // Example message
  chat.appendChild(botDiv);

  input.value = '';
}
