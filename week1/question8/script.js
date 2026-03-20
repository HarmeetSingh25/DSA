// question 8
function calculateCI( p , r ,  t) {
    let amout = p*(1+r/100)**t
    console.log(amout);
    let ci =    amout-p
    console.log(ci);
    
}
cp(1000, 10 , 2 )