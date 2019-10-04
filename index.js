
var speakeasy = require("speakeasy");
if (!process.argv[2]) {
  console.log("Secret is required as a first argument")
  return
}
var token = speakeasy.totp({ secret: process.argv[2], encoding: 'base32' });
console.log(token)