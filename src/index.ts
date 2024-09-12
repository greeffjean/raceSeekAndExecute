type TArgs = {
  query: string;
  callback: () => void;
  interval: number;
  timeout: number;
  errorCallback?: () => void;
};

const DEFAULT_TIMEOUT = 10000;
const DEFAULT_INTERVAL = 1000;
const DEFAULT_TIMER_FALLBACK = 5000;

const QUERY_NOT_FOUND = "Your seek query timed-out!";
const FAILED_TO_RUN =
  "Please review your arguments, we received an unexpected type! The expected parameter signature is { query: string, callback(): void, interval?: number, timeout?: number, errorCallback()?: void }";
const VALIDATE_TIMEOUT_ERROR =
  "Your fallback argument is not of type number, you have been give a default time value, this may cause your logic not to work as expected!";

const validateTimeout = (time: number, fallback: number) => {
  if (typeof fallback !== "number") console.warn(VALIDATE_TIMEOUT_ERROR);
  const _fallback =
    typeof fallback === "number" ? fallback : DEFAULT_TIMER_FALLBACK;
  if (typeof time !== "number") return _fallback;
  return time;
};

/** 
### Objective - Seek and execute

Props: 
- query: query string - (A string containing one or more selectors to match. This string must be a valid CSS selector string), 
- callback: callback function to execute once `query` has been validated as a truthy value, 
- interval: interval in which your seeking process will occur, defaults to `1000ms`, 
- timeout: timeout that determines when your `setInterval` loop will terminate, defaults to `10000ms`
- errorCallback: function that is called when your search query time's out
*/
const raceSeekAndExecute = ({
  query,
  callback,
  interval,
  timeout,
  errorCallback = () => null,
}: TArgs) => {
  let _interval: NodeJS.Timeout = undefined as unknown as NodeJS.Timeout;
  let _timeout: NodeJS.Timeout = undefined as unknown as NodeJS.Timeout;
    
  const run =
    typeof query === "string" &&
    typeof callback === "function" &&
    typeof errorCallback === "function";

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
    }, validateTimeout(interval, DEFAULT_INTERVAL));

    _timeout = setTimeout(() => {
      console.error(QUERY_NOT_FOUND);
      clearInterval(_interval);
      errorCallback();
    }, validateTimeout(timeout, DEFAULT_TIMEOUT));
  }

  if (!run) console.error(FAILED_TO_RUN);
  return { _timeout, _interval, clearTimers };
};

module.exports = { raceSeekAndExecute, validateTimeout };
