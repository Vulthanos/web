$.getJSON("/JSON_Files/vulthanos.json", function (result) {

    let suma = 0;

    $.each(result.products, function (key, val) {

        let grandiv = "";

        grandiv='<div class="Cart-Items pad">' +
            '<div class="image-box"><img src="' +
            val.Image +
            '" height="120px"/></div>' +

            '<div class="about"><h1 class="title">' +

            val.Name +
            '</h1/><h3 class="subtitle">x1</h3><img src="/IMGS/purchase/veg.png" height="30px"  /></div>' +

            '<div class="prices"><div class="amount">' +
            val.Price + '$' +
            '</div><div class="remove">Remove</div></div>';

        $("#Carrito2").append(grandiv);

        suma+=val.Price;

    });

    $("#precio").append(suma);
    $("#precio2").append(suma);
    $("#precio3").append(suma);
});