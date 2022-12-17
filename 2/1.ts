const input = await Deno.readTextFile("./input.txt");

function getLineResult(player1Move: string, player2Move: string) {
	if (player1Move === "A") {
		if (player2Move === "X") return 3;
		if (player2Move === "Y") return 6;
		return 0;
	}
	if (player1Move === "B") {
		if (player2Move === "Y") return 3;
		if (player2Move === "Z") return 6;
		return 0;
	}
	if (player1Move === "C") {
		if (player2Move === "X") return 6;
		if (player2Move === "Z") return 3;
		return 0;
	}
	throw new Error("Invalid input");
}

let totalPoints = 0;
input.split("\n").forEach(round => {
	const [player1Move, player2Move] = round.split(" ");

	if (player2Move === "X") totalPoints += 1;
	if (player2Move === "Y") totalPoints += 2;
	if (player2Move === "Z") totalPoints += 3;

	const points = getLineResult(player1Move, player2Move);
	totalPoints += points;
});
console.log(totalPoints);
