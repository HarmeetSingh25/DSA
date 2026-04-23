    let arr = [1, 1, 0, 1, 1, 1];
    let max = 0;
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        max = num;
        num = 0;
        continue;
    } else if (arr.length - 1 == i) {
        num++;
        max= num;
        break
    }
    num++;
    }
    console.log(max);
    
