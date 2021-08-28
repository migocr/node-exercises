
let index = 0;

const printHello = setInterval(() =>{

	console.log('Hello World');
	index +=1;
	
	if (index === 5) {
		console.log("Done");
		clearInterval(printHello);
	}

},1000)
/*
Print the message Hello World every second, but only five times. 
After five times, print the message Done, and let the node process exit. 
And you cannot use a setTimeout call for this challenge
*/