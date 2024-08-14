// Function to generate a random password
function generatePassword(length = 12) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:',.<>?/";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Function to copy the input value to the clipboard
function copyToClipboard() {
    const input = document.querySelector('.input');
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    
    // Show notification
    const notification = document.getElementById('notification');
    notification.textContent = `${input.value} copied!`;
    notification.style.right = '20px'; // Slide in effect from the right

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.right = '-300px'; // Slide out effect to the right
    }, 3000);
}

// Event listener for the Generate button
document.querySelector('.btn').addEventListener('click', function() {
    const input = document.querySelector('.input');
    input.value = generatePassword(); // Generate and set a new password
});
