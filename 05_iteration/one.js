//for

for (let i = 1; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is not best number");
  }
  console.log(element);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);

    console.log(i + "*" + j + " = " + i * j); //table 1 to  10
  }
}

let array = ["flash", "batman", "superman"];
console.log(array.length);

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

// break and continue

for (let index = 0; index <= 20; index++) {
  if (index == 5) {
    // console.log("Detected 5 ");
    // break; // it stops loop execution
    continue; // skips only that part and move forward to next iteration
  }
  console.log(`Value of i is ${index}`);
}
