$(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});

function nextTab(elem) {
    $(elem).addClass('wizard-tab__done');
    $(elem).find('i').addClass('fa fa-check fa-3');
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    var $prevElem = $(elem).prev().find('a[data-toggle="tab"]');
    $prevElem.click();
}