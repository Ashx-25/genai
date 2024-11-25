document.getElementById('sendBtn').addEventListener('click', function() {
    let userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return;

    // Display user's message
    appendMessage(userInput, 'user');
    
    // Clear input field
    document.getElementById('userInput').value = '';
    
    // AI response (for now, just echo the user's input with a simple delay)
    setTimeout(() => {
        let aiResponse = generateAIResponse(userInput);
        appendMessage(aiResponse, 'ai');
    }, 1000);  // Simulate AI thinking time
});

function appendMessage(message, sender) {
    let chatBox = document.getElementById('chatBox');
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    
    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAIResponse(userMessage) {
    // Simple AI response logic (this is where you would integrate with an AI service like OpenAI)
    return "You said: " + userMessage;
}
