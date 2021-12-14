var myAssignment = [
	{
		color: "red",
		value: "#f00",
        number: 7
	},
	{
		color: "green",
		value: "#0f0",
        number: 5
	},
	{
		color: "blue",
		value: "#00f",
        number: 10
	},
	{
		color: "cyan",
		value: "#0ff",
        number: 20
	},
	{
		color: "magenta",
		value: "#f0f",
        number: 8,
	},
	{
		color: "yellow",
		value: "#ff0",
        number: 12
	},
	{
		color: "black",
		value: "#000",
        number: 30
	}
]
console.log(myAssignment, "THE ARRAY BEFORE THE THIRD OBJECT IS REMOVED")

function myFunction(juwon) {
	
	var removeObjthree = juwon.splice(2,1)
	console.log(removeObjthree,' THE THIRD OBJECT REMOVED')
	console.log(juwon,'THE ARRAY WITHOUT THE THIRD OBJECT')
	var total = 0
	for(let i = 0; i<juwon.length; i++){
		var total = total + juwon[i].number
		console.log(total, "I AM THE TOTAL")
	}
	var firstFour = juwon.slice(0,4)
	console.log(firstFour, "WE ARE THE FIRST FOUR")

	
}

console.log(myFunction(myAssignment))