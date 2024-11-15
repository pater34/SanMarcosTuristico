/*Funccion de los comentarios*/
function addComment(event, commentContainerId, commentCountId) {
    event.preventDefault();
    const commentInput = event.target.querySelector('input[type="text"]');
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
        const commentContainer = document.getElementById(commentContainerId);
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentContainer.appendChild(newComment);
        commentInput.value = "";

        // Actualizar el contador de comentarios
        const commentCount = document.getElementById(commentCountId);
        commentCount.textContent = parseInt(commentCount.textContent) + 1;
    }
}

// Función para ir a la página de inicio
document.getElementById("homeButton").onclick = function() {
    window.location.href = "index.html"; 
};

//Funcion logo index
document.addEventListener("DOMContentLoaded", function() {
    var welcomeScreen = document.getElementById("welcome-screen");
    var mainContent = document.getElementById("main-content");
    var escudo = document.getElementById("escudo");

    escudo.addEventListener("click", function() {
        welcomeScreen.style.display = "none";
        mainContent.style.display = "block";
    });
});


