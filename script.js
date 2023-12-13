function gestionnaireDeTaches() {
    let taches = ["faire les courses", "nettoyer la maison", "promener le chien"];
    let tacheComplete = false;

    function ajouterTache(tache) {
        if (tache != null && tache != "") {
            taches.push(tache);
        }
    }

    function supprimerTache(index) {
        if (index > 0 && index <= taches.length) {
            taches.splice(index, 1);
        }
    }

    function afficherTaches() {
        for (i = 0; i < taches.length; i++) {
            console.log(i + " - " + taches[i]);
        }
    }

    function marquerTacheComplete(index) {
        if (index > 0 && index <= taches.length) {
            tacheComplete = true;
        }
    }

    ajouterTache("lire un livre");
    supprimerTache(2);
    afficherTaches();
    marquerTacheComplete(1);
    afficherTaches();
}

gestionnaireDeTaches();
