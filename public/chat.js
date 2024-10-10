const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessage');

sendMessageButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        socket.emit('chat-message', message);
        addMessageToChat('You', message);
        messageInput.value = '';
    }
});

socket.on('chat-message', (message) => {
    addMessageToChat('Stranger', message);
});

function addMessageToChat(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
