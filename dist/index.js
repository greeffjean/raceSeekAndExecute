"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raceSeekAndExecute = void 0;
const DEFAULT_TIMEOUT = 10000;
const DEFAULT_INTERVAL = 1000;
const QUERY_NOT_FOUND = "Your seek query timed-out!";
const FAILED_TO_RUN = "Please review your arguments, we received an unexpected type! The expected parameter signature is { query: string, callback(): void, interval?: number, timeout?: number, errorCallback()?: void }";
/**
### Objective - Seek and execute

Props:
- query: query string - (A string containing one or more selectors to match. This string must be a valid CSS selector string),
- callback: callback function to execute once `query` has been validated as a truthy value,
- interval?: interval in which your seeking process will occur, defaults to `1000ms`,
- timeout?: timeout that determines when your `setInterval` loop will terminate, defaults to `10000ms`
- errorCallback?: function that is called when your search query time's out
*/
const raceSeekAndExecute = ({ query, callback, interval = DEFAULT_INTERVAL, timeout = DEFAULT_TIMEOUT, errorCallback = () => null, }) => {
    let _interval = undefined;
    let _timeout = undefined;
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
            errorCallback();
        }, timeout);
    }
    if (!run)
        console.error(FAILED_TO_RUN);
    return { _timeout, _interval, clearTimers };
};
exports.raceSeekAndExecute = raceSeekAndExecute;
//# sourceMappingURL=index.js.map