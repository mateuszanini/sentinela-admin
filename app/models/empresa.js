import DS from 'ember-data';

export default DS.Model.extend({
    nomeFantasia: DS.attr('string'),
    razaoSocial: DS.attr('string'),
    cnpj: DS.attr('string'),
    inscricaEstadual: DS.attr('string'),
    inscricaoMunicipal: DS.attr('string'),
    //campos de controle
    ativo: DS.attr('boolean', { defaultValue: true }),
    createdAt: DS.attr('number', {
        defaultValue() { return new Date().getTime(); }
    }),
    updatedAt: DS.attr('number'),
    //relacionamentos
    telefone: DS.belongsTo('telefone'),
    email: DS.belongsTo('email'),
    endereco: DS.belongsTo('endereco'),
    usuarios: DS.hasMany('usuario', { async: true, inverse: null }),
});
