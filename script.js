function mylg() {
    document.getElementById('lg').style.display="flex";
}
function myPass() {
    var x = document.getElementById("MyPassword");
    if (x.type === "password") {
        x.type = "text";
    }   else {
        x.type = "password";
    }
}

