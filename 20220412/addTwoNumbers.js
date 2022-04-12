class Node{
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}
class ListNode{
    constructor(){
        this.head = new Node(0,null);
        this.size = 0;
    }
    addNode(value){
        if(this.size === 0){
            this.head.value = value;
            this.size++;
        }else{
            let h = this.head;
            for(let i = 1; i < this.size; i++){
                h = h.next;
            }
            const newNode = new Node(value,null);
            h.next = newNode;
            this.size++;
        }
        
    }
}
function l1Arr(arr){
    const l1 = new ListNode();
    for(let i = 0; i < arr.length; i++){
        l1.addNode(arr[i]);
    }
    return l1;
}
// console.log(l1Arr([2,4,3]));
function l2Arr(arr){
    const l2 = new ListNode();
    for(let i = 0; i < arr.length; i++){
        l2.addNode(arr[i]);
    }
    // console.log(l2.size);
    return l2;
}
// console.log(l2Arr([5,6,4]));


function addTwoNums(l1,l2){
    let h1 = l1.head;
    let h2 = l2.head;
    // console.log(h1,h2)
    let res = new ListNode();
    let resArr = [];
    let h3 = res.head;
    // console.log(h3)
    // 判断两个数中最大的位数
    let maxDigit = l1.size >= l2.size ? l1.size : l2.size;
    for(let i = 0; i < maxDigit; i++){
        // console.log(maxDigit)
        if(h1 && h2){
            // console.log(h1.value,h2.value);
            h3.value += h1.value + h2.value;
            let newNode = new Node(0,null);
            h3.next = newNode;
            // 大于等于10时向前进一
            if(h3.value >= 10){
                h3.next.value += 1;
                h3.value = h3.value - 10;
            }
            resArr[i] = h3.value;
            h1 = h1.next;
            h2 = h2.next;
            h3 = h3.next;
        }
        else if(h1 && h2 === null){
            h3.value += h1.value + 0;
            let newNode = new Node(0,null);
            h3.next = newNode;
            // 大于等于10时向前进一
            if(h3.value >= 10){
                // maxDigit = maxDigit + 1;
                // maxDigit++;
                h3.next.value += 1;
                h3.value = h3.value - 10;
            }
            resArr[i] = h3.value;
        }else if(h1 === null && h2){
            h3.value += 0 + h2.value;
            let newNode = new Node(0,null);
            h3.next = newNode;
            // 大于等于10时向前进一
            if(h3.value >= 10){
                maxDigit++;
                h3.next.value += 1;
                h3.value = h3.value - 10;
            }
            resArr[i] = h3.value;
        }
    }
    return resArr;
}
let l1 = l1Arr([9,9,9,9,9,9,9]);
let l2 = l2Arr([9,9,9,9]);
console.log(addTwoNums(l1,l2))
