let nums = [1, 3, 5, 2, 4, 8, 2, 2];
let num=[]
let q = true
let nnew 
for (let i = 0; i < nums.length - 1; i+=2) {
if (q) {
   nnew =Math.min(nums[i],nums[ i + 1]);
   q=false
  }else{
  nnew =Math.max(nums[i],nums[ i + 1]);
  q=true

}

num.push(nnew)
}
console.log(num);
