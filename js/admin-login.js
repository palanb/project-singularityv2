document.getElementById('adminLoginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    
    if (username === "admin" && password === "ilovefruit123") {
        window.location.href = 'admin.html';
    } else {
        alert('Incorrect admin credentials');
    }
});
