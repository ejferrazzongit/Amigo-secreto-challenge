const amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const mensagemErro = document.getElementById("mensagemErro");
    let nome = inputAmigo.value.trim();

    if (!nome) {
        mensagemErro.textContent = "Por favor, digite um nome válido!";
        return;
    }

    if (amigos.includes(nome)) {
        mensagemErro.textContent = `O nome "${nome}" já foi adicionado. Acrescente um sobrenome para distinguir este amigo.`;
        return;
    }

    amigos.push(nome);
    const listItem = document.createElement("li");
    listItem.textContent = nome;
    listaAmigos.appendChild(listItem);
    inputAmigo.value = "";
    mensagemErro.textContent = "";
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        resultado.innerHTML = `<li class="erro">Nenhum amigo foi adicionado ainda!</li>`;
        return;
    }
    
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>O amigo sorteado foi: <strong>${sorteado}</strong></li>`;
}

