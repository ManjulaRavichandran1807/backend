const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  userId: String,
  encryptedData: {},
  fileName: String,
});

const StorageModel = mongoose.model("storage", storeSchema);

module.exports = StorageModel;
