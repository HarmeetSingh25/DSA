let arr = [1,0,2,3,0,4,5,0]
let zero =0
let n = arr.length
for (let i =arr.length-1; i > 0; i--) {
    if(arr[i]==0){
        zero++
    }
    
}
let i = n-1
let j = n+zero-1

while(i>=0){
    if(j<n){
        arr[j]=arr[i]
    }
    if(arr[i]==0){
        j--
if(j<n){
    arr[j]=arr[i]
}
    }
    i--
    j--
}

console.log(arr);
