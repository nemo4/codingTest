function solution(phone_number) {
    var answer = '';
    
    answer = phone_number.split('').map((e, idx, arr)=>{
        return idx < (arr.length - 4) ? '*' : e;
    }).join('');
    
    return answer;
}