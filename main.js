document.addEventListener('DOMContentLoaded', function() {
    // Grosses Bild Abschnitt
    var grossesBild = document.getElementById('grosses_bild');
    var meinText = document.getElementById('meinText');
    var textVerschobenMonochrom = false;

    grossesBild.addEventListener('click', function() {
        if (!textVerschobenMonochrom) {
            meinText.style.marginTop = '140%';
            grossesBild.classList.add('focus');
            textVerschobenMonochrom = true;
        } else {
            meinText.style.marginTop = '0';
            grossesBild.classList.remove('focus');
            textVerschobenMonochrom = false;
        }
    });

    grossesBild.addEventListener('mouseover', function() {
        if (!textVerschobenMonochrom) {
            var aktuelleMarginTop = parseFloat(getComputedStyle(meinText).marginTop);
            meinText.style.marginTop = (aktuelleMarginTop + 20) + '%';
        }
    });

    grossesBild.addEventListener('mouseout', function() {
        if (!textVerschobenMonochrom) {
            meinText.style.marginTop = '0';
        }
    });

    // Animal Abschnitt
    var animal = document.getElementById('animal');
    var textAnimal = document.getElementById('text_animal');
    var textVerschobenAnimal = false;

    animal.addEventListener('click', function() {
        if (!textVerschobenAnimal) {
            textAnimal.style.paddingTop = '80%'; // Hier geändert auf 140%
            animal.classList.add('animal-focus');
            textVerschobenAnimal = true;
        } else {
            textAnimal.style.paddingTop = '0';
            animal.classList.remove('animal-focus');
            textVerschobenAnimal = false;
        }
    });

    animal.addEventListener('mouseover', function() {
        if (!textVerschobenAnimal) {
            var aktuellePaddingTop = parseFloat(getComputedStyle(textAnimal).paddingTop);
            textAnimal.style.paddingTop = (aktuellePaddingTop + 20) + '%';
        }
    });

    animal.addEventListener('mouseout', function() {
        if (!textVerschobenAnimal) {
            textAnimal.style.paddingTop = '0';
        }
    });
});