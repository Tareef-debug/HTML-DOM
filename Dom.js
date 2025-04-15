alert("dont take this test to seriously")
function validate(e) {
    e.preventDefault()
    
    const email = document.getElementById("email").value
    const pass = document.getElementById("password").value
    const age = document.getElementById("age").value
    const msgbox = document.getElementById("message")

    let message = ""

    if (email === ""){
        message = "Please enter your email"
        msgbox.style.color = "red"
    }
    else if (pass === ""){
        message = "Please enter your password"
        msgbox.style.color = "red"
    }
    else if (age === ""){
        message = "Please enter your age"
        msgbox.style.color = "red"
    }
    else {
        message = "login succesful"
        msgbox.style.color = "green"
    }
    msgbox.innerText = message
}    
