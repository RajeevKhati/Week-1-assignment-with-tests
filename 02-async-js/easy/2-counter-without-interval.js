let i = 0;
console.log(i);
function counter() {
  setTimeout(() => {
    i += 1;
    console.clear();
    console.log(i);
    counter();
  }, 1000);
}

counter();
