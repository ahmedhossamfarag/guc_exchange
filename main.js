var http = require('http');
var url = require('url');
var fs = require('fs');
var mdl = require('./models')
//var sql = require('./data');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //var con = sql.connect('localhost', 'root', 'root');
  var q = url.parse(req.url, true).query;
 if(req.url.endsWith('.css')){
    return res.end(fs.readFileSync('style.css', 'utf8'));
  }else if(q.new){
    res.write(mdl.head('New'));
    res.end(mdl.add(q.semester, q.tutorial));
  }else if(q.semester){
    res.write(mdl.head(`Semester ${q.semester}`));
    //res.end(mdl.tutorials(sql.tutorials(con, q.semester), q.semester));
  }else{
    if(q.delete){
        //sql.delete(con, q.semester, q.name);
    }else if(q.name){
        //sql.insert(con, q.semester,q.tutorial, q.name, q.phone, q.gender);
    }
    res.write(mdl.head('GUCIAN'));
    res.end(mdl.semesters());
  }
}).listen(8080);