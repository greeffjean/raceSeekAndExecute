type TArgs = {
    query: string;
    callback: () => void;
    interval: number;
    timeout: number;
    errorCallback?: () => void;
};
declare const DEFAULT_TIMEOUT = 10000;
declare const DEFAULT_INTERVAL = 1000;
declare const DEFAULT_TIMER_FALLBACK = 5000;
declare const QUERY_NOT_FOUND = "Your seek query timed-out!";
declare const FAILED_TO_RUN = "Please review your arguments, we received an unexpected type! The expected parameter signature is { query: string, callback(): void, interval?: number, timeout?: number, errorCallback()?: void }";
declare const VALIDATE_TIMEOUT_ERROR = "Your fallback argument is not of type number, you have been give a default time value, this may cause your logic not to work as expected!";
declare const validateTimeout: (time: number, fallback: number) => number;
/**
### Objective - Seek and execute

Props:
- query: query string - (A string containing one or more selectors to match. This string must be a valid CSS selector string),
- callback: callback function to execute once `query` has been validated as a truthy value,
- interval: interval in which your seeking process will occur, defaults to `1000ms`,
- timeout: timeout that determines when your `setInterval` loop will terminate, defaults to `10000ms`
- errorCallback: function that is called when your search query time's out
*/
declare const raceSeekAndExecute: ({ query, callback, interval, timeout, errorCallback, }: TArgs) => {
    _timeout: NodeJS.Timeout;
    _interval: NodeJS.Timeout;
    clearTimers: () => void;
};
