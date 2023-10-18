# Objective - Seek and execute

The inspiration behind this function came from a need to perform an action after a script created and rendered new DOM content - (Typical in React), as the rendering process takes a little bit of time, a `racy` function was born, enjoy! 

> Mission - Keep searching for a `x` query (DOM node) for `x` amount of time, at `x` intervals and once found, perform `x` action, if query not successful run `x`` callback.

**Function Props**  
--
`query` - query string - (A string containing one selectors to match. This string must be a valid CSS selector string),
`callback` - callback function to execute once `query` has been validated as a truthy value, 
`interval` - how often the validate the query, defaults to `1000ms`, 
`timeout` - determines when your `interval` loop will terminate, defaults to `10000ms`,
`errorCallback` - function called when search query time's out

**Function return value**
- **clearTimers**  For those individuals using React, our function returns a method (`clearTimers`) which you can call if you want 
to clear the timers that are initiated during the functions lifecycle, this typically would be needed 
if and when your React component un-mounts but the timers are still running in the background. 

    > Simply call this method in the `return` statement of your `useEffect` hooks

- **_timeout** Timeout instance ( type  NodeJS.Timeout )
- **_interval** Interval instance ( type  NodeJS.Timeout )


## Function Usage

    const query = "#myQuery";  
    const callback = () => console.log("Found it!") 
    const errorCallback = () => console.log("Not Found!") 
    const { clearTimers, _timeout, _interval } = raceSeekAndExecute({query, callback, errorCallback})
--
 ##### React
    useEffect(() => {
        const query = "#myQuery";  
        const callback = () => console.log("Found it!") 
        const errorCallback = () => console.log("Not Found!") 
        const { clearTimers, _timeout, _interval } = raceSeekAndExecute({query, callback, errorCallback})
        return () => clearTimers()
    }, []);

