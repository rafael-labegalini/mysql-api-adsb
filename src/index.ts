import mysql from "mysql2/promise";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mudar123",
    database: "unicesumar"
}).then(function (conn) {
    console.log("Conectado com sucesso");

    const result = conn.query("SELECT * FROM alunos");
    return result;
})
.then(function (res) {
    console.log(res);
})
.catch(function () {
    console.log("Erro ao conectar no banco de dados")
});