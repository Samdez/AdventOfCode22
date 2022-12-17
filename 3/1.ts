const input = await Deno.readTextFile("./input.txt");

let total = 0;

input.split("\n").forEach(rucksack => {
	const firstHalf = rucksack.slice(0, rucksack.length / 2);
	const secondHalf = rucksack.slice(rucksack.length / 2, rucksack.length);

	for (let i = 0; i < firstHalf.split("").length; i++) {
		if (secondHalf.includes(firstHalf.split("")[i])) {
			const commonLetter = firstHalf.split("")[i];
			const ascii = commonLetter.charCodeAt(0);
			const letterPriority = ascii >= 96 ? ascii - 96 : ascii - 38;
			total += letterPriority;
			break;
		}
	}
});

console.log(total);
