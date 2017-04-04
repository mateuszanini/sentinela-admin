import DS from 'ember-data';

export default DS.Model.extend({
    logradouro: DS.attr('string'),
    numero: DS.attr('string'),
    complemento: DS.attr('string'),
    bairro: DS.attr('string'),
    cep: DS.attr('string'),
    cidade: DS.attr('string'),
    estado: DS.attr('string'),
    pais: DS.attr('string')
});
