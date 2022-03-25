$.getJSON("/JSON_Files/imgSorteo.json", function(data) {
    $.each(data.imgLottery, function(key, value) {
        let item;

        item = '<section class="sorteo'+value.id+'">' +
                '<label class="txt-sorteo'+value.id+'">' + value.title + '</label>' +
                '<img class="img-sorteo'+value.id+'" src="' + value.img + '" alt="sorteo '+value.id+'"><br>' +
                '<button class="unir-sorteo'+value.id+'">' +
                    '<a href="entrar_sorteo.html" class="entrar-sorteo" style="text-decoration: none">Haz click aqui para participar</a>' +
                '</button>' +
            '</section>';

        $("#sorteos").append(item);
    });
});