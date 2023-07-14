var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
var m = document.getElementById("messages");
connection.on("ReceiveMessage", function (user, message) {
    $("#messages").append('<li>' + user + ' sent: ' + message + '</li>');
});

document.getElementById("send-msg").addEventListener("click", function () {
    var user = document.getElementById("Username").value;
    var msg = document.getElementById("Message").value;
    connection.invoke("SendMessage", user, msg);
});

connection.start();