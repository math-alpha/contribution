var express        =        require("express");
var bodyParser     =        require("body-parser");
var fs             =        require("fs");
var app            =        express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res){
    res.sendfile("server/index.html");
});
app.post('/add',function(req,res){
    var med = req.body._med;
    var medT = req.body._medt;
    var fra = req.body._fra;
    var fraT = req.body._frat;
    var l = "\<e\>\<p\>\<l\>"+med+"<s n=\"n\"/>"+medT+"</l>";
    var r = "\<r\>"+fra+" \<s n=\"n\"/>"+fraT+"</r></p></e>";

    var bidixText = l + r + "\n";
    var monodixText = med + ":"+med +" "+medT+ " # ; !\""+fra+"\"\n"

    console.log(l + " \n "+r+"\nmedt "+medT+"\n frat "+fraT);

    fs.appendFile('byv-fra.xml', bidixText, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    })
    fs.appendFile('byv.txt', monodixText, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    })
    res.end("yes");
});
app.listen(3000,function(){
    console.log("Started on PORT 3000");
})
