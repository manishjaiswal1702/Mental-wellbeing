document.getElementById("quizForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let totalScore = 0;
    const questions = [
        "q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"
    ];

    // Calculate the score based on selected options
    questions.forEach(function (q) {
        const answer = document.querySelector(`input[name="${q}"]:checked`);
          if (answer) {
            totalScore += parseInt(answer.value);
        }
        
    });

    // Provide suggestions based on score
    let resultText = "";
    if (totalScore <= 10) {
        resultText = "🌱 You seem to be in good mental health! Keep taking care of yourself and continue to prioritize your well-being. It's important to maintain balance and relaxation.";
    } else if (totalScore <= 20) {
        resultText = "💡 You're doing okay, but some areas may need attention. It's important to manage stress and ensure you're taking care of your mental health. Consider speaking to a friend or professional if needed.";
    } else if (totalScore <= 30) {
        resultText = "⚠ You may be experiencing emotional challenges or stress. It's a good idea to reach out to a mental health professional for support and explore self-care strategies.";
    } else {
        resultText = "🚨 You may be dealing with significant mental health concerns. It's highly recommended that you consult with a mental health professional as soon as possible to get the support you need.";
    }

    // Display the result
    document.getElementById("result").innerText = resultText;
});