const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const convertBtn = document.getElementById('convert');

registerBtn.addEventListener('click', () =>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', () =>{
    container.classList.remove("active");
});

convertBtn.addEventListener('click', (e) =>{
    e.preventDefault(); // Ngăn chặn submit form
    container.classList.remove("active"); // Gỡ bỏ lớp "active"
});