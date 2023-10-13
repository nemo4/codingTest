function solution(n, control) {
    var answer = 0;
    
    for(let i=0; i<control.length; i++){
        let str = control[i];
        switch(str){
            case 'w':
                n++;
                break;
            case 's':
                n--;
                break;
            case 'd':
                n = n+10;
                break;
            case 'a':
                n = n-10;
                break;
            default:
                break;
        }
    }
    answer = n;
    return answer;
}