function bpSmall() {
    //console.log("bpSmall() called");
    /*
    jQuery("#gnb .btn-menu").on("click", function() {
        jQuery("#gnb").toggleClass("open");
    });
    */
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
        //jQuery("#gnb *").off();
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


