const coinContainer = document.querySelector('.coin-container');
const coin = document.querySelector('.coin-container__coin');
const button = document.querySelector('.flip-coin__button');

const flipTheCoin = () =>{

    const text = document.querySelector(".flip-coin__result")

    button.disabled = true
    text.textContent = '...'

    const randomResult  = Math.random() < 0.5 ? "Heads" : "Tails";

    const gradosRotacionInicial = coin.style.transform.includes('rotateX')
    ? parseFloat(coin.style.transform.split('rotateX(')[1].split('deg)')[0])
    : 0;
    
    const gradosRotacionAleatoria = Math.floor(Math.random() * 3600) + 1800; // Rotación aleatoria para la animación

    // Iniciar la animación
    coin.style.transform = `rotateX(${gradosRotacionAleatoria}deg)`;

    // Esperar a que termine la animación y mostrar el resultado
    setTimeout(() => {

        coin.style.transition = 'none'; // Quitar la transición para el cambio final

        if (randomResult === 'Heads') {
            coin.style.transform = `rotateX(${gradosRotacionInicial % 360}deg)`;
            text.textContent = randomResult
        } else {
            coin.style.transform = `rotateX(${gradosRotacionInicial % 360 + 180}deg)`;
            text.textContent = randomResult
        }

        button.disabled = false;

        // Forzar un reflow para que la transición vuelva a activarse
        void coin.offsetWidth;
        coin.style.transition = 'transform 2s ease-in-out';

    }, 2000); // La duración debe coincidir con la transición CSs
};

coin.addEventListener("click", flipTheCoin);
button.addEventListener("click", flipTheCoin);