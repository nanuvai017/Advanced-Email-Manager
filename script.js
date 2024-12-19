// Notification Permission
if (Notification.permission === "default") {
    Notification.requestPermission();
}

// Show Notification
function showNotification(title, body) {
    if (Notification.permission === "granted") {
        new Notification(title, { body });
    } else {
        alert(`${title}: ${body}`);
    }
}

// User Authentication
document.getElementById("authForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("usernameAuth").value;
    const password = document.getElementById("passwordAuth").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("authResponse").innerText = "Login Successful!";
        showNotification("Login Success", "You have logged in successfully.");
    } else {
        document.getElementById("authResponse").innerText = "Invalid credentials. Try again.";
        showNotification("Login Failed", "Invalid username or password.");
    }
});

// Gmail Creation
document.getElementById("gmailForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const domain = document.getElementById("domain").value;

    const email = `${username}@${domain}`;
    document.getElementById("response").innerHTML = `
        <p>Email Created Successfully!</p>
        <p><strong>Email:</strong> ${email}</p>
    `;

    showNotification("Email Created", `Your email (${email}) was created successfully.`);
});

// API Configuration
document.getElementById("apiConfigForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const apiKey = document.getElementById("apiKey").value;
    const domain = document.getElementById("domainConfig").value;

    alert(`API Key: ${apiKey}, Domain: ${domain}`);
    showNotification("API Configuration", "Your API settings have been saved.");
});
