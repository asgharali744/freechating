// JavaScript code for handling basic message sending (not real chat)
function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const chatBox = document.getElementById("chat-box");

    if (messageInput.value.trim() === "") return;

    // Create and append user message
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerText = messageInput.value;
    chatBox.appendChild(userMessage);

    // Clear the input
    messageInput.value = "";

    // Auto-scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate a stranger's response (for demonstration only)
    setTimeout(() => {
        const strangerMessage = document.createElement("div");
        strangerMessage.classList.add("message", "stranger");
        strangerMessage.innerText = "Hello! How can I help you?";
        chatBox.appendChild(strangerMessage);

        // Auto-scroll to the latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
