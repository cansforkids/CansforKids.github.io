/*var mainColor = "#3486eb"
var tabColor = "white";
var onSmallerDevice = window.innerWidth <= 1024;
var onHomePage = location.pathname == "/" || location.pathname.indexOf("index") > -1;
var onLocalComputer = location.pathname.indexOf(".html") > -1;

var dir = location.pathname;
$(window).scroll(() => {
	if ($('html').scrollTop() > 640) {
		$('#menu, #tabs-m').css('background', mainColor)
		$('#menu, #tabs-m').css('box-shadow', '7px 7px 7px rgb(0, 0, 0, 0.2)')
		$('.tab').css('color', 'white');
		$('#menu-button').css('filter', 'none')
	} else {
		$('.tab').css('color', tabColor);
		$('#menu, #tabs-m').css('box-shadow', 'none')
		$('#menu, #tabs-m').css('background', 'transparent')
		$('#menu-button').css('filter', 'invert()')
	}
})

function section(id, lower) {
    if (onHomePage) {
        $(window).scrollTop($(id).offset().top + (lower ? 30 : -100))
    } else {
        location.href = onLocalComputer ? `./index.html#${id}` : '/#' + id ;
    }
	hideTabs()
}

*/function showTabs() {
	$('#tabs-m').animate({ height: "100%" }, 100);
	$('#menu-button').attr('href', 'javascript:hideTabs()');
}

function hideTabs() {
	$('#tabs-m').animate({ height: 90 }, 100);
	$('#menu-button').attr('href', 'javascript:showTabs()');
}
/*

$(window).click((event) => {
	if (event.pageY > $('#menu').offset().top + 70) hideTabs();
})
*/