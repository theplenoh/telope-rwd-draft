function bpSmall() {
    //console.log("bpSmall() called");
    jQuery("#masthead .gnb .btn-menu").on("click", function() {
        jQuery("#container").toggle();
    });
}
function bpMedium() {
    //console.log("bpMedium() called");
}
function bpLarge() {
    //console.log("bpLarge() called");
}

jQuery(document).ready(function() {
    if(jQuery(window).width() <= 810) {
        bpSmall();
    }
    else if(811 <= jQuery(window).width() && jQuery(window).width() <= 1024) {
        bpMedium();
    }
    else {
        bpLarge();
    }

    jQuery(window).resize(function() {
        jQuery("#masthead .gnb *").off();
        if(jQuery(window).width() <= 810) {
            bpSmall();
        }
        else if(811 <= jQuery(window).width() && jQuery(window).width() <= 1024) {
            bpMedium();
        }
        else {
            bpLarge();
        }
    });
});
