import { raceSeekAndExecute } from "index";
const query = "#dummy-testId";

test("Seek domNode & execute callback after 2000ms", async () => {
    const cb = jest.fn();
    raceSeekAndExecute(query, cb, 500, 5000);

    const returnCB = (cb) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(cb);
            }, 1000);
        })
    };

    const addMarkup = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let testId = "dummy-testId";
                let newDiv = document.createElement("div");
                newDiv.setAttribute("id", testId);
                document.body.appendChild(newDiv);
                resolve();
            }, 2000);
        })
    };

    await addMarkup();
    await returnCB(cb).then((fn) => expect(fn.mock.calls.length).toEqual(1));
}); 

test("fn fails to run when props types are incorrect", () => {

});