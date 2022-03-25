$.getJSON("/JSON_Files/sorteo-script.json", function(data) {
    $.each(data.img-sorteos, function(key, value) {
        let paco;
        let c=1;

        paco= '<section class="sorteo'+c+'">' +
                '<label class="txt-sorteo'+c+'">' + value.title + '</label>' +
                '<img class="img-sorteo1" src="' + value.img + '" alt="sorteo 1"><br>' +
                '<button class="unir-sorteo'+c+'">' +
                    '<a href="entrar_sorteo.html" class="entrar-sorteo" style="text-decoration: none">Haz click aqui para participar</a>' +
                '</button>'
            '</section>';

        $("#sorteo").append(paco);
        c=c+1;
    });
});