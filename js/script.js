$(document).ready(function() {

    $("#date").datepicker({ dateFormat: 'yy-mm-dd' });

    $("#artist").change(function() {
        var artist_val = $("#artist").val();
        if(artist_val == 0) $("#div_artist_other").show();
        else $("#div_artist_other").hide();
    });

    $("#label").change(function() {
        var label_val = $(this).val();
        if(label_val == 0) $("#div_label_other").show();
        else $("#div_label_other").hide();
    });

    $("#genre").change(function() {
        var genre_val = $(this).val();
        if(genre_val == 0) $("#div_genre_other").show();
        else $("#div_genre_other").hide();
    });

    $("#form_song").submit(function(e) {
        e.preventDefault();

        var title = $("#title").val();
        var artist = $("#artist").val();
        var label = $("#label").val();
        var date = $("#date").val();
        var genre = $("#genre").val();

        var artist_other = "", label_other = "", genre_other = "";
        if(artist == "" || artist == null) $("#artist").focus();
        else if(artist == 0) {
            artist_other = $("#artist_other").val();
            if(artist_other == "") $("#artist_other").focus();
        }

        if(label == "" || label == null) $("#label").focus();
        else if(label == 0) {
            label_other = $("#label_other").val();
            if(label_other == "") $("#label_other").focus();
        }

        if(genre == "" || genre == null) $("#genre").focus();
        else if(genre == 0) {
            genre_other = $("#genre_other").val();
            if(genre_other == "") $("#genre_other").focus();
        }

        $("#tbody_songs").append(
            "<tr>" +
                "<td>"+title+"</td>" +
                "<td>"+artist_other+"</td>" +
                "<td>"+label_other+"</td>"+ 
                "<td>"+date+"</td>" +
                "<td>"+genre_other+"</td>" 
            + "</tr>"
        );
        console.log("DONE")
    })
}); 