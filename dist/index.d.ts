type TArgs = {
    query: string;
    callback: () => void;
    interval?: number;
    timeout?: number;
    errorCallback?: () => void;
};
/**
### Objective - Seek and execute

Props:
- query: query string - (A string containing one or more selectors to match. This string must be a valid CSS selector string),
- callback: callback function to execute once `query` has been validated as a truthy value,
- interval?: interval in which your seeking process will occur, defaults to `1000ms`,
- timeout?: timeout that determines when your `setInterval` loop will terminate, defaults to `10000ms`
- errorCallback?: function that is called when your search query time's out
*/
export declare const raceSeekAndExecute: ({ query, callback, interval, timeout, errorCallback, }: TArgs) => {
    _timeout: NodeJS.Timeout;
    _interval: NodeJS.Timeout;
    clearTimers: () => void;
};
export {};
