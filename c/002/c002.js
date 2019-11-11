var c002 = function() {
    var input = "";
    var a = Math.floor(-100+Math.random()*200);
    var b = Math.floor(1+Math.random()*100);
    var c = Math.floor(1+Math.random()*100);
    input += a+" "+b+" "+c+"\n";
    var skill = a;
    for(var i = 0; i < b; i++) {
        let x = Math.floor(Math.random()*10);
        let y = Math.floor(1+Math.random()*20);
        skill += x*c+11-y;
        input += x+" "+y+"\n";
    }
    var output = "";
    output += skill+"\n";
    
    return {
        input: input,
        output: output
    };
}
