<h1>challenge-01: Api-Veterinario</h1>

> Status: Em desenvolvimento

### Está é uma api que foi desenvolvida para registrar os tutores e pets a um banco de dados, relacionalos atravez da ID, deletalos e atualizalos.


#### Instalação e configuração do projeto!

> Obs: A maquina onde o projeto será baixado precisa obrigatoriamente da instalação do NodeJs, git, Postman e qualquer editor de código (recomendavel o Visual Studio Code), e ter um servidor no mongoDb atlas.

1. Para executar o projeto será necessário primeiro baixalo em sua maquina, isto é possivel ser feito atravez do comando "git clone (link do repositório)" no terminal, pode ser feito no terminal
    do editor de código usado , caso o usuario não tenha tanta experiência, é possivel clonalo atravez do github desktop ou baixalo normalmente pelo navegador.

2. Após a instalação do projeto, será necessario instalar as dependências necessárias e compilar os arquivos dentro da pasta src para que o projeto funcione, atraves do terminal no Visual Studio Code, digite
   "npm install" para que as dependências sejam instaladas no projeto (você vera uma pasta node_modules ser criada), para compilar os arquivos .ts dentro da pasta src basta executar o comando "tsc -w",
    isso ira gerar uma pasta dist no projeto, apos isso aperte "crtl + c" para encerrar o watch mode.
   
3. Para fazer o programa executar corretamente é necessario a criação do arquivo ".env", entre no site "https://cloud.mongodb.com" e crie uma conta, apos a criação da conta, crie um novo projeto gratuito,
   (escolha o nome que achar melhor), com a criação do projeto feita, abra-o e clicke na opção "Connect", clicke em drivers, apos todo esse processo podera ser visto algo semelhante a
    um link, o copie. voltando ao editor de códigos, crie um novo arquivo com nome ".env" e escreva "MONGO_URI=" e cole o link copiado substituindo o "password" pela sua senha criada.

4. Para a parte final de configuração do projeto, abra o Postman, na opção import abra o arquivo "Challenge#01.postman_collection", este arquivo é essencial para fazer os post,delete,put e get do projeto.


#### Utilização da API!

1. Para iniciar a api, digite no terminal do projeto "npm start" para iniciar o nodemon.
   
2. No Postman, teste o metodo Create Tutor, nele já está informações pré preenchidas, com o metodo Get All Tutors devera retornar o tutor criado e no mongoDB estará o objeto tutor registrado.

3. Para testar os métodos Delete Tutor e Update Tutor, será necessario copiar o _id do objeto que deseja deletar, substituir o :id em "{{URL}}/tutor/:id" pelo id do tutor, lembrando que ao executar o
    método Get All Tutors bovamente ele mostrara a atualização feita no db.

4. Para criar um objeto pet e registralo é um pouco mais complexo, ao utilizar o método Create Pet é necessário ter um tutor registrado antes, para que o _id do tutor possa substituir
    o :tutorId em "{{URL}}/pet/:tutorId".

5. Já para alterações no pet tambem se torna mais compplexa, precisando do _id do pet e do tutor para fazer as mudanças desejadas, respectivamente o id do pet substituindo o :petId e o id do tutor
   o :tutorId, ambos em "{{URL}}/pet/:petId/tutor/:tutorId".



