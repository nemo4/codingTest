function solution(arr1, arr2) {
    var answer = [[]];

    answer = arr1.map((arrItem1, arrIdx1)=>{
        arrItem1 = arrItem1.map((arrItem2, arrIdx2)=>{
           return arrItem2 + arr2[arrIdx1][arrIdx2];
        });
        return arrItem1;
    });
    
    return answer;
}