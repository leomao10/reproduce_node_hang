const fs = require('fs');
const util = require('util');
const promisify = util.promisify;

const copyFile = promisify(fs.copyFile);

async function copyTempFile() {
  console.log("copy from mnt to tmp");
  await copyFile('/mnt/example.png', '/tmp/example.png');
  console.log("copy from tmp to tmp");
  await copyFile('/tmp/example.png', '/tmp/test.png');
  console.log("complete copy from tmp to tmp");
}

copyTempFile();


