const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");


input.addEventListener("input", () => {
    const trimmedValue = input.value.trim();
    output.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;

});




// if (trimmedValue === "") {
//     output.textContent = "Anonymous";
//   } else {
//     output.textContent = trimmedValue;
//   }