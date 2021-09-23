function even_odd_sum(num1){
    var num = num1.toString()
	var pro1 = 0;
    var pro2 = 0;
    for (let i = 0; i<num.length; i++)
        {
            if(num[i]%2 == 0){
                pro1+=Number.parseInt(num[i]);
            }
            else
                {
                    pro2 += Number.parseInt(num[i]);
                }
        }
    return [pro1,pro2];
    /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output array */

    //Return an array of evensum & oddsum like {evensum , oddsum};

}
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
input_stdin += data;
});

process.stdin.on('end', function () {
input_stdin_array = input_stdin.split("\n");
main();    
});

function readLine() {
return input_stdin_array[input_currentline++];
}


function main() {


var num =  parseInt(readLine());

let res = even_odd_sum(num);
console.log(res[0] , res[1]);

}
