$.getJSON("/JSON_Files/result.json", function(data) {
    $.each(data.search_result_top_images, function(key, value) {

        let top_item;

        if (value.id === 3) {
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

    });

    $.each(data.search_result_bot_images, function(key, value) {

        let bot_item;

        if (value.id === 3) {
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

        $("#bot").append(bot_item);

    });
});