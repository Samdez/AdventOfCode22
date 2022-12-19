const input = Deno.readTextFileSync("./input.txt");

const arrInput = input.split("");

for (let i = 0; i < arrInput.length - 3; i++) {
	const slice = arrInput.slice(i, i + 4);
	for (let j = 0; j < slice.length; j++) {
		if (new Set(slice).size === slice.length) {
			console.log(i + 4);
			Deno.exit();
		}
	}
}
