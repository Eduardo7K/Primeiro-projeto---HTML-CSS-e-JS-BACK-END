# Primeiro-projeto---HTML-CSS-e-JS-BACK-END

Back-end do projeto criado para consolidar o aprendizado básico sobre HTML, CSS e JS


### Para esse projeto funcionar, é necesário criar um banco de dados, utilizei o PostgreSQL. 

* Configurar os dados do banco de dados na aba index.js.

* Criar os seguintes campos no banco de dados:

```
id SERIAL PRIMARY KEY

firtname varchar

lastname varchar

data date

role varchar

status varchar

statusimg varchar

img varchar

language varchar

mobilephone varchar

birthday integer

month integer

year integer

email varchar

password varchar
```
## Passos que realizei para criar o projeto (back-end e front-end)

* Iniciar fazendo apenas a parte visual das telas utilizando HTML e CSS. 

* Criar um arquivo JS e criar um array que contenha os dados que irão preencher a table da tela dashboard.

* Carregar dinamicamente a table e todos os seus componentes e preenche-la com os dados do array.

* Utilizar o local storage para gravar o campo ID e para gravar o array, para que dessa forma seja possivel gravar os dados para atualizar a página, inserir novos dados e excluir.

* Depois que estiver tudo funcionando no front end, criar um projeto back-end e realizar a consulta, inclusão e exclusão de dados enviando requisições ao back-end. O array com os dados dos usuários deve ser passado para o back-end.

* Após concluir o passo anterior, deve ser criado o banco de dados (utilizei PostgreSql) e passar a fazer as consultas, inclusões e exclusões utilizando o banco de dados ao invés de utilizar o array.

* Inicialmente o código front end foi todo feito em javascript puro, apenas após ter terminado o projeto que eu modifiquei os códigos para jQuery.


