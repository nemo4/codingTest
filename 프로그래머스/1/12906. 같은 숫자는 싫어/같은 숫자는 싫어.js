function solution(arr)
{
    var answer = [];

    var newChar = '';
    arr.map((e)=>{
        if(newChar !== e ){
            answer.push(e);
            newChar = e;
        }
    });
    
    return answer;
}