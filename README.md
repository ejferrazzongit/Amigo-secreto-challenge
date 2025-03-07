<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Sorteador de Amigos</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; }
        h1, h2 { color: #333; }
        code { background: #f4f4f4; padding: 5px; border-radius: 5px; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; }
    </style>
</head>
<body>
    <h1>📌 Sorteador de Amigos</h1>
    <p>Este é um simples programa em JavaScript que permite adicionar amigos a uma lista e realizar um sorteio aleatório entre eles.</p>
    
    <h2>🛠️ Funcionalidades</h2>
    <ul>
        <li>Adicionar nomes de amigos a uma lista.</li>
        <li>Evitar nomes duplicados.</li>
        <li>Sortear aleatoriamente um amigo da lista.</li>
    </ul>
    
    <h2>🚀 Como Usar</h2>
    <p>Basta adicionar um nome no campo de entrada e clicar no botão para adicioná-lo à lista. Depois, clique no botão de sorteio para escolher um amigo aleatoriamente.</p>
    
    <h2>📜 Código</h2>
    <pre><code>
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
        resultado.innerHTML = '<li class="erro">Nenhum amigo foi adicionado ainda!</li>';
        return;
    }
    
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>O amigo sorteado foi: <strong>${sorteado}</strong></li>`;
}    
    </code></pre>
    
    <h2>🐛 Possíveis Erros</h2>
    <ul>
        <li>Se o campo estiver vazio ao adicionar um amigo, uma mensagem de erro será exibida.</li>
        <li>Se um nome já existir na lista, uma mensagem de erro pedirá para diferenciá-lo com um sobrenome.</li>
        <li>Se a lista estiver vazia no momento do sorteio, uma mensagem informará que não há amigos para sortear.</li>
    </ul>
    
    <h2>📌 Contribuições</h2>
    <p>Sinta-se à vontade para contribuir com melhorias e novas funcionalidades!</p>
    
    <h2>📜 Licença</h2>
    <p>Este projeto está sob a licença MIT. Você pode usá-lo e modificá-lo como quiser.</p>
</body>
</html>
