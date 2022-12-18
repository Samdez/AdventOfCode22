const input = Deno.readTextFileSync("./input.txt");
const startHeight = 8;
const numOfStacks = 9;

const lines = input.split("\n");

let crates: Record<string, string[]> = {};

for (let i = 0; i < startHeight; i++) {
	const line = lines[i];

	let secIndex = 1;
	for (let j = 0; j < numOfStacks * 4; j += 4) {
		const crate = line[j] + line[j + 1] + line[j + 2];

		if (crates[secIndex]) {
			crates[secIndex].push(crate);
		} else {
			crates[secIndex] = [crate];
		}
		crates[secIndex] = crates[secIndex].filter(el => el !== "   ");
		secIndex++;
	}
}

for (let i = 0; i < numOfStacks; i++) {
	const stacks = Object.values(crates);
	stacks[i] = stacks[i].reverse();
}

for (let i = startHeight + 2; i < lines.length; i++) {
	const line = lines[i].split(" ");
	console.log(line);

	const numOfCratestoMove = +line[1];
	const originStack = +line[3];
	const destinationStack = +line[5];

	for (let j = 0; j < numOfCratestoMove; j++) {
		const crateToMove = crates[originStack].pop()!;
		crates[destinationStack].push(crateToMove);
	}
}

let res = "";
Object.values(crates).forEach(stack => {
	res += stack.length ? stack[stack.length - 1] : " ";
});
res = res
	.split("")
	.filter(char => !char.match(/\[|\]/))
	.join("");

console.log(res);
