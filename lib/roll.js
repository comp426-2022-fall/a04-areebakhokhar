export function roll(sides, dice, rolls){
    var results = []
    for(let i = 0; i < rolls; i++){
        let temp = 0;
        for(let j = 0; j < dice; j++){
            temp += Math.floor(Math.random() * sides) + 1;
        }
        results.push(temp);
    }
    const output = {
        "sides": sides,
        "dice": dice,
        "rolls": rolls,
        "results": results};

    return output;
}