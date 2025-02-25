 //! Завдання 1 //
document.getElementById('myButton'). addEventListener('click', function() {
    const textValue = document.getElementById('textInput').value;
    if (textValue.trim() !== '') {
        this.textContent = textValue;
    }
});

//! Завдання 2 //

// document.getElementById("changeImage").addEventListener("click", function() {
//     document.getElementById("image").src = "https://images.immediate.co.uk/production/volatile/sites/10/2019/10/2048x1365-Trees-for-autumn-colour-GettyImages-471903735-7e8763a.jpg";
// });

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("changeImage").addEventListener("click", function() {
        let imgElement = document.getElementById("myImage");
        if (imgElement) {
            imgElement.src = "new-image.jpg";
        } else {
            console.error("Елемент із ID 'myImage' не знайдено.");
        }
    });
});

//! Завдання 3 //

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("changeAttributes").addEventListener("click", function() {
        const linkElement = document.getElementById("myLink");
        const imgElement = document.getElementById("myImage");
        
        if (linkElement) {
            linkElement.href = "https://new-link.com";
        }
        
        if (imgElement) {
            imgElement.alt = "Опис нового зображення";
        }
    });
}); 

//! Завдання 4 //

document.querySelector('#myList li').textContent = 'Текст змінено';