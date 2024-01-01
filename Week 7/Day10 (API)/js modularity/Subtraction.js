

let EnhancedSub = (x,y,...args)=>{
    sub = x -  y;
    if (args.length !=0) {
        for (let i = 0; i < args.length; i++) {
             sub -= args[i];
            
        }
        
    }
    return sub;
     
}


let args =[1,2,3,4,5,6,7,8,9]

console.log(EnhancedSub(...args)); //it will look like this 1-2-3-4-5-6-7-8-9 = -43
console.log(EnhancedSub(1,2,3,4,5,6,7,8,9));//it will look like this 1-2-3-4-5-6-7-8-9 = -43

console.log(EnhancedSub(12,2,...args)); //it will look like this 12-2-1-2-3-4-5-6-7-8-9 = -35

console.log(EnhancedSub(2,3)); //it will look like this 2-3= -1