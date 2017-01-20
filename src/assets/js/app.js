'use strict';

$(document).ready(function () {
    $('.js-toggleDetails').on('click', function (e) {
        e.preventDefault();
        $(this).next('.js-details').toggle(800);
    });
});
