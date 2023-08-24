# Objective - Seek and execute

The inspiration behind this function came from a need to mutate the DOM after some JS scripts rendered in DOM content, this process is not instant, thus a `racy` function was born enjoy! 

    Fn Props: 
    - BOOLEAN: any value that you want to seek, 
    - CALLBACK: callback function to execute once `boolean` has been validated as a truthy value, 
    - INTERVAL: interval in which your seeking process will occur, defaults to `1000ms`, 
    - TIMEOUT: timeout that determines when your `setInterval` loop will terminate, defaults to `10000ms`
