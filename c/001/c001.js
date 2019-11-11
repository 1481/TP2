var c001 = function(t=1) {
    var input = "";
    var output = "";
    while(t--) {
        let b = Math.floor(1+Math.random()*24);
        let a = Math.floor(b+Math.random()*(25-b));
        let c = Math.floor(1+Math.random()*100);
        let d = Math.floor(c+Math.random()*(101-c));
        input += a+" "+b+" "+c+" "+d+"\n";
        let total = (a-b)*c+b*d;
        if(total>100)
            output += "Yes\n";
        else
            output += "No\n";
    }
    return {
        input: input,
        output: output
    };
}
