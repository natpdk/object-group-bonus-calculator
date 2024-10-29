// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!


//Need the function to create a new object. Our objects:
  //New obeject needs to have:
  /*The employee's name
  *The bonusPercentage
  *The totalCompensation
  *the totalBonus
//Loop over the employees array
    //have the loop evaluate the rating and determine bonus eligibility
    //then we need it to calculate bonus percentage * annula income to make bonus amount
    */


//Using Atticus as a reference:
    // name: 'Atticus',
    // employeeNumber: '2405',
    // annualSalary: '47000',
    // reviewRating: 3
        //Receives base bonus of 4% based on review rating
        //Needs to receive the additional 5%
        //Total bonus needed: 9%

function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
 
  for (const employee of employees){
  if (employee.reviewRating < 2){
    console.log('No bonus added.')
  } else if (employee.reviewRating === 3 ){
    employee.annualSalary * .04
  } else if (employee.reviewRating === 4 ){
    employee.annualSalary * .06
  }else if (employee.reviewRating === 5 ){
    employee.annualSalary * .1
  }
}
//This console.log is to test if we got that calculation right:
console.log(`Bonus Percentage is: `, bonusPercentage)

//We need to find a way to create that bonusPercentage variable so it can be used below.
//Then we can use this to add the additional bonus if they have a number that equals 4.
//We attempted that by checking the employee's number length and if it is the right length
//we added the addtional bonus below.
if (employeeNumber.length === 4){
  bonusPercentage + (annualSalary * .05)
}
//This is to test if the total bonus captured the bonus based on reviews as well as employee number.
console.log(`Total Bonus is: `, totalBonus)

//We need to create an object with the new elements
//Now we need to create the total compensation
  // return new object with bonus results
let totalCompensation = totalBonus + annualSalary
//We know that the return needs to be the name and the total compensation.
return employees.name + totalCompensation
}
//Once all the new object parts are created in the function, I want to 
//push these elements into a new object and put it in the array.
// employees.push({
//   Name,
//   bonusPercentage,
//   totalBonus,
//   totalCompensation
// })

calculateIndividualEmployeeBonus('Atticus')