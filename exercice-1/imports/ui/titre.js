import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'

import './titre.html'

Template.titre.onCreated(function(){
  // Here, this equals the current template instance. We can assign
  // our ReactiveVar to it, making it accessible throughout the
  // current template instance.
  this.titre = new ReactiveVar( "Titre" );
});

Template.titre.helpers({
  titre: function() {
    return Template.instance().titre.get()
  }
});

Template.titre.events({
  "submit form": function(event) {
    event.preventDefault();
    let cible = event.target;
    let texte = cible.nouveau_titre.value;
    Template.instance().titre.set(texte);
  }
});