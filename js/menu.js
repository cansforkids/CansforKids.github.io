var onHomePage = location.pathname == "/" || location.pathname.indexOf("index") > -1;
var onLocalComputer = location.pathname.indexOf(".html") > -1;
function section(id) {
    if (onHomePage) {
        document.getElementById(id).scrollIntoView();
    } else {
        location.href = onLocalComputer ? `./index.html#${id}` : '/#' + id ;
    }
}

var menuIsOpen = false;

function openMenu() {
    $('#menu').css('height', '100vh');
    $('#menu a').eq(1).css('margin-top', '100px')
    $('#menu a, #menu button').css('display', 'block')
    $('#menu-button').attr('href', 'javascript:closeMenu()');
    menuIsOpen = true;
}

$(window).click((event) => {
    if (menuIsOpen && event.pageY > $('#menu').offset().top + 70) closeMenu();
})

function closeMenu() {
    $('#menu').css('height', '70px')
    $('#menu a, #menu button').css('display', 'none')
    $('#menu-button').attr('href', 'javascript:openMenu()');
    menuIsOpen = false;
}