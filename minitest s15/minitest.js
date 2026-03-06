let login = [
    {email: "thinh531240958@gmail.com", password: "12345", rePassword: "12345"},
    {email: "rikkeiedu@gmail.com", password: "53124", rePassword: "53124"},
];

function addInfo() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let rePassword = document.getElementById("rePassword").value;

    let obj = {
        email: email,
        password: password,
        rePassword: rePassword
    }

    login.push(obj);
    console.log(login);
}

function validate() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let rePassword = document.getElementById("rePassword").value;
    let checkEmail = login.find(user => user.email === email);

    if (checkEmail) {
        alert("Email đã tồn tại");
        return;
    }
    if (password === rePassword) {
        addInfo();
    } else {
        alert("rePassword đang không trùng password");
    }
}
