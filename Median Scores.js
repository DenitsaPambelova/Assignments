function median(arr) {
       let medians = [];
       let temp = [];
       let nums=[];
     for (let e of arr){
         temp.push(e);
         nums = [...temp].sort((a, b) => a - b);

         const mid = Math.floor(nums.length / 2)

         if (nums.length % 2 !== 0) {
             medians.push(nums[mid]);
         } else {
             medians.push((nums[mid - 1] + nums[mid]) / 2)
         }
     }

     let finalMedians=[]; let newEl;

     for (let e of medians){
         let newEl=Math.round(e);
        finalMedians.push(newEl)
     }

     return finalMedians;
   }
//console.log(median([100, 20, 50, 70, 45]));
//console.log(median([1, 2, 3, 4, 5, 6]));

