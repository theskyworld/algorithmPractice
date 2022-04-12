// function trunacte(a,b){
//     // 求a,b的二进制
    
// }
// console.log(125 << 1);
// 运用位运算求a/b的结果
function divide(a,b){
    // 取被除数和除数的绝对值
    // 对于任意一个整数都存在~n = -(n+1)
    // ~a + 1的结果为-a;
    let dividend = a > 0 ? a : ~a + 1;
    let divisor = b > 0 ? b : -b + 1;

    // 记录商的值
    let quotient = 0;
    // 记录余数的值
    let remainder = 0;
    // 取商和余数的值
    // 对于[−2^31,  2^31 − 1]之间的整数
    for(let i = 31; i >= 0; i--){
        if((dividend >> i) >= divisor){
            quotient = quotient + (1 << i);
            dividend = dividend - (divisor << i)
        }
    }
    // 确定商的符号
    quotient = a ^ b > 0 ? quotient : ~quotient + 1;
    // 确定余数的符号
    remainder = b > 0 ? dividend : ~dividend + 1;
    return quotient;
}
console.log(divide(7,-3));