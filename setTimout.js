for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(`Message ${i}`);
    }, i * 1000);  // Each message appears after 1, 2, 3, 4, and 5 seconds
  }
  