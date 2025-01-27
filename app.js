//array para todos os nomes
let nomes = [];

//funcao add amigos na lista
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (nome =='') {
        alert('Por favor, insira um nome.')
    } else {
        nomeAmigos.push(nome);
        document.getElementById("amigo").value ="";
        attLista();
    }
}

let nomeAmigos = [];

//funcao para att lista de amigos
function attLista() {
    let listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = '';
    for (let i = 0; i < nomeAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = nomeAmigos[i];
        listaNomes.appendChild(item);
    }
}

//funcao sorteio
function sortearAmigo() {
    if (nomeAmigos.length == 0) {
        alert('Por favor, adicione amigos para realizar o sorteio.');
        return
    }
    let amigoSorteado = nomeAmigos[Math.floor(Math.random() * nomeAmigos.length)];
    alert('O amigo sorteado é: ' + amigoSorteado);
}