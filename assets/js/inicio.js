document.getElementById('uploadImage').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();
    
    if (messageText !== '') {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const chatContainer = document.getElementById('chat-container');
        
        const newChatDiv = document.createElement('div');
        newChatDiv.classList.add('Chat');
        
        const newPara = document.createElement('p');
        newPara.classList.add('user-message'); // Adicione uma classe específica para suas mensagens

        newPara.innerHTML = `
            <input class="user-icon" type="text" placeholder="U">
            <span>Seu Nome</span> <span>${messageText}</span>
        `;

        const timePara = document.createElement('p');
        timePara.classList.add('hora');
        timePara.textContent = currentTime;

        newChatDiv.appendChild(newPara);
        newChatDiv.appendChild(timePara);
        
        chatContainer.appendChild(newChatDiv);

        // Clear the input field
        messageInput.value = '';
        
        // Scroll to the bottom of the chat container
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
});