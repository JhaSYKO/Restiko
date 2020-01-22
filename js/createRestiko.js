
$(document).ready(function () {
    $("#formulaireRestiko").empty();

    const connectionId = localStorage.getItem('username');
    const sessionId = sessionStorage.getItem("username")
  
    if(connectionId || sessionId == 'admin') {
        $("#restikoConnectionForm").hide();
        $("#formulaireRestiko").show();
        $("#mainNav").show();
        $(".masthead").show();

        $("#formulaireRestiko").append(
            '<div class="w-100 card mt-5">' +
            '<script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrW5Sr9ct6VxG40n?backgroundColor=orange" frameborder="0" onmousewheel="" width="100%" height="2238" style="background: transparent; border: 1px solid #ccc;"></iframe>'+
            '<a class="btn btn-danger btnFont ml-1" href="list_restiko.html">Retour</a>' +
            '</div>'
            )
        }
        else{
            window.location = "index.html";
        }
        console.log(connectionId, sessionId)
});

