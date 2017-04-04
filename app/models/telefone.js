import DS from 'ember-data';

export default DS.Model.extend({
    celulares: DS.hasMany('celular', { async: true, inverse: null }),
    fixos: DS.hasMany('fixo', { async: true, inverse: null }),
    empresa: DS.belongsTo('empresa')
});
