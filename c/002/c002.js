var c002 = function(t=1) {
    var input = "";
    var output = "";
    while(t--) {
        let a = Math.floor(-100+Math.random()*200);
        let b = Math.floor(1+Math.random()*100);
        let c = Math.floor(1+Math.random()*100);
        input += a+" "+b+" "+c+"\n";
        let skill = a;
        for(var i = 0; i < b; i++) {
            let x = Math.floor(Math.random()*10);
            let y = Math.floor(1+Math.random()*20);
            skill += x*c+11-y;
            input += x+" "+y+"\n";
        }
        output += skill+"\n";
    }
    return {
        input: input,
        output: output
    };
}
