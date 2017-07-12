"use strict";

$(document).ready(function () {
    $('.slider').slick({
        nextArrow: '<svg class="right-arrow"  width="40" height="24" viewBox="0 0 40 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>right</title><g id="Canvas" transform="translate(6836 807)"><g id="right"><g id="Rectangle 7"><use xlink:href="#path0_fill" transform="matrix(-1 0 0 1 -6800 -797)" /></g><g id="Rectangle 7 Copy 3"><use xlink:href="#path1_fill" transform="matrix(-0.70267 -0.711516 -0.70267 0.711516 -6796 -795.051)" /></g><g id="Rectangle 7 Copy 4"><use xlink:href="#path1_fill" transform="matrix(-0.70267 0.711516 -0.70267 -0.711516 -6796 -794.949)" /></g></g></g><defs><path id="path0_fill" fill-rule="evenodd" d="M 0 0L 36 0L 36 4L 0 4L 0 0Z"/><path id="path1_fill" fill-rule="evenodd" d="M 0 0L 16.794 0L 16.794 4.05022L 0 4.05022L 0 0Z"/></defs></svg>',
        prevArrow: '<svg class="left-arrow" width="40" height="24" viewBox="0 0 40 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Canvas" transform="translate(6904 807)"><g id="left"><g id="Rectangle 7"><use xlink:href="#path0_fill" transform="matrix(1 1.22465e-16 1.22465e-16 -1 -6900 -793)" /></g><g id="Rectangle 7 Copy 3"><use xlink:href="#path1_fill" transform="matrix(0.70267 0.711516 0.70267 -0.711516 -6904 -794.949)" /></g><g id="Rectangle 7 Copy 4"><use xlink:href="#path1_fill" transform="matrix(0.70267 -0.711516 0.70267 0.711516 -6904 -795.051)" /></g></g></g><defs><path id="path0_fill" fill-rule="evenodd" d="M 0 0L 36 0L 36 4L 0 4L 0 0Z"/><path id="path1_fill" fill-rule="evenodd" d="M 0 0L 16.794 0L 16.794 4.05022L 0 4.05022L 0 0Z"/></defs></svg>'
    });

    // $(".owl-carousel").owlCarousel();

    $(".animsition").animsition({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 1500,
        outDuration: 800,
        linkElement: ".animsition-link",
        // e.g. linkElement: "a:not([target="_blank"]):not([href^="#"])"
        loading: true,
        loadingParentElement: "body", //animsition wrapper element
        loadingClass: "animsition-loading",
        loadingInner: "", // e.g "<img src="loading.svg" />"
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ["animation-duration", "-webkit-animation-duration"],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "body",
        transition: function (url) {
            window.location.href = url;
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".link-up").addClass("visible");
        }
        else {
            $(".link-up").removeClass("visible");
        }
    });


    $(".smooth").click(function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top - 70;
        $("body,html").animate({
            scrollTop: top
        }, 1500);
    });


    //responsive scripts
    // if (window.matchMedia("(max-width: 767px)").matches) {
    //
    // }
});


