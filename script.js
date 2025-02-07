
function submitForm() {
    const name = document.getElementById("name").value;
    const country = document.getElementById("country").value;
    const phone = document.getElementById("phone").value;
    const countryError = document.getElementById("countryError").textContent;
    if (name && country && phone && countryError === "") {
        Swal.fire({
            title: "Success!",
            text: "Details are correct!",
            icon: "success",
            confirmButtonColor: "#28a745"
        });
    } else {
        Swal.fire({
            title: "Oops!",
            text: "Please fill out all fields.",
            icon: "error",
            confirmButtonColor: "#dc3545"
        });
    }
}


// function validateCountry() {
//     const countryInput = document.getElementById("country");
//     const countryError = document.getElementById("countryError");

//     // Regular expression: Only letters (both uppercase and lowercase) allowed
//     const regex = /^[A-Za-z\s]+$/;

//     if (!regex.test(countryInput.value)) {
//         countryError.textContent = "❌ Only alphabets are allowed.";
//         countryInput.style.border = "2px solid red";
//     } else {
//         countryError.textContent = "";
//         countryInput.style.border = "2px solid green";
//     }
// }




