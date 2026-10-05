const submitButton = document.getElementById("submitButton");
const clearButton = document.getElementById("clearButton");
const message = document.getElementById("message");

submitButton.addEventListener("click", function () {

    const email = document.getElementById("email").value.trim();
    const confirmEmail =
        document.getElementById("confirmEmail").value.trim();

    const userId =
        document.getElementById("userId").value.trim();

    const confirmUserId =
        document.getElementById("confirmUserId").value.trim();

    message.className = "";
    message.textContent = "";

    /* Check required fields */

    if (
        email === "" ||
        confirmEmail === "" ||
        userId === "" ||
        confirmUserId === "" ||
        document.getElementById("surname").value.trim() === "" ||
        document.getElementById("givenName").value.trim() === "" ||
        document.getElementById("birthDate").value === ""
    ) {
        message.textContent = "Please complete all required fields.";
        message.className = "error";
        return;
    }

    /* Check email */

    if (email !== confirmEmail) {
        message.textContent =
            "Email addresses do not match.";

        message.className = "error";
        return;
    }

    /* Check User ID length */

    if (userId.length < 8 || userId.length > 20) {
        message.textContent =
            "User ID must be 8-20 characters.";

        message.className = "error";
        return;
    }

    /* Check User ID format */

    if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(userId)) {
        message.textContent =
            "User ID must start with a letter and may only contain letters, numbers, and underscores.";

        message.className = "error";
        return;
    }

    /* Check User IDs */

    if (userId !== confirmUserId) {
        message.textContent =
            "Preferred User IDs do not match.";

        message.className = "error";
        return;
    }

    /* Successful submission */

    message.textContent =
        "Registration submitted successfully.";

    message.className = "success";
});


/* Clear button */

clearButton.addEventListener("click", function () {

    const inputs = document.querySelectorAll("input");

    inputs.forEach(function (input) {

        if (input.type === "checkbox") {
            input.checked = false;
        } else {
            input.value = "";
        }

    });

    message.textContent = "";
    message.className = "";
});
