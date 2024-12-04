// Conversation Logic: Questions related to portfolio, greetings, and location
function getPortfolioResponse(userMessage) {
    const responses = {
      hi: 'Hi! I am MiBot. How can I assist you today?',
      hello: 'Hello! I am MiBot. How can I assist you today?',
      hey: 'Hey! I am MiBot. How can I assist you today?',
      'how are you':"I'm great, thank you for asking! 😊 How about you? How can I assist you today?'",
      skills: 'My Soft Skills include: Communication, Teamwork, Adaptability, Emotional Intelligence, Creativity... and my Technical Skills include: C++, Java, HTML, CSS, SQL, Microsoft Suite, ER Modeling...',
      experience: 'I did my Work Integrated Learning with Mosebo Networks for a year.',
      education: 'I attend Noordwyk Secondary where I obtained my Matric Certificate in the year 2017. I than went to Tshwane University of Technology (TUT), where I completed my National Diploma in Information Technology (Software Development).',
      location: 'I am located in Midrand,Gauteng.',
      // Add more responses as needed
    };
   
   
    // Check for existing responses
    const lowerCaseMessage = userMessage.toLowerCase();
    return responses[lowerCaseMessage] || "Oops, I'm only a bot, and I’m stumped. Can we try again?";
  }
   
// Handle user input
  document.getElementById("send-btn").addEventListener("click", () => {
    const userMessage = document.getElementById("chat-input").value.trim();
    if (userMessage) {
      addMessage(userMessage, "sent"); // Display user message
      const botResponse = getPortfolioResponse(userMessage);
      setTimeout(() => addMessage(botResponse, "received"), 1000); // Simulate bot response
      document.getElementById("chat-input").value = ""; // Clear input
    }
  });

// Function to add messages to the chatbox
  function addMessage(content, type) {
    const message = document.createElement('div');
    message.className = type === 'sent' ? 'message-sent' : 'message-received';
    message.textContent = content;
    chatboxMessages.appendChild(message);
    chatboxMessages.scrollTop = chatboxMessages.scrollHeight; // Auto-scroll
  }