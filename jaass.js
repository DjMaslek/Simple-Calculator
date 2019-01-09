//getting elements
var display = document.getElementById('display');
var btns = document.getElementsByClassName('btn');
//string for adding numbers and operators to display
var str = '';
//attaching a function to the buttons
for (var i = 0; i < btns.length; i++) {
			addEvent(btns[i]);               
}
function addEvent(btn) {
	btn.addEventListener('click', displayValue);
			function displayValue() {
				var type = btn.getAttribute('data-type');
				//get the result
				if (type === '=') {
					str = eval(str);
					display.value = str;
					return;
				}
				//clear display
				else if (type == "C") {
					str = '';
				}
				//adding numbers and operators to display
				else {
					str += type;
				}
				display.value = str;
			}
		}
