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
 document.body.addEventListener('keydown', function(e){
  let pressed = e.key
  if(pressed === codes[orderedCounter]){
	orderedCounter++
  if(orderedCounter === codes.length){
		window.alert("Hurray!")
    orderedCounter = 0
	}
} else {
	orderedCounter = 0
}
 })
}
init()
