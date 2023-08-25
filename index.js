
const queryNotFoundMsg = "Your seek query timed-out!";

/** 
### Objective - Seek and execute

Props: 
- query: query string - (A string containing one or more selectors to match. This string must be a valid CSS selector string), 
- callback: callback function to execute once `query` has been validated as a truthy value, 
- interval: interval in which your seeking process will occur, defaults to `1000ms`, 
- timeout: timeout that determines when your `setInterval` loop will terminate, defaults to `10000ms`
*/
const raceSeekAndExecute = (
    query,
    callback,
    interval = 1000,
    timeout = 10000
) => {
    let _interval;
    let _timeout;

    _interval = setInterval(() => {
        const element = document.querySelector(query);
        if (element) {
            if (typeof callback === "function") callback();
            clearInterval(_interval);
            clearTimeout(_timeout);
        }
    }, interval);

    _timeout = setTimeout(() => {
        console.error(queryNotFoundMsg);
        clearInterval(_interval);
    }, timeout);
};

export { raceSeekAndExecute };