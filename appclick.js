const username = document.querySelector ("#user")
const password = document.querySelector ("#pass")
const button = document.querySelector (".btn")
button.addEventListener ("click", function() {
    const userValue = username.value 
    console.log (userValue)
    const passValue = password.value
    console.log (passValue)
     if (userValue!== "appclick" || passValue!== "appclick123") {
         alert ("Username/Password is incorrect")}
})
