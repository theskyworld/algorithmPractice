function twoSum(nums,target){
    let res = new Array(2);
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                res[0] = i;
                res[1] = j;
            }
        }
    }
    return res;
}
console.log(twoSum([3,3],6));