const { StorageModel } = require("../models");
const AES = require("crypto-js/aes");
const { JSEncrypt } = require("nodejs-jsencrypt");

const encrypt = async ({ file }, { aesKey, rsaKey }, userId = "1234") => {
  if (!file) throw new Error("Please upload file");
  if (!aesKey || !rsaKey) throw new Error("Please provide encryption keys");
  const encrypt = new JSEncrypt();
  const base64Str = file.data.toString("base64");
  encrypt.setPublicKey(rsaKey);
  const rsaData = encrypt.encrypt(base64Str);
  const encryptedData = AES.encrypt(rsaData, aesKey);

  console.log('encryptedData', encryptedData)

  await StorageModel.create({ encryptedData, userId, fileName: file.name });

  return {
    message: "Encryption Successfull",
  };
};

module.exports = {
  encrypt,
};
