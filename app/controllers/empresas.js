import Ember from 'ember';
export default Ember.ArrayController.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    publicaEmpresa: function() {
        var novoEmail = this.store.createRecord('email',{
            email = this.get('email');
        }).save()

      var  novaEmpresa = this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body'),
        timestamp: new Date().getTime()
      });
      novaEmpresa.save();
    }
  }
});