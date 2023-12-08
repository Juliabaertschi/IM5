<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    // Grosses Bild Abschnitt
    var grossesBild = document.getElementById('grosses_bild');
    var meinText = document.getElementById('meinText');
    var textVerschobenMonochrom = false;

    grossesBild.addEventListener('click', function() {
        if (!textVerschobenMonochrom) {
            meinText.style.marginTop = '110%';
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
            textAnimal.style.paddingTop = '60%'; 
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

// boots
    var boots = document.getElementById('boots');
    var text_boots = document.getElementById('text_boots');
    var textVerschoben = false;

    boots.addEventListener('click', function() {
        if (!textVerschoben) {
            text_boots.style.marginTop = '95%';
            boots.classList.add('boots-focus');
            textVerschoben = true;
        } else {
            text_boots.style.marginTop = '0';
            boots.classList.remove('boots-focus');
            textVerschoben = false;
        }
    });

    boots.addEventListener('mouseover', function() {
        if (!textVerschoben) {
            var aktuelleMarginTop = parseFloat(getComputedStyle(text_boots).marginTop);
            text_boots.style.marginTop = (aktuelleMarginTop + 20) + '%';
        }
    });

    boots.addEventListener('mouseout', function() {
        if (!textVerschoben) {
            text_boots.style.marginTop = '0';
        }
    });

// nordic

var nordic = document.getElementById('nordic');
var text_nordic = document.getElementById('text_nordic');
var textVerschoben = false;

nordic.addEventListener('click', function() {
    if (!textVerschoben) {
        text_nordic.style.paddingTop = '70%'; 
        nordic.classList.add('nordic-focus');
        textVerschoben = true;
    } else {
        text_nordic.style.paddingTop = '0';
        nordic.classList.remove('nordic-focus');
        textVerschoben = false;
    }
});

nordic.addEventListener('mouseover', function() {
    if (!textVerschoben) {
        var aktuellePaddingTop = parseFloat(getComputedStyle(text_nordic).paddingTop);
        text_nordic.style.paddingTop = (aktuellePaddingTop + 20) + '%';
    }
});

nordic.addEventListener('mouseout', function() {
    if (!textVerschoben) {
        text_nordic.style.paddingTop = '0';
    }
});

//accessoir

var accessoir = document.getElementById('accessoir');
var text_accessoir = document.getElementById('text_accessoir');
var textVerschoben = false;

accessoir.addEventListener('click', function() {
    if (!textVerschoben) {
        text_accessoir.style.paddingTop = '30%'; 
        accessoir.classList.add('accessoir-focus');
        textVerschoben = true;
    } else {
        text_accessoir.style.paddingTop = '0';
        accessoir.classList.remove('accessoir-focus');
        textVerschoben = false;
    }
});

accessoir.addEventListener('mouseover', function() {
    if (!textVerschoben) {
        var aktuellePaddingTop = parseFloat(getComputedStyle(text_accessoir).paddingTop);
        text_accessoir.style.paddingTop = (aktuellePaddingTop + 20) + '%';
    }
});

accessoir.addEventListener('mouseout', function() {
    if (!textVerschoben) {
        text_accessoir.style.paddingTop = '0';
    }
});
// party

var party = document.getElementById('party');
var text_party = document.getElementById('text_party');
var textVerschoben = false;

party.addEventListener('click', function() {
    if (!textVerschoben) {
        text_party.style.paddingTop = '30%'; 
        party.classList.add('party-focus');
        textVerschoben = true;
    } else {
        text_party.style.paddingTop = '0';
        party.classList.remove('party-focus');
        textVerschoben = false;
    }
});

party.addEventListener('mouseover', function() {
    if (!textVerschoben) {
        var aktuellePaddingTop = parseFloat(getComputedStyle(text_party).paddingTop);
        text_party.style.paddingTop = (aktuellePaddingTop + 20) + '%';
    }
});

party.addEventListener('mouseout', function() {
    if (!textVerschoben) {
        text_party.style.paddingTop = '0';
    }
=======
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
>>>>>>> 617ec559fa9afcd4c4a05ca92937601905e14e3f
});