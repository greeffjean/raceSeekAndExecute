# Objective - Seek and execute

The inspiration behind this function came from a need to perform an action after a script created and rendered new DOM content, as the rendering process takes a little bit of time, a `racy` function was born enjoy! 

> Mission - Keep searching for a DOM node for `x` amount of time, at `x` intervals and once found, perform `x` action.

**Function Props**  
`query` - query string - (A string containing one selectors to match. This string must be a valid CSS selector string),
<br/>
`callback` - callback function to execute once `query` has been validated as a truthy value, 
<br/>
`interval` - how often the validate the query, defaults to `1000ms`, 
<br/>
`timeout` - determines when your `interval` loop will terminate, defaults to `10000ms`