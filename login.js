function auth() {  
    var uname = document.querySelector('#uname');
    var psw = document.querySelector('#psw');
    const loginBtn = document.querySelector('#loginBtn');

    if (uname != null && psw != null && loginBtn != null) {
        loginBtn.addEventListener('click', function() {
            window.location.assign("index2.html");
            alert('Login Successfully');
        });
    }
    else {
        alert('Login Failure');
        return;
    }
}