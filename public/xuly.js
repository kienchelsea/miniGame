var socket = io("http://localhost:2000");
$(document).ready(function () {
    $("#btnRegister").click(function () {
        socket.emit("student-send-information",
            {
                hoten: $("#txtName").val(),
                email: $("#txtEmail").val(),
                dienthoai: $("#txtPhoneNumber").val(),
            }
        )
    })
})