const printHello = delay =>{
	
	console.log('Hello ' + delay +' seconds');

};

setTimeout(printHello, 4000, 4);
setTimeout(printHello, 8000, 8);

/*
Print the message Hello after 4 seconds after 4 seconds, 
then print the message Hello after 8 seconds after 8 seconds. 
You can only define a single function 
in your script, which includes inline functions. This means many 
setTimeout calls will have to use the exact same function.
*/
