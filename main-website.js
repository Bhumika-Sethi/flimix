const hamButton = document.querySelector('.ham-menu');
const navMenu = document.querySelector('.nav-menu');
const navContainer = document.querySelector('.nav-container')
hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamButton.classList.toggle('open');
    navContainer.classList.toggle('activate');
    // if(!menuOpen){
    //     hamButton.classList.add('open');
    //     navMenu.style.display = "flex";
    //     menuOpen = true;
    // }
    // else{
    //     hamButton.classList.remove('open');
    //     navMenu.style.display = "none";
    //     menuOpen = false;
    // }
});


// $(document).ready(function() {
//     $('#responsive').lightSlider({
//         item:4,
//         loop:false,
//         slideMove:2,
//         easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
//         speed:600,
//         responsive : [
//             {
//                 breakpoint:800,
//                 settings: {
//                     item:3,
//                     slideMove:1,
//                     slideMargin:6,
//                   }
//             },
//             {
//                 breakpoint:480,
//                 settings: {
//                     item:2,
//                     slideMove:1
//                   }
//             }
//         ]
//     });  
//   });


  // Instantiate the Bootstrap carousel
// $(".multi-item-carousel").carousel({
//     interval: false
//   });
  
//   // for every slide in carousel, copy the next slide's item in the slide.
//   // Do the same for the next, next item.
//   $(".multi-item-carousel .item").each(function () {
//     var next = $(this).next();
//     if (!next.length) {
//       next = $(this).siblings(":first");
//     }
//     next.children(":first-child").clone().appendTo($(this));
  
//     if (next.next().length > 0) {
//       next.next().children(":first-child").clone().appendTo($(this));
//     } else {
//       $(this)
//         .siblings(":first")
//         .children(":first-child")
//         .clone()
//         .appendTo($(this));
//     }
//   });


  $(document).ready(function() {
    $('#autoWidth,#autoWidth2,#autoWidth3').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
  



