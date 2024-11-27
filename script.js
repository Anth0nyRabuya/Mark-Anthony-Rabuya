document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validate form
    if (fname === "" || lname === "" || email === "") {
        showMessage("Please fill in all fields.", "danger");
        return;
    }

    // Check if the email is a Gmail address
    if (!email.endsWith("@gmail.com")) {
        showMessage("Email must be a Gmail address (@gmail.com).", "danger");
        return;
    }

    // Display success message
    showMessage(`Thank you, ${fname}, for subscribing!`, "success");

    // Clear form
    document.getElementById("subscribeForm").reset();
});

function showMessage(message, type) {
    const messageDiv = document.getElementById("message");
    messageDiv.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}



    // Show the modal when the page loads
    window.onload = function() {
        var myModal = new bootstrap.Modal(document.getElementById('welcomeModal'), {
            keyboard: false
        });
        myModal.show();
    }
