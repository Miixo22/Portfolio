// Conversation Logic: Questions related to portfolio, greetings, and location
function getPortfolioResponse(userMessage) {
    const responses = {
      hi: 'Hello! How can I assist you with my portfolio today?',
      hello: 'Hi there! What would you like to know about my portfolio?',
      'how are you': "I'm just a bot, but I'm here to help! What can I do for you?",
      hey: 'Hey there! Feel free to ask me about my skills, experience, or projects.',
      skills: 'I am skilled in Python, PHP, Flutter, HTML5, CSS3, and JavaScript.',
      experience: 'I have 1 year of experience as a PHP Backend Developer at Mukuru and 6 months as a Junior Data Analyst.',
      projects: 'I have worked on several projects, including ride-sharing apps, subscription systems, and gym management apps.',
      education: 'I hold a Diploma in Computer System Engineering, which I completed in 2020.',
      location: 'I am based in South Africa and can collaborate remotely or in-person.',
      // Add more responses as needed
    };
   
   
    // Check for existing responses
    const lowerCaseMessage = userMessage.toLowerCase();
    return responses[lowerCaseMessage] || "I'm sorry, I didn't understand that. Can you please clarify?";
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