

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log(test.reduce((total, num) => {
	return total + num;
}))


//10: 2, 5
//9: 3, 3
//8: 2, 2, 2
//7: 7, 1
//6: 2, 3
//5: 5, 1
//4: 2, 2
//3: 3, 1
//2: 2, 1
//1: 1, 1



const listOfFactors = [2, 5, 3, 3, 2, 2, 7]

const lcm = listOfFactors.reduce((total, num) => {
	return total * num;
});

console.log(lcm)

const workingArray = [];

for (let i = 1; i <= lcm; i++) {
	if (lcm % i === 0) {
		workingArray.push(String.fromCharCode(i).repeat(i));
	}
}

console.log(workingArray);


//Testing to see if a change happens