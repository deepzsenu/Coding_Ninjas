
function area(length , breadth){
        
   /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output variable */
  return length*breadth;
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
    
    const arr = readLine().replace(/\s+$/g, '').split(' ');
    
    var length = (Number)(arr[0]);
    var breadth = (Number)(arr[1]);

    var res = area(length , breadth)
    console.log(res);
}
