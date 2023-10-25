function solution(number) {
    var answer = 0;
    
    for(var i=0; i<number.length; i++){
        for(var j=i; j<number.length; j++){
            for(var k=j; k<number.length; k++){
                if((i != j) && (j != k)){
                    var sum = number[i];
                    sum += number[j];
                    sum += number[k];
                    
                    if(sum == 0){
                        answer++;
                    }
                }
            }
        }
    }
    
    return answer;
}