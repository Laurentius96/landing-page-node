// // Importa o módulo express para esse arquivoconst express = require("express");
// const express = require("express");

// // Instancia uma referência do express no projetoconst app = express();
// const app = express();

// /*
//  Rota principal que recebe uma função de callback que recebe dois parametros:

//  req de requisição
//  res de respostaapp.get("/", function (req, res) {  res.send("Hello World");

// */
// app.get("/", function (req, res) {
//   res.send("Hello World"); // Responde a requisição da rota com um texto.}); --> Não é um HTML
// });

// app.get("/teste", function (req, res){
//     res.send("Essa é uma rota de teste");
// });

// // Liga o servidor na porta 3000
// app.listen(3000);

// // ------------------------------------------------ Código com boa prática:

// Importa o módulo express para esse arquivo
const express = require("express");
const app = express(); // Instancia uma referência do express no projeto
const port = 3000; // Const para armanezar a porta do servidor

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Rota principal que recebe uma função de callback que recebe dois parametros:
// req de requisição
// res de resposta
// Substituição de function por arrow function
app.get("/", (req, res) => {
  res.send("Hello World"); // Responde a requisição da rota com um texto
});

app.get("/index", (req, res) => {
  const devList = ["Backend", "Frontend", "Fullstack"];
  const analyticsList = ["Engenharia de dados", "Ciência de dados"];
  res.render("index", {
    titulo: "Blue",
    devList: devList,
    analyticsList: analyticsList,
  });
});

// Liga o servidor na porta 3000
// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);

// // Rotas dos tipo "post" nãp podem ser chamadas na URL
