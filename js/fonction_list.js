$(document).ready(function createRestikoCard() {
    if(localStorage.getItem('username') || sessionStorage.getItem("username") != null){
        $("#mainNav").show();
        $(".masthead").show();
    base('Restiko').select({
        maxRecords: 50,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {

        records.forEach(function (record) {

            $("#listRestiko").append(
                '<div class="container-fluid carteRestiko ' + record.id + ' list-item text-center shadow">'+
                    "<h2 class='btn btn-success m-1' id='" + record.id + "'>Restiko du " + record.get("Date d'aujourd'hui") + "</h2>"+
                    '<div class="row mt-5 contentCard text-center bg-light p-3">'+
                        '<div class="col mt-5">'+
                            "<h3><u>Ce que j'ai fais</u></h3>"+
                            "<p class=' mb-5'>" + record.get("Ce que j'ai fais") + "</p>"+
                            "<h3><u>Ce que j'ai aimé</u></h3>"+
                            "<p class=' mb-5'>" + record.get("Ce que j'ai aimé") + "</p>"+
                            "<h3><u>Problématiques Rencontrées</u></h3>"+
                            "<p class=' mb-5'>" + record.get("Problématiques Rencontrées") + "</p>"+
                            "<h3><u>Qu'es-ce qui m'a manqué</u></h3>"+
                            "<p class=' mb-5'>" + record.get("Qu'es-ce qui m'a manqué") + "</p>"+
                        "</div>"+
                        '<div class="col">'+
                            "<h3><u>Ce que j'ai appris</u></h3>"+
                            "<p class=' mb-5'>" + record.get("Ce que j'ai appris") + "</p>"+
                            "<h3><u>Ce que j'ai utilisé de nouveau</u></h3>"+
                            "<p class=' mb-5'>" + record.get("Ce que j'ai utilisé de nouveau") + "</p>"+
                            "<h3><u>Quels sont les objectifs</u></h3>"+
                            "<p class=' mb-5'>" + record.get("Quels sont les objectifs") + "</p>"+
                            "<h3><u>Que ferais tu à la place du formateur</u></h3>"+
                            "<p class=' mb-5'>" + record.get("Que ferais tu à la place du formateur") + "</p>"+
                        "</div>"+
                        '<div class="col-12 mt-5">'+
                            "<h3><u>Objectifs Atteint ou Pas (A ou P)</u></h3>"+
                                "<p class=' mb-5'>" + record.get("Objectifs Atteint ou Pas (A ou P)") + "</p>"+
                            "<h3><u>Note de la journée (?/5)</u></h3>"+
                                "<p class=' mb-5'>" + record.get("Note de la journée (?/5)") + "</p>"+
                                "<div class='text-right mb-5'>"+
                                "<p>modifié le :</p>"+
                                "<p>"+record.get('created_date')+"</p>"+
                                "</div>"+
                            '<form class="text-center">'+
                                "<button type='submit' class='btn btn-success m-1'>Revenir</button>"+
                            '</form>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                "<script>" +
                    "$('#" + record.id + "').click(function() {" +
                        "$('.carteRestiko').hide();" +
                        "$('#pagination-container').hide();" +
                        "$('." + record.id + ", .contentCard').show();" +
                    "});" +
                "</script>"
            );

        });

        paginationRestiko();

        fetchNextPage();

    }, );
    }
    else{
        window.location = "index.html";
    }
})

function paginationRestiko() {

    var itemsRestiko = $(".list-wrapper-restiko .list-item");
    var numItemsRestiko = itemsRestiko.length;
    var perPageRestiko = 5;

    itemsRestiko.slice(perPageRestiko).hide();

    $('#pagination-container').pagination({
        items: numItemsRestiko,
        itemsOnPage: perPageRestiko,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function (pageNumber) {
            var showFrom = perPageRestiko * (pageNumber - 1);
            var showTo = showFrom + perPageRestiko;
            itemsRestiko.hide().slice(showFrom, showTo).show();
        }
    });
}