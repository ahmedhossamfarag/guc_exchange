const sql = require('mysql');
exports.connect = function(hostname, username, _password){
    var con = sql.createConnection({
        host: hostname,
        user: username,
        password: _password,
        });
    con.connect();
    return con;
}

exports.createDatabase = function(con, database){
    con.query(`CREATE DATABASE ${database}`);
}

exports.createTable = function(con,table){
    var sql = `CREATE TABLE Semester${table} (tutorial INT, name VARCHAR(255), phone VARCHAR(255), gender VARCHAR(255))`;
    con.query(sql);
}

exports.insert = function (con, table,tutorial, name, phone, gender) {
    var sql = `INSERT INTO Semester${table} (tutorial, name, phone, gender) VALUES (${tutorial}, '${name}', '${phone}', '${gender}')`;
    con.query(sql);
}

exports.select = function (con, table, tutorial){
    return con.query(`SELECT * FROM Semester${table} WHERE tutorial = ${tutorial}`);
}

exports.tutorials = function (con, table){
    var result = [];
    for (var i = 0; i < 50; i++) {
        result.push(exports.select(con, table, i));
    }
    return result;
}

exports.delete = function (con, table, name){
    var sql = `DELETE FROM Semester${table} WHERE name = '${name}'`;
    con.query(sql);
}