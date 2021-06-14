
function createSelectOptions(){
    let arrayDeEstados = ['Acre','Amazonas','Amapá','Alagoas','Bahia','Ceará','Espírito Santo','Goias','Minas Gerais','Maranhão','Mato Grosso','Mato Grosso do Sul','Piaui','Pernambuco','Paraíba','Paraná','Sao Paulo','Sergipe','Santa Catarina','Tocantins','Rondônia','Roraima','Rio Grande do Sul','Rio Grande do Norte','Rio de Janeiro'];
    const getState = document.getElementById('user-state');

    for (let index = 0; index < arrayDeEstados.length; index += 1) {
        const createOption = document.createElement('option');
        createOption.setAttribute('value', arrayDeEstados[index]);
        createOption.text = arrayDeEstados[index];
        getState.appendChild(createOption);
    }
}

window.onload = function() {
    createSelectOptions();
}
