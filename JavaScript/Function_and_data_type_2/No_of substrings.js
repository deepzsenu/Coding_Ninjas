function substrings(str){
    var output1 = "";
    for(let i=0; i<str.length; i++)
        {
            for( let j = i; j<str.length; j++)
                {
                    output1 += str.slice(i, j+1)+"\n" ;
                }
        }
    return console.log(output1);

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
       let str = String(readLine());
       substrings(str);
   
   }
