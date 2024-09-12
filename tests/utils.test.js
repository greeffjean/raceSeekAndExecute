import { validateTimeout } from "../dist/index.js";

test("validateTimeout util function returns default timer value when argument data-type is invalid", () => {
    const resultOne = validateTimeout("1000");
    const resultTwo = validateTimeout("1000", undefined);

    expect(typeof resultOne).toEqual("number");
    expect(typeof resultTwo).toEqual("number");
})