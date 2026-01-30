// Simple debounce
function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, ms);
  };
}

// 3-line test
let x = 0;
const inc = debounce(() => x++, 100);
inc(); inc(); inc(); // Multiple calls
setTimeout(() => console.log(x), 200); // Should be 1