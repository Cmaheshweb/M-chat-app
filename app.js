
let avatarPath = 'images/female-avatar.png';

function selectAvatar(type) {
    avatarPath = type === 'male' ? 'images/male-avatar.png' : 'images/female-avatar.png';
    document.getElementById('avatar').src = avatarPath;
    localStorage.setItem('selectedAvatar', avatarPath);
}

function sendMessage() {
    const msg = document.getElementById('message').value;
    alert("You said: " + msg);
}

window.onload = () => {
    const savedAvatar = localStorage.getItem('selectedAvatar');
    if (savedAvatar) {
        document.getElementById('avatar').src = savedAvatar;
    }
}
