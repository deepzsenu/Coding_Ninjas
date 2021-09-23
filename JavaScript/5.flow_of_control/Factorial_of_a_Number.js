function fact(n){
    var pro =1;
    if (n ==0)
        {
       pro = 1;
        }
    else if (n<0){
        pro = "Error";
    }
        
   else{
	    
    for (let i=1; i<=n; i++)
        {
                pro*=i;
                                
        }
   }
    return  pro;
    

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

let res = fact(num);
console.log(res);

}
