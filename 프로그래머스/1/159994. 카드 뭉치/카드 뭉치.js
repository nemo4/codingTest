function solution(cards1, cards2, goal) {
    var answer = '';
    
    var cardTurn = 1;
    var cnt = 0;
    answer = 'Yes'
    goal.map((e)=>{
        if(e === cards1[0]){
            cards1.shift();
        }
        else if(e === cards2[0]){
            cards2.shift();
        }
        else{
            answer = 'No'   
        }
    });
    
    return answer;
}
