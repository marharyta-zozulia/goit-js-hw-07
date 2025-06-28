const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const {
        email, password } = form.elements;

    
    const emailValue = email.value.trim();
const passwordValue = password.value.trim();

if (emailValue === "" || passwordValue === "") {
    alert("All fields must be filled in");
    return;
}

const formInfo = {
    email: emailValue,
    password: passwordValue
};

console.log(formInfo);
form.reset();


});
