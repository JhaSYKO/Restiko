function connectionForm() {
    event.preventDefault();
    $("#formulaireRestiko").empty();

    base('Identifiant').select({
        maxRecords: 5,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {

        records.forEach(function (record) {

            if(record.get('username') == $('#restikoUsername').val()) {
                if(record.get('password') == $('#restikoPassword').val()) {
                    if($('#check1').prop("checked") == true){

                    localStorage.setItem("username", record.get("username"));
                    localStorage.setItem("password", record.get("password"));

                    $("#restikoConnectionForm").hide();
                    $("#mainNav").show();
                    $(".masthead").show();

                    }
                    else{
                        sessionStorage.setItem('username', record.get("username"));

                    $("#restikoConnectionForm").hide();
                    $("#mainNav").show();
                    $(".masthead").show();

                    }
                }
            }
        });

        fetchNextPage();

        console.log(localStorage.getItem('username'))

    }, );

};
$(document).ready(function(){
    if(localStorage.getItem('username') || sessionStorage.getItem("username") != null){
        $("#restikoConnectionForm").hide();
        $("#mainNav").show();
        $(".masthead").show();
    }
});