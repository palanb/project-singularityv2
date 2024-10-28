// Redirect to shutdown page if website is shut down
if (localStorage.getItem('websiteShutdown') === 'true') {
    window.location.href = 'shutdown.html';
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "interstellar" && password === "newpassword123") {
        localStorage.setItem('loggedIn', true);
        window.location.href = 'intro.html';
    } else {
        alert('Incorrect credentials');
    }
});

// Button Actions
document.querySelector('.singularity-button').addEventListener('click', () => {
    window.location.href = 'intro.html';
});

document.querySelector('.logout-button').addEventListener('click', () => {
    localStorage.removeItem('loggedIn');
    window.location.href = 'logout.html';
});

document.querySelector('.panic-button').addEventListener('click', () => {
    window.location.href = 'https://classroom.google.com';
});

// Double "Esc" Function
let escCount = 0;
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        escCount++;
        if (escCount === 2) {
            window.location.href = 'https://classroom.google.com';
        }
        setTimeout(() => escCount = 0, 300);
    }
});

// Track number of active users
let activeUsers = JSON.parse(localStorage.getItem('activeUsers')) || 0;

// Check if login is disabled
if (localStorage.getItem('loginDisabled') === 'true') {
    document.getElementById('loginButton').disabled = true;
    document.getElementById('disabledMessage').style.display = 'block';
}

// Handle login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === "interstellar" && password === "newpassword123") {
        localStorage.setItem('loggedIn', true);
        activeUsers++;
        localStorage.setItem('activeUsers', JSON.stringify(activeUsers));
        window.location.href = 'intro.html';
    } else if (username === "admin" && password === "ilovefruit123") {
        localStorage.setItem('adminLoggedIn', true);
        activeUsers++;
        localStorage.setItem('activeUsers', JSON.stringify(activeUsers));
        window.location.href = 'admin.html';
    } else {
        alert('Incorrect credentials');
    }
});

function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('adminLoggedIn');
    activeUsers--;
    localStorage.setItem('activeUsers', JSON.stringify(activeUsers));
    window.location.href = 'index.html';
}
