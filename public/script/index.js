var groupName = "The new name group";
var groupInfo = "this group shows new name ...";
var adminName = "";

var groupIds = ["1", "22", "333", "4444"];

$(document).ready(function () {

});

$("#joinGroup").submit(function (event) {
    event.preventDefault();
    var userName = $("#input1").val();
    var groupId = $("#input2").val();

    alert("welcome" + userName + "joining group" + groupId);
    //$("span").text("Validated...").show();

    alert("no such group" + groupId + userName);
    return;
});

$("#createGroup").submit(function () {
    event.preventDefault();
    var adminName = $("#input3").val();
    var groupName = $("#input4").val();
    var groupInfo = $("#input5").val();

    alert("welcome" + adminName + "joining group" + groupName);


});

$("#createGroup").submit(function () {


});
