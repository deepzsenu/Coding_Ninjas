
function swap(a , b){
        
   /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output variable */
	a = a+b;
    b = a-b;
    a = a-b;
    return [a,b];
    //Return an array of reversed num1 & num2 like {num1 , num2};

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

 let t = parseInt(readLine());

while(t-->0){
const arr = readLine().replace(/\s+$/g, '').split(' ');

var num1 = (Number)(arr[0]);
var num2 = (Number)(arr[1]);

var res = swap(num1 , num2) ; 
console.log(res[0] , res[1]);
}
}
