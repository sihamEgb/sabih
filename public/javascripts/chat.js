$(document).ready(function () {
//  socket = io.connect("http://siham-sabihegb.rhcloud.com:8000");
    socket = io.connect();
    socket.on("connect",function(){
       console.log("got event connect");
       socket.emit("subscribe", {room: channelId});
    });

    socket.on("message", function (message) {
        console.log("got message");
        //$('#messages').append('<li>' + message.text + '</li>');
        var father = $('#container');
        var newElement1 = $('<li class="messageBox jumbotron container" </li>');
        var newElement2 = $('<p class="content">'+ message.name +' says: '+ message.text + '</p>');
        var newElement3 = $('<p><a class="btn btn-primary btn-sm" role="button">Like</a></p>');
        newElement1.append(newElement2).append(newElement3);
        // works only on chrome

        father.prepend(newElement1.hide().fadeIn(2000));
        //father.prepend(newElement1.hide().show("highlight"));
    });
});


userName;
$('#send-form').submit(function () {
    var msg = $('#send-message').val();
    socket.emit("message", {name: userName, text: msg});
    //console.log("user clicked");
    $('#send-message').val("");
    return false;
});

$('#goToPage').click(function () {
    userName = $('#userName').val();
    $('#userName').val("");
    $('#beforeJoining').remove();
    $('#afterJoining').css("visibility", "visible");
    return false;
});
