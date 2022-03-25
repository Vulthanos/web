$.getJSON("/JSON_Files/result.json", function(data) {
    $.each(data.search_result_top_images, function(key, value) {

        let top_item;
        var cond = 1;

        if (cond === 3) {
            top_item = '<article class="movil_inactive">' +
                '<img  class="product" src="' + value.img + '" alt="">' +
                '<label>' + value.name + '</label>'
            '</article>';
        } else {
            top_item = '<article>' +
                '<img  class="product" src="' + value.img + '" alt="">' +
                '<label>' + value.name + '</label>'
            '</article>';
        }

        $("#top").append(top_item);
        cond++;

    });

    $.each(data.search_result_bot_images, function(key, value) {

        let bot_item;
        var cond = 1;

        if (cond === 3) {
            bot_item = '<article class="movil_inactive">' +
                '<img  class="product" src="' + value.img + '" alt="">' +
                '<label>' + value.name + '</label>'
            '</article>';
        } else {
            bot_item = '<article>' +
                '<img  class="product" src="' + value.img + '" alt="">' +
                '<label>' + value.name + '</label>'
            '</article>';
        }
        cond = cond + 1;
        $("#bot").append(bot_item);

    });
});