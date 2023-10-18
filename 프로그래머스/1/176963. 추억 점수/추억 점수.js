function solution(name, yearning, photo) {
    var answer = [];
    
     photo.forEach((photoArr, idx) => {
        var sum = 0;
        
        photoArr.forEach((photoItem, idx) => {
            var idx = name.indexOf(photoItem);
            if(idx != -1){
                sum += yearning[idx];
            }
        });
         
        answer.push(sum);
    });
    return answer;
}