var c003 = function(t=10) {
    var input = "";
    var output = "";
    while(t--) {
        let a = [], b = [];
        while(a.length == 0)
            for(var i = 0; i < 13; i++) {
                if(Math.random() > Math.random())
                    continue;
                let ai = Math.random(), bi = Math.random();
                if(ai < 0.25)
                    a.push(String.fromCharCode(65+i)+String.fromCharCode(65+i));
                else if(ai < 0.75)
                    a.push(String.fromCharCode(65+i)+String.fromCharCode(97+i));
                else
                    a.push(String.fromCharCode(97+i)+String.fromCharCode(97+i));
                if(bi < 0.25)
                    b.push(String.fromCharCode(65+i)+String.fromCharCode(65+i));
                else if(bi < 0.75)
                    b.push(String.fromCharCode(65+i)+String.fromCharCode(97+i));
                else
                    b.push(String.fromCharCode(97+i)+String.fromCharCode(97+i));
            }
        a.sort((a, b) => {
            if(parseInt(a[0].toLowerCase(), 10) < parseInt(b[0].toLowerCase(), 10))
                return 1;
            else return 0;
        });
        b.sort((a, b) => {
            if(parseInt(a[0].toLowerCase(), 10) < parseInt(b[0].toLowerCase(), 10))
                return 1;
            else return 0;
        });
        for(var i = 0; i < a.length; i++)
            input += a[i];
        input += " ";
        for(var i = 0; i < b.length; i++)
            input += b[i];
        input += "\n";
    }
    
    return {
        input: input,
        output: output
    };
}
