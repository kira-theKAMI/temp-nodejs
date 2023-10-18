const os = require('os');

// user system information 

const user = os.userInfo();
console.log(user)

const systemInfo = {

    name : os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(systemInfo);
console.log(`The System uptime: ${os.uptime}seconds`);
