var distributeCandies = function(candies, num_people) {
    let arr = [];
    for(let i =0;i<num_people;i++){
        arr[i]=0
    }
    let c = 0;
    while(candies>0){
        for(let i=0;i<num_people;i++){
            if(candies>i+1+c){
                arr[i] = arr[i] + i + 1 + c;
                candies = candies - i - 1 - c;
            }else{
                 arr[i] = arr[i] + candies;
                 candies = 0;
                 break
            }
        }
        c = c + num_people;
    }
    return arr
};