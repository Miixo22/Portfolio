// Function to open the chat window
function openChat() {
    const chatbot = document.querySelector('.chatbot');
    const openIcon = document.querySelector('.chatbox-toggler .open');
    const closeIcon = document.querySelector('.chatbox-toggler .close');
    const openChatBtn = document.querySelector('.open-chat-btn');  // Floating open button

    // Show the chatbot and switch the icons
    chatbot.classList.add('show');
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block';

    // Hide the floating open chat button
    openChatBtn.style.display = 'none';
}

// Function to close the chat window
function closeChat() {
    const chatbot = document.querySelector('.chatbot');
    const openIcon = document.querySelector('.chatbox-toggler .open');
    const closeIcon = document.querySelector('.chatbox-toggler .close');
    const openChatBtn = document.querySelector('.open-chat-btn');  // Floating open button

    // Hide the chatbot and switch the icons
    chatbot.classList.remove('show');
    openIcon.style.display = 'block';
    closeIcon.style.display = 'none';

    // Show the floating open chat button again
    openChatBtn.style.display = 'block';
}

// Function to create a new message element
function createMessage(content, sender) {
    const messageElement = document.createElement("li");
    messageElement.classList.add("chat");
    messageElement.classList.add(sender === 'user' ? 'outgoing' : 'incoming');
    
    const icon = document.createElement("span");
    icon.classList.add("material-symbols-outlined");
    icon.textContent = sender === 'user' ? 'person' : 'smart_toy';

    const messageText = document.createElement("p");
    messageText.textContent = content;

    // For user messages, icon goes on the right, for bot messages, icon goes on the left
    messageElement.appendChild(messageText);
    messageElement.appendChild(icon);

    return messageElement;
}


// Function to handle sending a message
function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const userMessage = userInput.value.trim();

    // If user input is not empty, display it
    if (userMessage) {
        // Display the user's message
        chatBox.appendChild(createMessage(userMessage, 'user'));

        // Clear the input field
        userInput.value = "";
        userInput.focus();

        // Scroll to the bottom of the chatbox
        chatBox.scrollTop = chatBox.scrollHeight;

        // Simulate a bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            chatBox.appendChild(createMessage(botResponse, 'bot'));
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000); // Bot reply delay
    }
}

// Function to simulate a basic bot response
function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (lowerCaseMessage.includes("tell me about yourself")) {
        return "I'm doing great, thank you for asking!";
    } else if (lowerCaseMessage.includes("bye")) {
        return "Goodbye! Have a nice day!";
    }
    else {
        return "Sorry, I didn't quite understand that. Can you rephrase?";
    }
}

// Add event listener to send button
document.getElementById("send-btn").addEventListener("click", sendMessage);

// Add event listener to the Enter key for sending a message
document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Attach event listeners for chat toggler and close button
document.querySelector('.chatbox-toggler').addEventListener('click', openChat);
document.querySelector('.close-chatbot').addEventListener('click', closeChat);

ocument.addEventListener("DOMContentLoaded", function() {
    const initialMessage = document.querySelector("#chat-box .chat.incoming");
    if (initialMessage) {
        initialMessage.style.display = "none";
    }
});
