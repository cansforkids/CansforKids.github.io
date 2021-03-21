var onHomePage = location.pathname == "/" || location.pathname.indexOf("index") > -1;
var onLocalComputer = location.pathname.indexOf(".html") > -1;
function section(id) {
    if (onHomePage) {
        document.getElementById(id).scrollIntoView();
    } else {
        location.href = onLocalComputer ? `./index.html#${id}` : '/' ;
    }
}