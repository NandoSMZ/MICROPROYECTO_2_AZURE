const messages = [
    { text: "Mensaje 1: ¡Bienvenido a la página dinámica!", color: "#333" },
    { text: "Mensaje 2: ¡Este es el segundo mensaje con color azul!", color: "#007BFF" },
    { text: "Mensaje 3: ¡Último mensaje con un fondo verde!", color: "#28a745" }
];

let currentIndex = 0;
let clickCount = 0;  // Contador de clics

const messageElement = document.getElementById('dynamic-message');
const buttonElement = document.getElementById('change-message-btn');
const clickCountElement = document.createElement('p'); // Elemento para mostrar el contador

// Inicializa el contador de clics en el DOM
clickCountElement.textContent = `Botón presionado: ${clickCount} veces`;
document.querySelector('.container').appendChild(clickCountElement);

// Escucha los clics en el botón
buttonElement.addEventListener('click', () => {
    // Cambia el mensaje y color
    currentIndex = (currentIndex + 1) % messages.length;
    messageElement.textContent = messages[currentIndex].text;
    messageElement.style.color = messages[currentIndex].color;

    // Incrementa y actualiza el contador de clics
    clickCount++;
    clickCountElement.textContent = `Botón presionado: ${clickCount} veces`;
});