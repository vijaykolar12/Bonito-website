!function(){function e(e){classie.add(e.target.parentNode,"input--filled")}function t(e){""===e.target.value.trim()&&classie.remove(e.target.parentNode,"input--filled")}String.prototype.trim||!function(){var e=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;String.prototype.trim=function(){return this.replace(e,"")}}(),[].slice.call(document.querySelectorAll("input.input__field")).forEach(function(i){""!==i.value.trim()&&classie.add(i.parentNode,"input--filled"),i.addEventListener("focus",e),i.addEventListener("blur",t)}),$(".our-clients-slider").slick({slidesToShow:3,slidesToScroll:1,arrows:!1,dots:!1,autoplay:!0,infinite:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}}]}),$(".carousel-inner").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,autoplay:!0,infinite:!0}),window.matchMedia("(min-width: 767px)").matches&&$(function(){$.stellar({horizontalScrolling:!0,verticalOffset:0})}),$("#open-popup").magnificPopup({items:[{src:"https://www.youtube.com/watch?v=Wc_HC76u8F8",type:"iframe"}],gallery:{enabled:!0},type:"video"})}();