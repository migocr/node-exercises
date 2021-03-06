let intervalo = 5;
let contador = 5;

const helloWorld = delay => {

    if (contador === 5) {

        clearInterval(intervalo);

        intervalo = setInterval(() => {

            console.log('Hello World. ', delay);
            helloWorld(delay + 100);

        }, delay);

        contador = 0;
    }

    contador += 1;
};

helloWorld(100);





/*
Just like Challenge 1 but this time with repeated delay values.
  Print Hello World 5 times with a delay of 100 ms.
  Then Print it again 5 more times with a delay of 200 ms.
  Then print it again 5 more times with a delay of 300 ms.
  And so on until the program is killed.

  Include the delay in the printed message:
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 200
  Hello World. 200
  Hello World. 200
  ...

  Constraints:
   - Only use setInterval (not setTimeout)
   - Use only ONE if statement



*/