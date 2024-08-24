# Conversor de Números por Extenso

Este projeto é uma aplicação web simples que permite aos usuários inserir um número inteiro e, ao pressionar um botão, exibir a versão por extenso retornada por uma API local.

## Funcionalidades

Entrada de números inteiros no intervalo [-99999, 99999].
Envio do número para um servidor HTTP local.
Exibição do número por extenso retornado pelo servidor.

## Requisitos

Um servidor HTTP local que responda a requisições GET no formato http://localhost:3000/{número} e retorne um JSON com a versão por extenso do número, por exemplo:
http://localhost:3000/1 retorna { "extenso": "um" }
http://localhost:3000/-1042 retorna { "extenso": "menos mil e quarenta e dois" }

## Como Usar

1. Clone o Repositório:
   git clone https://github.com/seu-usuario/conversor-numero-extenso.git
   cd conversor-numero-extenso
   Configure e Inicie o Servidor HTTP:

2. Certifique-se de que o servidor HTTP esteja configurado para rodar na URL http://localhost:3000 e que esteja pronto para responder às requisições GET com a estrutura mencionada acima.

3. Abra o Arquivo HTML no Navegador:

Abra o arquivo index.html em um navegador web para carregar a aplicação.

4. Insira um Número e Converta:

Digite um número inteiro no campo de entrada.
Pressione o botão "Converter".
O número por extenso será exibido na tela.

## Estrutura do Projeto

index.html: Arquivo principal que define a estrutura HTML da página.
styles.css: Arquivo CSS que estiliza a página, incluindo o layout e a aparência.
script.js: Arquivo JavaScript que lida com a interação do usuário e a comunicação com a API.

## Exemplo de Resposta da API

Quando o usuário insere o número 123 e pressiona o botão "Converter", a aplicação faz uma requisição para http://localhost:3000/123 e a API responde com:
{
"extenso": "cento e vinte e três"
}

A aplicação então exibe "Por extenso: cento e vinte e três" na tela.

## Personalização

Você pode personalizar o estilo da aplicação alterando o arquivo styles.css ou modificar o comportamento da interação no arquivo script.js.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob os termos da licença MIT.
