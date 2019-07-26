const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


  function init() {

let orderedCounter = 0
 document.body.addEventListener('keydown', keyTest)
function keyTest(e){
console.log(e.key.toString())
	if(e.key.toString() === codes[orderedCounter]){
	orderedCounter++
	if(orderedCounter === codes.length){
		window.alert("Hurray!")
    orderedCounter = 0
	}
} else {
	orderedCounter = 0
}
}
console.log(orderedCounter)
}
init()
