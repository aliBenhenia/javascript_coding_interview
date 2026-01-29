const retry = async (fn, times = 3) => {
  try {
    return await fn();
  } catch (err) {
    console.log("fialed ", times)
    if (times <= 0) throw err;
    return retry(fn, times - 1);
  }
};

let attempts = 0;

const successAfterFail = async () => {
  attempts++;
  if (attempts < 3) throw new Error("Fail");
  return "OK";
};

retry(successAfterFail, 3)
  .then(res => console.log("Test 1:", res))
  .catch(err => console.error("Test 1 failed:", err.message));
