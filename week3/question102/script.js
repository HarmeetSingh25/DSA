    let a = "hello"
    let r = ""
    for (let i = a.length-1; i >= 0; i--) {
    r+=a[i]
        
    }
    if(a== r){
        console.log("palindrome");
    }else{
        console.log("not palindrome");
        
    }
