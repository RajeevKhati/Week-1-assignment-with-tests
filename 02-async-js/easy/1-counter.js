let i = 0;
function counter() {
  setInterval(() => {
    console.clear();
    console.log(i);
    i += 1;
  }, 1000);
}

counter();
