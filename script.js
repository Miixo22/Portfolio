// Function to open the chat window
function openChat() {
    const chatbot = document.querySelector('.chatbot');
    const openIcon = document.querySelector('.chatbox-toggler .open');
    const closeIcon = document.querySelector('.chatbox-toggler .close');
    const openChatBtn = document.querySelector('.open-chat-btn'); // Floating open button

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
    const openChatBtn = document.querySelector('.open-chat-btn'); // Floating open button

    // Hide the chatbot and switch the icons
    chatbot.classList.remove('show');
    openIcon.style.display = 'block';
    closeIcon.style.display = 'none';

    // Show the floating open chat button again
    openChatBtn.style.display = 'block';
}

// Unified bot response logic
function getBotResponse(userMessage) {


    const help = [
        "Skills",
        "Education",
        "Experience",
        "About",
      ];

      const bullethelp = help.map(item => `• ${item}`).join("\n");

    const responses = {
        help: bullethelp,
        hi: "Hello! I am MiBot. How can I assist you today?",
        hello: 'Hello! I am MiBot. How can I assist you today?',
        hey: 'Hey! I am MiBot. How can I assist you today?',
        'how are you': "I'm great, thank you for asking! 😊 How about you?",
        skills: 'My Soft Skills include: Communication, Teamwork, Adaptability, Emotional Intelligence, Creativity... and my Technical Skills include: C++, Java, HTML, CSS, SQL, Microsoft Suite, ER Modeling...',
        experience: 'I did my Work Integrated Learning with Mosebo Networks for a year.',
        education: 'I attended Noordwyk Secondary where I obtained my Matric Certificate in the year 2017. I then went to Tshwane University of Technology (TUT), where I completed my National Diploma in Information Technology (Software Development).',
        location: 'I am located in Midrand, Gauteng.',
        bye: 'Goodbye! Have a nice day!',
    };

    const lowerCaseMessage = userMessage.toLowerCase();
    return responses[lowerCaseMessage] || "Sorry, I didn't quite understand that. Can you rephrase?";
}

// Function to create and display a message
function createMessage(content, sender) {
    const messageElement = document.createElement("li");
    messageElement.classList.add("chat");
    messageElement.classList.add(sender === 'user' ? 'outgoing' : 'incoming');

    const icon = document.createElement("span");
    icon.classList.add("material-symbols-outlined");
    icon.textContent = sender === 'user' ? 'person' : 'smart_toy';

    const messageText = document.createElement("p");
    messageText.textContent = content;

    messageElement.appendChild(sender === 'user' ? messageText : icon);
    messageElement.appendChild(sender === 'user' ? icon : messageText);

    return messageElement;
}

// Function to handle sending a message
function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const userMessage = userInput.value.trim();
    

    if (userMessage) {
        // Display the user's message
        chatBox.appendChild(createMessage(userMessage, 'user'));

        // Clear the input field
        userInput.value = "";
        userInput.focus();

        // Scroll to the bottom of the chatbox
        chatBox.scrollTop = chatBox.scrollHeight;

        // Get and display bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            chatBox.appendChild(createMessage(botResponse, 'bot'));
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000); // Bot reply delay
    }
}

// Add event listeners for sending messages
document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Attach event listeners for chat toggler and close button
document.querySelector('.chatbox-toggler').addEventListener('click', openChat);
document.querySelector('.close-chatbot').addEventListener('click', closeChat);

// Ensure the chatbox is ready when DOM loads
document.addEventListener("DOMContentLoaded", function () {
    const initialMessage = document.querySelector("#chat-box .chat.incoming");
    if (initialMessage) {
        initialMessage.style.display = "none";
    }
});
