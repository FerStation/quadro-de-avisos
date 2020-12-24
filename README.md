# <img src="https://i.imgur.com/1d8xwBw.png" width="45" align="left">Quadro de Avisos
Projeto final desenvolvido na disciplina Programação WEB II do Curso ETIM Desenvolvimento de sistemas ministrado na ETEC João Belarmino.

O objetivo desse projeto é proporcionar ao aluno a experiência de desenvolver um projeto prático que: utiliza controle de versão, realiza conexão com banco de dados, execução de comandos SQL e persistência de dados utilizando tecnologias, linguagens e bibliotecas populares no desenvolvimento de software para WEB, como: node.js, express, knex, moment, ejs, bootstrap e Mysql.

As principais funções desse projeto são:
 - Cadastrar um novo aviso
 - Editar um aviso já cadastrado
 - Excluir um aviso
 - Exibir os avisos cadastrados no formato de tabela
 - Exibir os avisos cadastrados na página inicial, ordenado por data(Do mais recente para o mais antigo)

## Instalação

 1. Clone esse repositório
```
git clone https://github.com/fernandobrscunha/quadro-de-avisos.git
```

2. Instale as dependências: navegue até a pasta e execute o comando:
 ```
npm install
  ```

3. Crie um arquivo `.env` na raiz do projeto, esse arquivo deve seguir o seguinte modelo:
```dosini
DB_HOST=Digite aqui o caminho do banco de dados
DB_USER=Digite aqui o usuário do banco de dados
DB_PASS=Digite aqui a senha do banco de dados
DB_DATABASE=Digite aqui o nome do banco de dados
```

4. Crie um banco de dados com uma tabela chamada `avisos` A seguir você encontra um exemplo da criação do banco dados e a tabela em MySQL:
```SQL
CREATE DATABASE quadro_de_avisos;

USE quadro_de_avisos;

CREATE TABLE avisos (
	ID_aviso INT(11) NOT NULL AUTO_INCREMENT,
	titulo VARCHAR(100) NOT NULL COLLATE,
	data DATE NOT NULL,
	mensagem TEXT NOT NULL COLLATE,
	PRIMARY KEY (ID_aviso)
);
```


## Screenshots
<img src="https://i.imgur.com/dSUCK7a.png"/>

<img src="https://i.imgur.com/VndGaI8.png"/>

<img src="https://i.imgur.com/3oWAtLJ.png"/>

<img src="https://i.imgur.com/NU2uvmQ.png"/>

<img src="https://i.imgur.com/CIcBwZ5.png"/>


## Licença
Este projeto está licenciado sob a licença [MIT](./LICENSE)
