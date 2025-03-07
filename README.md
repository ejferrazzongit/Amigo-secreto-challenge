<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorteio de Amigo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 1em 0;
            text-align: center;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 2em 0;
        }
        h1 {
            font-size: 2em;
            margin-bottom: 0.5em;
        }
        p {
            font-size: 1.2em;
            line-height: 1.6;
        }
        ul {
            margin-top: 1em;
            padding-left: 20px;
        }
        li {
            margin-bottom: 0.5em;
        }
        .erro {
            color: red;
        }
        .button {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            padding: 0.5em 1em;
            margin: 1em 0;
            text-decoration: none;
            border-radius: 5px;
        }
        .button:hover {
            background-color: #45a049;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1em 0;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>

<header>
    <h1>Sorteio de Amigo</h1>
</header>

<div class="container">
    <section>
        <h2>Funcionalidades</h2>
        <ul>
            <li><strong>Adicionar Amigo:</strong> O usuário pode adicionar o nome de um amigo à lista. Se o nome já estiver na lista, será solicitado que o usuário acrescente um sobrenome para distinguir o amigo.</li>
            <li><strong>Sorteio de Amigo:</strong> O usuário pode realizar um sorteio aleatório entre os amigos cadastrados. Se não houver amigos na lista, uma mensagem de erro será exibida.</li>
        </ul>
    </section>

    <section>
        <h2>Como Usar</h2>
        <ol>
            <li>Abra o arquivo HTML no navegador.</li>
            <li>Na interface, insira o nome de um amigo e clique no botão para adicionar.</li>
            <li>Selecione o botão de sorteio para escolher um amigo aleatoriamente da lista.</li>
            <li>Caso o nome já tenha sido adicionado anteriormente, será exibida uma mensagem de erro informando para adicionar um sobrenome.</li>
        </ol>
    </section>

    <section>
        <h2>Como Funciona o Código</h2>
        <p><strong>Função <code>adicionarAmigo</code>:</strong> Esta função é responsável por adicionar um novo amigo à lista de amigos. Ela realiza as seguintes verificações:</p>
        <ul>
            <li>Se o nome es
