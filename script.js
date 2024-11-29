const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector("#send-btn");
const chatbox = document.querySelector(".chatbox");
const chatButton = document.querySelector(".chatbox-toggler");
const closeChatbotButtons = document.querySelectorAll(".close-chatbot");
const showChatbot = document.querySelector(".show-chatbot");

// Function to create a new chat message element
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing"
        ? `<p>${message}</p>`
        : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
};

// Simulating a chatbot response
const generateResponse = (userMessage) => {
    let botResponse = "";
    if (userMessage.includes("hello") || userMessage.includes("hi")) {
        botResponse = "Hi there! How can I help you today?";
    } else if (userMessage.includes("help")) {
        botResponse = "Sure, I can assist you. What do you need help with?";
    } else {
        botResponse = "I'm not sure I understand. Could you please clarify?";
    }

    setTimeout(() => {
        chatbox.appendChild(createChatLi(botResponse, "incoming"));
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);
};

// Handle sending the chat message
const handleChat = () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = "";

    setTimeout(() => {
        chatbox.appendChild(createChatLi("Thinking...", "incoming"));
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 300);

    generateResponse(userMessage);
};

// Event listener for send button
sendChatBtn.addEventListener("click", handleChat);

// Optional: Enable 'Enter' key to send the message
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleChat();
    }
});

// Toggle the chatbot visibility
chatButton.addEventListener("click", () => {
    showChatbot.classList.toggle("show");
    const isVisible = showChatbot.classList.contains("show");
    chatButton.querySelector(".open").style.opacity = isVisible ? "0" : "1";
    chatButton.querySelector(".close").style.opacity = isVisible ? "1" : "0";
});

// Close the chatbot when the close button inside the chatbot is clicked
closeChatbotButtons.forEach(button => {
    button.addEventListener("click", () => {
        showChatbot.classList.remove("show");
        chatButton.querySelector(".open").style.opacity = "1";
        chatButton.querySelector(".close").style.opacity = "0";
    });
});
