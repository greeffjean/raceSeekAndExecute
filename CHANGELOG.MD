# Welcome to our Changelog

`v2.0.0` 
**Breaking Changes** :rotating_light:

 - Add new parameter, `errorCallback`.
 - `errorCallback` parameter is called when `setTimeout` query complete's.
 - Update parameter signature from inline to object format.
 - Added new utility function `validateTimeout` to validate timer values arguments, function provides a fallback value if developer passes non-valid parameter data-types.
 > New param signature 
 > raceSeekAndExecute({ query, callback, interval = 1000, timeout = 10000, errorCallback })

---

`v2.0.1` 

- Update README.MD

---

`v2.1.1` 
[d3352b5](https://github.com/greeffjean/raceSeekAndExecute/commit/d3352b5146cc7a8e8c95cbeaed03e87a2b571516)
- Convert to typescript package
- Update package.json dependencies

---

`v.2.5.5`
[c3930e4](https://github.com/greeffjean/raceSeekAndExecute/commit/c3930e4996d828bce640d93fc6c5f51038f49520)

- Update module typings
