function solution(nums) {
    var answer = 0;
    
    var setA = new Set();
    nums.forEach((num) => {
        // 실수부분
        // setA.push(num);
        setA.add(num);
    });
    // 실수부분 
    // answer = nums/2 > setA.length ? setA.length : nums/2;
    answer = nums.length/2 > setA.size ? setA.size : nums.length/2;
    
    return answer;
}