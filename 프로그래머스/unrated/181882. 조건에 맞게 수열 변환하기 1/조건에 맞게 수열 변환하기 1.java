class Solution {
    public int[] solution(int[] arr) {
        int[] answer = {};
        
        for(int i=0; i<arr.length; i++){
            int item = arr[i];
            if(item >= 50){
                if((item % 2) == 0 ){
                    item = item / 2;
                }
            }
            else{
                if((item % 2) == 1 ){
                    item = item * 2;
                }
            }
            arr[i] = item;
        }
        answer = arr;
        
        return answer;
    }
}