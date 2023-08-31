$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    dots: true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsive: {
    0: {
        items: 1,
    },
    800: {
        items: 3,
    },
    },
});

$(".accordion-header").click(function () {
    //если кликнутый элемент имеет класс active, то это элемент, который нам нужен; иначе, ищем в родительском контейнере элемент с классом active; переменная запоминает, какой из элементов в данный момент активный
    let activeHeader = $(this).hasClass("active")
      ? $(this)
      : $(this).parent().find(".accordion-header.active");
    //если кликнутый заголовок не имеет класса active, то
    if (!$(this).hasClass("active")) {
      //удаляем класс active у параграфа, находящегося под активным заголовком
      activeHeader.next().slideUp(200).removeClass("active");
      //удаляем класс active у активного на данный момент заголовка
      activeHeader.removeClass("active");
      //добавляем к кликнутому заголовку класс active, находим следующий за ним элемент(параграф) добавляем ему класс active
      $(this).addClass("active").next().slideDown(400).addClass("active");
    } else {
      //иначе, если клик сделан по активному заголовку, делаем его и текст под ним неактивными
      activeHeader.next().slideUp(400).removeClass("active");
      activeHeader.removeClass("active");
    }
  });

// $(document).ready(function() {
// 	$('.menu-burger__header').click(function(){
//         $('.menu-burger__header').toggleClass('open-menu');
//         $('.header__nav').toggleClass('open-menu');
//         $('body').toggleClass('fixed-page');
// 	});
// });
// const buttonLinks = document.qurySelectorAll('.price-headline[data-goto]');
// if(buttonLinks.length > 0){
//     buttonLinks.forEach(buttonLinks => {
//         buttonLinks.addEventListener("click", onButtonLinks);
//     });
//     function onButtonLinks (e){
//         const buttonLink = e.target;
//         if (menuLink.dataset.goto && document.querySelector(buttonLink.dataset.goto)){
//             const gotoBlock = document.querySelector(buttonLink.dataset.goto);
//             const gotoBlockValue = gotoBlock.getBloundingClientRect().top + pageYOffset

//             window.scrollTo({
//                 top: gotoBlockValue,
//                 behavion: "smooth"
//             });
//             e.preventDefault();
//         }
//     }
// }