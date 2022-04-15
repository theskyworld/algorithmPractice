// 最长字串问题——暴力解法
function lengthOfLongestSubstring(s){
    if(s.length === 0){
        return 0
    }
    let res = 1;
    let resArr = [];
    let helpArr = [];
    let h = 0;
    let i = 0;
    for(let m = 0; m < s.length; m++){
        let isEqual = false;
        // console.log(i)
        for(i; i < s.length; i++){
            for(let j = 0; j < helpArr.length; j++){
                if(s[i] === helpArr[j]){
                    isEqual = true;
                }
            }
            if(isEqual === false){
                helpArr[h++] = s[i];
                if(helpArr.length >= res){
                    res = helpArr.length;
                    resArr = helpArr;
                }
            }
        }
        helpArr = [];
        h = 0;
        i = m + 1;
    }
    console.log(resArr)
    return res;
}
console.log(lengthOfLongestSubstring("abdvd"))