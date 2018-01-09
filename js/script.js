$( document ).ready(function() {
	
	// Tooltip
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})

	// Popover
	$(function () {
	  $('[data-toggle="popover"]').popover()
	})
	
	// datepicker
	$('.input-datepicker').datepicker()
	.on('changeDate', function(ev){
		$(this).datepicker('hide'); 
	});

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $('.effect-3').parallax({imageSrc: '../img/example/back-3.jpg'});
    $('.effect-2').parallax({imageSrc: '../img/example/back-2.jpg'});
    $('.effect-1').parallax({imageSrc: '../img/example/back-1.jpg'});

    window.sr = ScrollReveal();
	sr.reveal('.trick');

    // owl-carousel

    // mousewheel

	// var owl = $('.owl-carousel');
	// owl.owlCarousel({
	//     center: true,
	//     loop:true,
	//     stagePadding: 200,
	//     responsiveClass:true,
	//        items:1,
	//        nav:true
	// });

	// 	owl.on('mousewheel', '.owl-stage', function (e) {
	//     if (e.deltaY>0) {
	//         owl.trigger('next.owl');
	//     } else {
	//         owl.trigger('prev.owl');
	//     }
	//     e.preventDefault();
	// });

	// without mousewheel

	$('.owl-carousel').owlCarousel({
		center: true,
		loop:true,
		stagePadding: 200,
		responsiveClass:true,
		items:1,
		nav:true,
		dots:false,
		navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>","<i class='fa fa-arrow-right' aria-hidden='true'></i>"]
	})

});