let login = [
    {email: `thinh531240958@gmail.com`, password: `12345`, rePassword: `12345`},
    {email: `rikkeiedu@gmail.com`, password: `53124`, rePassword: `53124`},
];

let loginList = document.getElementById(login);
function renderLogin() {
    let str = "";
    for (let i = 0; i < login.length; i++) {
        str = `
        <p>${login[i].email}</p>
        <input type="email" name="email">
        <p>${login[i].password}</p>
        <input type="password" name="password">
        <p>${login[i].rePassword}</p>
        <input type="password" name="password">
        <br>
        <button type="submit">Đăng Ký</button>
        `;
    };
    document.getElementById("login").innerHTML = str;
}

function addInfo() {
    document.getElementById(login).value;
    let obj = {
        email: email,
        password: password,
        rePassword: rePassword,
    }
    login.push(obj);
    console.log(login);
}

function validate() {
    if (password == rePassword) {
        addInfo(login);
    }else{
        
    }
}