document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input');
    const data = {
        email: inputs[0].value,
        password: inputs[1].value
    };

    console.log("Dados capturados:", data);
    alert("Iniciando processo de login...");
});
