function solution(new_id) {
    var answer = '';
    // 실수문법
    // new_id = String.lower(new_id)..??
    new_id = new_id.toLowerCase();
    
    
    new_id = new_id.replace(/[^a-z0-9\-\_\.]/g,'');
    
    
    // 실수문법
    //new_id = new_id.replaceAll('[\.]*', '.')
    new_id = new_id.replaceAll(/[\.]+/g, '.');
    
    
    if(new_id.startsWith('.')){
        if(new_id.length == 1){
            new_id = '';
        }
        else{
            new_id = new_id.substr(1, new_id.length-1);    
        }
    }
    if(new_id.endsWith('.')){
        if(new_id.length == 1){
            new_id = '';
        }
        else{
            new_id = new_id.substr(0, new_id.length-1);
        }
    }
    
    if(new_id == ''){
        new_id = 'a';
    }
    
    if(new_id.length >= 16){
        new_id = new_id.substr(0, 15);
        if(new_id.endsWith('.')){
            new_id = new_id.substr(0, new_id.length-1);
        }
    }
    
    if(new_id.length <= 2){
        var lastChar = new_id.substr(new_id.length-1, 1);
        while(new_id.length < 3){
            new_id = new_id + lastChar;
        }
    }
       
    
    answer = new_id;
    
    return answer;
}