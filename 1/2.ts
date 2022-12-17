const text = await Deno.readTextFile("./input.txt");

const elfPackages: number[] = [];
let elfPackage = 0;

text.split("\n").forEach(line => {
	if (line === "") {
		elfPackages.push(elfPackage);
		elfPackage = 0;
	} else {
		elfPackage += +line;
	}
});

console.log(
	elfPackages
		.sort((a, b) => b - a)
		.slice(0, 3)
		.reduce((acc, val) => acc + val)
);
