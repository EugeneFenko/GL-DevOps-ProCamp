const os = require('os')

const totalMem = (os.totalmem()/Math.pow(1024,3)).toFixed(2)
const freeMem = (os.freemem()/Math.pow(1024,3)).toFixed(2)
const usedMem = (totalMem - freeMem).toFixed(2) 

// const cpuInfo;


switch (process.argv[2]) {
    case 'cpu':
        console.log(
            `All cores: ${os.cpus().length}\n`
        )
        os.cpus().forEach(v => {
            console.log(
              `Core: ${v.model}\nSpeed: ${v.speed}\nTimes user: ${v.times.user}\nTimes idle: ${v.times.idle}\nTimes sys: ${v.times.sys}\n`
                )
        })

        break;
        
    case 'mem':
        console.log(
        `Total memory: ${totalMem} GB\nFree memory: ${freeMem} GB\nUsed memory: ${usedMem} GB`
        )
        break;

    default:
        console.log("Run 'netop cpu' or 'netop mem'!")
        break;
}