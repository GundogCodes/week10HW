// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//      [[1,   2,  3, 4],
//      [12, 13, 14, 5],
//      [11, 16, 15, 6], 
//      [10,  9,  8, 7]]

function spiral(N){
    const spiral = []
    const totalNums = []
    for (let i = 1; i<=N; i++){
        spiral.push([])
    }
    console.log('init ', spiral)
    for(let i=1; i<= (N**2);i++){
        totalNums.push(i)
    }
    console.log(`total nums ${totalNums}`)
    //right
    for(let i= 0;i<=(N-1);i++){
        spiral[N-N].push(totalNums[i])
        
    }
    for(let i=0; i<=(N-1);i++){
        totalNums.shift()
    }

    console.log('after right is done spiral is: ', spiral)
    console.log(`total nums ${totalNums}`)
    //down
    for(let i = 1; i<N;i++){
        spiral[i].push(totalNums[i-1])
    }
    console.log('after down is done spiral is: ', spiral)
    for(let i=0; i<=(N-2);i++){
        totalNums.shift()
    }
    console.log(`total nums ${totalNums}`)
    //left
    for(let i=0;i<N-1;i++){
        
        spiral[N-1].unshift(totalNums[i])
    }
    console.log('after left is done spiral is: ', spiral)
    for(let i=0; i<=(N-2);i++){
        totalNums.shift()
    }
    console.log(`total nums ${totalNums}`)
    //up or right
    for(let i=N-2;i>-1;i--){
        
        spiral[N-2].unshift(totalNums[i])
    }

    console.log(spiral[0])
    console.log(spiral[1])
    console.log(spiral[2])

}

spiral(3)