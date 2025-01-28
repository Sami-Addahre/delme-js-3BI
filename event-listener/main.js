function changeColor(element) {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "cyan"];
    
    let currentColor = element.style.backgroundColor;
    let newColor;

    // Cambia il colore, assicurandosi che sia diverso dal precedente
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);

    element.style.backgroundColor = newColor;
}
