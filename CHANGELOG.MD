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
