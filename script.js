const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    // Prevent page from refreshing
    event.preventDefault();

    // Get form values
    const email = document.getElementById("email");
    const confirmEmail =
        document.getElementById("confirmEmail");

    const username =
        document.getElementById("username");

    const confirmUsername =
        document.getElementById("confirmUsername");

    // Error messages
    const emailError =
        document.getElementById("emailError");

    const usernameError =
        document.getElementById("usernameError");

    const successMessage =
        document.getElementById("successMessage");

    let valid = true;


    // Reset previous errors

    emailError.style.display = "none";
    usernameError.style.display = "none";

    email.classList.remove("invalid");
    confirmEmail.classList.remove("invalid");

    username.classList.remove("invalid");
    confirmUsername.classList.remove("invalid");


    // Check email

    if (email.value !== confirmEmail.value) {

        emailError.style.display = "block";

        email.classList.add("invalid");
        confirmEmail.classList.add("invalid");

        valid = false;
    }


    // Check username

    if (username.value !== confirmUsername.value) {

        usernameError.style.display = "block";

        username.classList.add("invalid");
        confirmUsername.classList.add("invalid");

        valid = false;
    }


    // If everything is correct

    if (valid) {

        successMessage.style.display = "block";

        successMessage.textContent =
            "Registration submitted successfully!";

        successMessage.scrollIntoView({
            behavior: "smooth"
        });

        console.log(
            "Registration submitted successfully!"
        );
    }

});


// Clear success message when reset button is clicked

form.addEventListener("reset", function() {

    document.getElementById("successMessage")
        .style.display = "none";

    document.getElementById("emailError")
        .style.display = "none";

    document.getElementById("usernameError")
        .style.display = "none";

});
