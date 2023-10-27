function solution(number, limit, power) {
    var answer = 0;
    
    var numArr = new Array();
    for(var i=1; i<=number; i++){
        var cnt = 0;
        for(var j=1; j*j<=i ; j++){
            if(j * j == i){
                cnt++;
            }
            else if(i%j == 0 ){
                cnt+=2;
            }
        }
        numArr.push(cnt);
    }
    console.log(numArr);
    
    numArr.forEach((e)=>{
        var pw;
        if(e > limit){
            pw = power;
        }
        else {
            pw = e;
        }
        answer+=pw;
    });
   
    
    /*
    for(var i=1; i<=number; i++){
        var ip = 0;
        for(var j=1; j<=i; j++){
            if(i%j === 0){
                ip++;
            }
        }
        if(ip > limit){
            ip = power;
        }
        answer += ip;
    }
    */
    
    
    
    
    return answer;
}