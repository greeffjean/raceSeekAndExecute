
/** 
### Objective - Seek and execute

Props: 
- boolean: any value that you want to seek, 
- callback: callback function to execute once `boolean` has been validated as a truthy value, 
- interval: interval in which your seeking process will occur, defaults to `1000ms`, 
- timeout: timeout that determines when your `setInterval` loop will terminate, defaults to `10000ms`
*/
const raceSeekAndExecute = (boolean, callback, interval = 1000, timeout = 10000) => {
    const _interval = setInterval(() => {
        if (boolean) {
            callback();
            clearInterval(_interval);
        }
    }, interval);

    setTimeout(() => {
        clearInterval(_interval);
    }, timeout)
};

export { raceSeekAndExecute };