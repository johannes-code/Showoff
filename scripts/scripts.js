const fonts = ["sarpanch-regular", "sarpanch-black", "bungee-outline-regular", "kablammo-uniquifier"];

function newFont() {
    const elements = [
        document.getElementById('overskrift'),
        document.getElementById('paragraf'),
        document.getElementById('sitat')
    ];
    
    elements.forEach(element => {
        if (element) {
            
            fonts.forEach(fontClass => element.classList.remove(fontClass));
            
            // Velg en tilfeldig font og legg til klassen
            const randomFont = Math.floor(Math.random() * fonts.length);
            const randomFontClass = fonts[randomFont];
            element.classList.add(randomFontClass);
            
            console.log("Added class:", randomFontClass, "to element:", element.id);
        }
    });
}

document.addEventListener('DOMContentLoaded', newFont);


//==================================================================
//Gallery

