// Practice loops
  
  // 1: Use any loop. Given the iterable let str='hello,dear.friend! nice,to.see you!', 
  // replace each dot and comma with space. The final output should be: hello dear friend! nice to see you!.
  
  let str = 'hello,dear.friend! nice,to.see you!';

  let withoutCommas = str.replaceAll(',','');
  let withoutDots = str.replaceAll('.','');
  
  console.log(withoutCommas && withoutDots); 
  
  let spacedOut = "";
  
  for ( let i = 0; i<str.length; i++){
  spacedOut = spacedOut.concat(str[i], " ");
  spacedOut.trim();
  }
  console.log(spacedOut);

  
// 2. Loop from 0 to 15 with the conditions:
// For every number that is divisible by 3 output ‘Fizz’ in the console
// For every number that is divisible by 5 output ‘Buzz’ in the console
// For every number that is divisible by 3 and 5 output ‘FizzBuzz’ in the console
