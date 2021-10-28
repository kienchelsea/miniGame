var express = require("express")
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs")
app.set("views", "./views")
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(2000)

var array = [];

io.on("connection", function(socket){
    console.log("Co nguoi ket noi" + socket.id);
    socket.on("student-send-information", function(data){
        array.push(
            new Student(data.hoten, data.email, data.dienthoai)
        )
        io.sockets.emit("Server-send-listUser",)
    })
})
function student(hoten, email, dienthoai) {
    this.HOTEN = hoten;
    this.EMAIL = email;
    this.DIENTHOAI = dienthoai;
}
app.get("/", function(req, res){
    res.render("trangchu");
})