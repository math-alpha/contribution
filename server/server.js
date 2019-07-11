var express        =        require("express");
var bodyParser     =        require("body-parser");
var fs             =        require("fs");
var app            =        express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.sendfile("server/index.html");
});
app.post('/add',function(req,res){
    var med=req.body._med;
    var medT=req.body._medt;
    var fra=req.body._fra;
    var fraT=req.body._frat;
    var l = "\<e\>\<p\>\<l\>la\<\b\/>nstə<b/>ba\ʼ<s n=\"n\"/><s n=\"cl3\"/></l>";
    var r = "\<r\>bateau<s n=\"n\"/><s n=\"m\"/><s n=\"sg\"/></r></p></e>";

    fs.appendFile('byv-fra.xml', "\n\nMed text = "+med+"----- Tag "+medT+"\nfra text = "+fra+"---- Tag "+fraT+" |\n", (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    })
    fs.appendFile('byv.txt', "\n\nMed text = "+med+"----- Tag "+medT+"\nfra text = "+fra+"---- Tag "+fraT+" |\n", (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    })
    res.end("yes");
});
app.listen(3000,function(){
    console.log("Started on PORT 3000");
})
