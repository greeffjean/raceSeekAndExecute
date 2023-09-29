const QUERY_NOT_FOUND = "Your seek query timed-out!";
const FAILED_TO_RUN = "Please review your param types!"

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
    const run = typeof query === "string" && typeof callback === "function";

    const clearTimers = () => {
        clearTimeout(_timeout);
        clearInterval(_interval);
    };

    if (run) {
        _interval = setInterval(() => {
            const element = document.querySelector(query);
            if (element) {
                callback();
                clearInterval(_interval);
                clearTimeout(_timeout);
            }
        }, interval);

        _timeout = setTimeout(() => {
            console.error(QUERY_NOT_FOUND);
            clearInterval(_interval);
        }, timeout);
    }

    if (!run) console.error(FAILED_TO_RUN);
    return { _timeout, _interval, clearTimers };
};

module.exports = { raceSeekAndExecute };