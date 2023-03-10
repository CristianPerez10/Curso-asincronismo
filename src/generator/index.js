function* generatorFn() {
	yield 1;
	yield 2;
	yield 3;
}

const g = generatorFn();
console.log(g.next().value);
console.log("----");
console.log(g.next().value);
console.log("----");
console.log(g.next().value);

function* iterate(array) {
	for (let value of array) {
		yield value;
	}
}

const it = iterate(["oscar", "omar", "ana", "lucia", "juan"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
