const text = await Deno.readTextFile("./input.txt");

let max = 0;

let elfPackage = 0;

text.split("\n").forEach(line => {
	if (line === "") {
		if (elfPackage > max) {
			max = elfPackage;
		}
		elfPackage = 0;
	} else {
		elfPackage += +line;
	}
});

console.log(max);
