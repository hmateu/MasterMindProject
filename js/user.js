const sendUser = () => {
    let user = document.getElementById("name").value;
    window.sessionStorage.setItem("user",user);
    document.getElementById("userForm").classList.add("hidden");
    document.getElementById("showLevels").classList.remove("hidden");
}