// Use for generate random bytes and numbers
const crypto = require('crypto')

// const randomValue = crypto.randomBytes(8);
const randomValue = crypto.randomBytes(8).toString("hex"); // ---> Get a random hexaDecimal value
console.log(randomValue);

// const hashValue = crypto.createHash("sha256") ---> give random value so we use update
const hashValue = crypto.createHash("sha256").update("Codekar Mohit").digest("hex");
console.log(hashValue);
// 564fd72e1f32ca68429ecd0f55219d30fd2981e93b611d62c4499ca0d51aff0f

const hashValue1 = crypto.createHash("sha256").update("Codekar Mohit").digest("hex");
console.log(hashValue1);
// 564fd72e1f32ca68429ecd0f55219d30fd2981e93b611d62c4499ca0d51aff0f

// If update values are same then output will be same


