let userInput = document.getElementById("name");
const username = sessionStorage.getItem("user");
// if(username) userInput.value = username;

const sendUser = () => {
    if(userInput.value != "" && userInput.value != null){
        window.sessionStorage.setItem("user",userInput.value);
        document.getElementById("userForm").classList.add("hidden");
        document.getElementById("showLevels").classList.remove("hidden");
        document.getElementById("errorMessage").classList.add("hidden");
    }else{
        document.getElementById("errorMessage").classList.remove("hidden");
    }
}