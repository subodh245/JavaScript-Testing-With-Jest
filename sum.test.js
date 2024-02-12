// const sum = require("./sum");
// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// const fetchData = require("./sum");

// test("two plus two is four", () => {
//   expect(2 + 2).toBe(4);
// });

// test("object assignment ", () => {
//   const data = { one: 1 };
//   data["two"] = 2;
//   expect(data).toBeFalsy({ one: 1, two: 2 });
// });

// falsy /truthy

// test("null is truthy", () => {
//   const n = 1;
//   expect(n).toBeFalsy();
// });

// const myFunction = require("./sum");

// test("trows on invalid input", () => {
//   expect(() => {
//     myFunction("subodh");
//   }).toThrow();
// });

// test("the data is peanut butter", (done) => {
//   function callback(data) {
//     try {
//       expect(data).toBe("peanut butter");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }
//   fetchData(callback);
// });

// PROMISE IN TESTING
// const fetchPromise = require("./sum");

// test("the data is peanut butter", () => {
//   return expect(fetchPromise()).resolves.toBe("peanut butter");
// });

// test("the fetch fails with an error", () => {
//   return expect(fetchPromise()).rejects.toThrow("error");
// });

// const fetchPromise = require("./sum");

// test("the data ispeanut butter", async () => {
//   const data = await fetchPromise();
//   expect(data).toBe("peanut butter");
// });

// MOCK Function

// test("mock implementation of a basic function", () => {
//   const mock = jest.fn((x) => 42 + x);
//   expect(mock(1)).toBe(43);
//   expect(mock).toHaveBeenCalledWith(1);
// });

test("spying on a method of an obhect", () => {
  const video = {
    play() {
      return true;
    },
  };
  const spy = jest.spyOn(video, "play");
  video.play();
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
