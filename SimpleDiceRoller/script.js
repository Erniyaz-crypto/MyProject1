async function getResult() {
    await runningMotion();
    const inputElement = document.querySelector(".result");
    inputElement.innerHTML = `<img src="imgs/dice${getRandomNumber()}.svg">`;
  }
  
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
  
  async function runningMotion() {
    const inputElement = document.querySelector(".result");
    for (let i = 1; i <= 18; i++) {
      inputElement.innerHTML = `<img src="imgs/dice${(i % 6)}.svg">`;
      await sleep(100);
    }
  }
  
  function getRandomNumber() {
    return Math.floor(Math.random() * 6);
  }
  
