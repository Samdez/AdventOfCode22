const input = Deno.readTextFileSync("./input.txt");

const lines = input.split("\n");
let total = 0;
lines.forEach(line => {
	const [elv1Area, elv2Area] = line.split(",");
	const [elv1Start, elv1End] = elv1Area.split("-").map(x => parseInt(x));
	const [elv2Start, elv2End] = elv2Area.split("-").map(x => parseInt(x));
	if (
		(elv1Start >= elv2Start && elv1Start <= elv2End) ||
		(elv2Start >= elv1Start && elv2Start <= elv1End)
	) {
		total++;
	}
});

console.log(total);
