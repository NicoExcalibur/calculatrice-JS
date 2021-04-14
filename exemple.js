// Les fonctions des calculs
function addition(nombreA, nombreB){

    return nombreA + nombreB;
}

function multiplication(nombreA, nombreB){
    
    return nombreA * nombreB;

}

function soustraction(nombreA, nombreB){
      
    return  nombreA - nombreB;

}

function division(nombreA, nombreB){
    // Pour empecher de pouvoir diviser par 0
    if (nombreB == 0) {
        throw new Error('Impossible de diviser par zéro !')
    }
    return  nombreA / nombreB;
    
}

// Recuperer le choix du type de calcul
do {
    var choix = Number(prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"));
                    
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4) 
        
// Récupérer les chiffres de l'opération
do {
    var premierNombre = Number(prompt('Premier nombre'));
    var deuxiemeNombre = Number(prompt('Deuxième nombre'));
    
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre))

// J'apelle la bonne fonction en fonction du choix avec une exception
try {
    switch (choix) {
        case 1:
            var result = addition(premierNombre, deuxiemeNombre);
            break;
        case 2:
            var result = multiplication(premierNombre, deuxiemeNombre);
            break;
        case 3:
            var result = soustraction(premierNombre, deuxiemeNombre);
            break;
        case 4:
            var result = division(premierNombre, deuxiemeNombre);
            break;
        default:
            throw new Error('Erreur');
    }
    alert('le resultat est : ' + result);
// attrape et affiche les erreurs
}catch(error) {
    alert(error);
}


