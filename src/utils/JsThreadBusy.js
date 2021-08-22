export const jsThreadBusy = (shouldMakeJSThreadBusy) => {
  if (shouldMakeJSThreadBusy) {
    setTimeout(() => {
      makeJSLoopBusy(3000);
      makeJSLoopBusy(3000);
      makeJSLoopBusy(3000);
    }, 5000);
  }
};

export const makeJSLoopBusy = (limit) => {
  setInterval(() => {
    for (let index = 0; index < limit; index++) {
      // something
      console.log("Blocking");
    }
  }, 1000);
};
