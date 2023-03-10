const promise = new Promise(function (resolve, reject) {
	resolve("hello");
});

const cows = 9;

const countCows = new Promise(function (resolve, reject) {
	if (cows > 10) resolve("Demand satisfacted");
	else reject("Could not satisfy demand");
});

countCows
	.then((result) => console.log(result))
	.catch((error) => console.log(error))
	.finally(() => console.log("Promise finished"));
