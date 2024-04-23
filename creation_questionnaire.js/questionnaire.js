const questions = [
    {
        question:
            'A quel compositeur est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart',
        reponse: 2
    },
    {
        question: "Quelle est la capitale de l'Autriche ?\n1. Vienne\n2. Oslo",
        reponse: 1
    },
    {
        question:
            'Quel organe est perturbé par les acouphènes ?\n1. Les Pieds\n2. Les Oreilles',
        reponse: 2
    }
];

let nb_bonne_reponse = 0;
for (let i = 0; i < questions.length; i = i + 1) {
    let entree_user = prompt(questions[i].question);

    if (entree_user == questions[i].reponse) {
        alert('Bonne réponse');
        nb_bonne_reponse += 1;
    }
    else {
        alert('Mauvaise réponse');
    }
}

if (nb_bonne_reponse <= 1) {
    alert(`Vous avez ${nb_bonne_reponse} bonne réponse sur ${questions.length}`)
} else {
    alert(`Vous avez ${nb_bonne_reponse} bonnes réponses sur ${questions.length}`)
}


