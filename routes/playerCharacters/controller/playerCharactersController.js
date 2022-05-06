const playerCharacters = require("../model/PlayerCharacters");

async function getAllPC(req, res) {
	try {
		// let fetchedPC = await playerCharacters.find({});

		res.json({ message: "success"});
	} catch (error) {
		res.status(500).json({
			message: "you have failed",
			error: error.message,
		});
	}
}

async function createPC(req, res) {
	const { characterName, player, race, pcClass } = req.body;

	try {
		const createdPC = new playerCharacters({
			characterName,
			player,
			race,
			pcClass,
		});

		let savedPC = await createdPC.save();

		res.json({ message: "success", payload: savedPC });
	} catch (error) {
		res.status(500).json({ message: "error", error: errorHandler(error) });
	}
}


module.exports = {
    createPC,
    getAllPC
};
