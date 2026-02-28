const fs = require("fs");
const path = require("path");

// //criar pasta
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if (error) {
//         return console.log('Erro: ', error);
//     }
//     console.log('Pasta criada com sucesso!');
// });

//criar arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Olá, mundo!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");

    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "\nOlá, mundo! Novamente.",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Arquivo atualizado com sucesso!");
      },
    );
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Conteúdo do arquivo:", data);
      },
    );
  },
);

//adicionar conteúdo ao arquivo

//ler arquivo
