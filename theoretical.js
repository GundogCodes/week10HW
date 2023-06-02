/*
MATRIX TESTING
*/
// exampleMat = [[0,0,0],
//               [0,0,0],
//               [0,0,0]]

// exampleMat[0][1] =1
// console.log(exampleMat[0])
// console.log(exampleMat[1])
// console.log(exampleMat[2])

function spiral(N){
    let counter =1
    let startRow = 0
    let endRow = N-1
    let startCol = 0
    let endCol = N-1
    //Create Matrix
    const mat = []
    for(let i=0;i<N;i++){
        mat.push([])
    }
    //top
    for(let i = startRow; i<=endRow; i++){
        console.log(`i : ${i}`)
        mat[startRow][i] = counter
        counter++
    }
    startRow++
    //down
    
    for(let i = startRow;i<N; i++){
        mat[i].push(counter)
        counter++
    }
    endCol--
    //left
    console.log('Endrow : ',endRow,mat[3])
    console.log('beg counter: ',counter)

    for(let i= endRow;i>startCol;i--){
        console.log('counter: ',counter)
        mat[endRow].unshift(counter)
        counter++
    }
    endRow--
    //up
    console.log('endRow ',endRow)
    console.log('startRow ',startRow)
    for(let i = endRow;i>startRow;i--){

        for(let i = 0;i<1;i++){
            mat[endRow].unshift(counter)
            counter++
        }
    }
    //mat[3].unshift('2222')
    
    
    console.log(`start row: ${startRow}`)


    console.log(mat[0])
    console.log(mat[1])
    console.log(mat[2])
    console.log(mat[3])
    return mat
}

spiral(4)
