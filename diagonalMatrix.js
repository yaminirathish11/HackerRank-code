function diagonalDifference(arr) {
    // Write your code here
    let temp1=0;
    let temp2=0;
    for (let i=0;i<n;i++){
        for (let j=0;j<n;j++){
           if( i==j){
               temp1=temp1+arr[i][j];
           }
           if(i==n-j-1){
               temp2=temp2+arr[i][j];
           }
        }
        }
        
    console.log( Math.abs(temp1-temp2));
}
n=3;
arr=[[11, 2, 4],[4, 5, 6],[10 ,8 ,-12]]
diagonalDifference(arr,n);