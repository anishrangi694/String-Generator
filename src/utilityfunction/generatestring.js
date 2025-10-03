
function generateString(length){

    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result='';

    for(let i=0;i<length;i++){
        let randomIndex= Math.floor(Math.random()* str.length);
        
        result += str[randomIndex];
    }

    return result;

}

export default generateString;