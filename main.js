function print(x) { console.log(x); }
function aBitHigher(x) {
	setTimeout(()=>{window.scrollBy(0,-x)}, 0);
}
let name = '';

function setName(newName) {
	name = newName;
}
function getName() {
	return name;
}

function isNameTyped() {
	if (name == null || name.trim() == '') return 0;
	else return 1;
}

let x = true;

function squareTriangle(a, h) {
	return a * h / 2
}


print('w23wr'.length)
print('w23r3wr'.length())