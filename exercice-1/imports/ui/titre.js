import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'

import './titre.html'

Template.titre.onCreated(function(){
  // Création de la variable réactive
  this.titre = new ReactiveVar( "Titre" );
});

Template.titre.helpers({
  // Helper du titre
  titre: function() {
    // Récupérer la variable réactive
    return Template.instance().titre.get()
  }
});

Template.titre.events({
  // Événement sur le formulaire
  "submit form": function(event) {
    // Empechez le comportement par défaut (rercharger la page)
    event.preventDefault();
    // Récuperer la cible de l'événement
    let cible = event.target;
    let texte = cible.nouveau_titre.value;
    // Updater la variable réactive
    Template.instance().titre.set(texte);
  }
});