let counter = document.querySelectorAll(".count");
let arr = Array.from(counter);

arr.map((items) => {
  let count = 0;

  function counterUp() {
    count++
    items.innerHTML = count;

    if (count == items.dataset.change) {
      clearInterval(stop);
    }
  }

  let stop = setInterval(function () {
    counterUp();
  }, 1000 / items.dataset.change);
});

