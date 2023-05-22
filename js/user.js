const sendUser = () => {
    let user = document.getElementById("name").value;
    if(user != "" && user != null){
        window.sessionStorage.setItem("user",user);
        document.getElementById("userForm").classList.add("hidden");
        document.getElementById("showLevels").classList.remove("hidden");
        document.getElementById("errorMessage").classList.add("hidden");
    }else{
        document.getElementById("errorMessage").classList.remove("hidden");
    }
}