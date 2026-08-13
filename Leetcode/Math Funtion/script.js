function cp(p, r, t) {
    let cp = p*(Math.pow((1+(r/100)),t))-p.toFixed(2)
    console.log(cp);
    
}
cp(10000 , 5, 3 )