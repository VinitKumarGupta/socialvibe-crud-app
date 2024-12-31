document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("postForm");
    const usernameField = document.getElementById("username");
    const contentField = document.getElementById("content");

    form.onsubmit = (event) => {
        const username = usernameField.value.trim();
        const content = contentField.value.trim();

        if (username === "" || content === "") {
            alert("Username or Content cannot be empty");
            event.preventDefault(); // Prevent form submission
        }
    };
});
