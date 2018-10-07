'use strict';

$(document).ready(function () {

    //    maskowanie formularza
    $("[name='postcode']").inputmask('99-999', {
        "placeholder": "00000"
    });
    $("[name='telephone']").inputmask('[+99] 999-999-999', {
        "placeholder": "000000000"
    });

});