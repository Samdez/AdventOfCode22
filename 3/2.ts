const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");
const groups: string[][] = [];
let group: string[] = [];

lines.forEach((line, index) => {
	group.push(line);
	if (index !== 0 && (index + 1) % 3 === 0) {
		groups.push(group);
		group = [];
	}
});

let total = 0;

groups.forEach(group => {
	for (let i = 0; i < group[0].split("").length; i++) {
		const letter = group[0].split("")[i];
		if (group[1].includes(letter) && group[2].includes(letter)) {
			const ascii = letter.charCodeAt(0);
			const letterPriority = ascii >= 96 ? ascii - 96 : ascii - 38;
			total += letterPriority;
			break;
		}
	}
});

console.log(total);
