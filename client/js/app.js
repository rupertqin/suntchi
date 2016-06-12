import 'lodash'
import 'semantic-ui/dist/semantic'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../css/common.scss'

const $menuSidebar = $('.ui.menu.sidebar')
function responseMenu() {
    var bodyW = $('body').width()
    if (bodyW <= 706) {
        $menuSidebar.addClass('vertical sidebar')
        
    } else {
        $menuSidebar.removeClass('vertical sidebar')
    }
}

// responseMenu()

$menuSidebar
    .sidebar({
        transition       : 'overlay',
        mobileTransition : 'uncover'
    })
    .sidebar('attach events', '.toggle')
// $( window ).resize(responseMenu);
    
// $('.toggle').on('click', ()=> {
//     $menuSidebar
//         .sidebar({
//             transition       : 'overlay',
//             mobileTransition : 'uncover'
//         })
//         .sidebar('attach events', '.toggle')
//         .sidebar('toggle')
// })

$('.slider').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    arrows: false,
    cssEase: 'linear'
});


class app {
    asdfs() {
        
    }
}

