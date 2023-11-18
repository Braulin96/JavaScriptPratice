const numbers = [1, 2, 3, 4, 5];
//const numbers = [74, 18, 10, 5, 84, 24, 105];

const people = [
  {
    name: "Florin",
    age: 26,
  },
  {
    name: "Ivan",
    age: 18,
  },
  {
    name: "August",
    age: 15,
  },
];

function ArrayMethod() {
  const even = numbers.filter((number) => number % 2 === 0); // will filter just the numbers % 2 the rest = 0
  //console.log("even:", even); // will display [2,4]
  const adults = people.filter((person) => person.age >= 18); // will filter people with age >18
  //console.log("adults:", adults);

  const allNamesExceptAugust = people.reduce((accumulator, person) => {
    if (person.name !== "August") {
      return accumulator + person.name + ", ";
    }
    return accumulator;
  }, "");
  //console.log("allNamesExceptAugust:", allNamesExceptAugust); // will display "Florin, Ivan, "

  const numbers2 = numbers.slice(1, 4);
  //console.log('numbers2:',numbers2)

  const participants = ["Florin", "Ivan", "Liam", "Jai", "Patrick"];
  const winners = participants.slice(0, 3); //result ['Florin', 'Ivan', 'Liam']
  //console.log ('winners:', winners)


  const sortedNumbers = numbers.sort((a, b) => a - b); // order the numbers
  console.log("sortNumbers:", sortedNumbers);

  //console.log('concat:', numbers.concat(100)) add 100 to the last position of my array
  //console.log('fill:', numbers.fill(0,3,5))

  //console.log('includes:', numbers.includes(100))// boolean false in this case my array numbers does not include 100

  console.log('join:', numbers.join('-')) //result 1-2-3-4-5
  console.log('reverse:', numbers.reverse())
  //console.log('push:', numbers.push(10))  //push 10 to the array




  
  return (
    <div>
      <p>Array Method</p>
      // Using map to get the same result as a forEach showed above
      {numbers.map((number, index) => (
        <p key={index}>
          a[{index}] = {number}
        </p>
      ))}
    </div>
  );
}

export default ArrayMethod;
