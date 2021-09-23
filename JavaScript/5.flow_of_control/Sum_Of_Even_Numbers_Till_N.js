function sum(n){
        
      /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output variable */
   var sum = 0;
    for(let i =0; i<=n; i++){
        if(i%2==0)
        {
            sum += i;
        }
    }
    return sum;
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

var n = (Number)(arr[0]);

var res = sum(n) ; 
console.log(res);
}
}
