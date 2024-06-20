//your JS code here. If required.
function removeColor() {
	const SelectEl=document.getElementById('colorSelect');
	const selectCl=SelectEl.value;
	const options= SelectEl.options;
	for (let i = 0; i < options.length; i++) {
		if(options[i].value===selectCl){
			SelectEl.removeChild(options[i]);
			break;
		}
	}
}
document.getElementsByTagName('input')[0].addEventListener('click', removeColor);
