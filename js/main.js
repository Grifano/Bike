// === #Burger icon click action ===
function burgerIcon() {
	document.body.classList.toggle('_lock')
	var menuShow = document.getElementById("showMenu");
	menuShow.classList.toggle('_show');
	var burgerClose = document.getElementById('burgerClose');
	burgerClose.classList.toggle('_active');
}
// === /Burger icon click action ===
//****************************************