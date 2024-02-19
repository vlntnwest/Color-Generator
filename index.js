setInterval(function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);  

    const color = `rgb(${r}, ${g}, ${b})`;

document.documentElement.style.setProperty('--my-color', color);
document.body.innerHTML = `<h2>${color}</h2>`

},3000);


