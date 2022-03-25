
$.getJSON("/JSON_Files/result.json", function(data) {
    $.each(data.result_top_images, function(key, value) {

        let top_item;

        top_item = '<article>' +
            '<img src="' + value.img + '" alt="">' +
            '<label>' + value.name + '</label>'
            '</article>';

        $("#top").append(top_item);

    });

    $.each(data.result_bot_images, function(key, value) {

        let bot_item;

        bot_item ='<article>' +
            '<img src="' + value.img + '" alt="">' +
            '<label>' + value.name + '</label>'
        '</article>';

        $("#bot").append(bot_item);

    });
});