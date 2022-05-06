const mongoose = require("mongoose");

const playerCharactersSchema = new mongoose.Schema(
	{
		characterName: {
			type: String,
			require: true,
		},
		player: {
			type: mongoose.Schema.ObjectId,
			ref: "user",
			require: true,
		},
		race: {
			type: String,
		},
		pcClass: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("playerCharacters", playerCharactersSchema);
