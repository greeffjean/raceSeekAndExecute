# Objective - Seek and execute

The inspiration behind this function came from a need to mutate the DOM after some JS scripts rendered in DOM content, this process is not instant, thus a `racy` function was born enjoy! 

**Function Props**  
`boolean` - any value that you want to seek, 
`callback` - callback function to execute once `boolean` has been validated as a truthy value, 
`interval` - how often the seeking and validate process will occur, defaults to `1000ms`, 
`timeout` - timeout that determines when your `setInterval` loop will terminate, defaults to `10000ms`