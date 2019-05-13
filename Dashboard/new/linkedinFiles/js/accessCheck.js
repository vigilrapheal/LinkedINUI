var accessToken = localStorage.getItem("token");

if (accessToken === null || accessToken === 'default') {
    window.location.href = "login.html";
}

var base64Url = accessToken.split('.')[1];
var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
var jwtContent = JSON.parse(window.atob(base64));


// localStorage.setItem("scope", JSON.stringify(JSON.parse(window.atob(base64))));

if (jwtContent.exp < Date.now() / 1000) {
    localStorage.clear();
    window.location.href = "login.html";
}

$(document).ready(function () {
    $('#user-name').text(jwtContent.user);
});