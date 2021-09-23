function Fahrenheit_to_Celsius(start , end , step){
		
     for (let i = start; i<=end; i = i+step)
         {
             c = (i - 32)*5/9;
             console.log(i+" "+ Math.trunc(c));
         }

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


var start =  parseInt(readLine());
var end =  parseInt(readLine());
var step =  parseInt(readLine());

Fahrenheit_to_Celsius(start , end , step);

}
