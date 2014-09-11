/**
 * Created by Siham on 8/26/2014.
 */

// variables
// group id/name/info/adminName

var tag = "comment";
var message = "";
var user = "Siham";
var messagesArray = [];
var questionArray = [];

function Post(tag,user,message) {
    this.message = message;
    this.user = user;
    this.tag = tag;

    this.getPost = function () {
        return this.tag + ' ' + this.user + this.message;
    };
    this.isQuestion = function () {
        return (this.tag == "question");
    };

}

// arr of the users names
//var users = ["siham","salam","soad","navbla","sabih"];
// arr of the users messages
//var messages = ["hello everyone","en3al abokom","hehehehe","wa wa wa","hi siham"];

/*
class type:
 for comments: bs-callout-danger
 for questions: bs-callout-info
 for extra: bs-callout-warning

 <div class="bs-callout ">
 <p class="user"></p>
 <p class="content"> </p>
 </div>
 */
$(document).ready(function () {
    $('#groupName').html(groupName);
    $('#groupInfo').html(groupInfo);
});
$("#printButton").click(function () {
    window.print();
});


function isQuestion(element) {
    //return element.tag == "question";
    return element.isQuestion();
}

$("#showQuestionsButton").click(function () {
     //questionArray = messagesArray.filter(isQuestion);
    //$('#messagesBox').hide(fatherElement);

    $("#messagesBox").children().each(function(){
        if($(this).data("tag") != "question")
            $(this).hide();
    });

});

$("#showAllButton").click(function () {

    $("#messagesBox").children().each(function(){
        $(this).show();
    });

});



$("#enterMessage").submit(function (event) {

    event.preventDefault();
    message = $('#message').val();
    //tag = $('#selectOptions').find(":selected").text();
    tag = $('#selectOptions').find(":selected").val();

    var fatherElement = $('<div class="bs-callout">');
    if (tag == "comment")
        fatherElement.addClass("bs-callout-danger");
    if (tag == "question")
        fatherElement.addClass("bs-callout-info");
    if (tag == "extra")
        fatherElement.addClass("bs-callout-warning");
    var userElement = $('<p class="user">' + user + '</p>');
    var contentElement = $(' <p class="content">' + message + '</p>');


    fatherElement.data( "tag", tag );
    fatherElement.data( "user", user );
    fatherElement.data( "message", message );

    fatherElement.append(userElement).append(contentElement);
    $('#messagesBox').prepend(fatherElement);

    $('#message').val('');
    var newPost = new Post(tag,user,message);
    messagesArray.push(newPost);


});
// return false in forms to prevent default function (refreshing) submit.onClick

/*
 for dynamically added elements
 $(document).on('click', 'selector', function()
 {
 // your code
 });
 */