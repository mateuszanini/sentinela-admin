var EmpresaModel = function () {
    this.nomeFantasia = null;
    this.razaoSocial = null;
    this.cnpj = null;
    this.inscricaEstadual = null;
    this.inscricaoMunicipal = null;
    //campos de controle
    this.ativo = null;
    this.createdAt = null;
    this.updatedAt = null;
    //relacionamentos
    this.telefones = new TelefoneModel();
    this.email = [];
    this.endereco = new EnderecoModel();
    
    this.save = function () {
        alert('save');

        // Cria uma chave para a empresa
        var newEmpresaKey = firebase.database().ref().child('empresas').push().key;

        //cria uma chave para cada 
for (var i = 0; i < arrayLength; i++) {


        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/posts/' + newPostKey] = postData;
        updates['/user-posts/' + uid + '/' + newPostKey] = postData;

        return firebase.database().ref().update(updates);
    }
};
