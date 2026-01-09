function bpSmall() {
    //console.log("bpSmall() called");
    jQuery("#sidebar .ctrl .btn-close").on("click", function() {
        jQuery("#sidebar, #sidebar-overlay").hide();
    });
    jQuery("#masthead .gnb .btn-menu").on("click", function() {
        jQuery("#sidebar, #sidebar-overlay").show();
    });
    jQuery("#sidebar-overlay").on("click", function() {
        jQuery("#sidebar, #sidebar-overlay").hide();
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
