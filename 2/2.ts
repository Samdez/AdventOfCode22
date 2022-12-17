const input = await Deno.readTextFile("./input.txt");

function figurePlayer2Move(player1Move: string, roundResult: string) {
	if (player1Move === "A") {
		if (roundResult === "X") return "C";
		if (roundResult === "Z") return "B";
		return "A";
	}
	if (player1Move === "B") {
		if (roundResult === "X") return "A";
		if (roundResult === "Z") return "C";
		return "B";
	}
	if (player1Move === "C") {
		if (roundResult === "X") return "B";
		if (roundResult === "Z") return "A";
		return "C";
	}
	throw new Error("Invalid input");
}

let totalPoints = 0;
input.split("\n").forEach(round => {
	const [player1Move, roundResult] = round.split(" ");

	const myMove = figurePlayer2Move(player1Move, roundResult);

	if (myMove === "A") totalPoints += 1;
	if (myMove === "B") totalPoints += 2;
	if (myMove === "C") totalPoints += 3;

	totalPoints += roundResult === "Z" ? 6 : roundResult === "Y" ? 3 : 0;
});
console.log(totalPoints);
