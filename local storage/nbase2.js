const N = 10;
const M = 7; // Choose any value between 5 and 10
const A = [0, 20, 43, 31, 89, 56, 61, 49, 70, 99, 33];
const ox = new Array(N + 1);
const oy = new Array(N + 1);

for (let i = 1; i <= N; i++) {
  ox[i] = Math.trunc(A[i] / M);
  oy[i] = A[i] % M;
  //console.log(`${ox[i]},${oy[i]}`);
}

function findSafePath(X, Y) {
  const path = [];//creating 2D array to store the path
  let x = 0, y = 0; // to start from (0,0)

  while (x < X || y < Y) {
    if (x < X && ox.every((element) => element !== x + 1)) {
      x++;
    } 
    else if (y < Y && oy.every((element) => element !== y + 1)) {
      y++;
    } 
    else {
      console.log(`No safe path found.`);
      return;
    }
    //adding path coordinates to array (x,y)
    path.push([x, y]);
  }

  console.log(`Safe path from (0,0) to (${X}, ${Y}):`);
  //using for loop to access the saved path and display
  for (const value of path) {
    console.log(`(${value[0]}, ${value[1]})`);
  }
}

//consider (X,Y) as (destinationX,destinationY)
const destinationX = 4;
const destinationY = 3;
//function to find destination
findSafePath(destinationX, destinationY);
