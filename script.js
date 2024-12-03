function rollDice(){
    
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const total = document.getElementById("total");
    const values = [];
    const images = [];
    const gifs = [];
    const temp =[];
    var sum= 0;

    for(let i=0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;

        values.push(value);
        gifs.push(`<img src="img/g1.gif" alt="Dice${value}">`);
        temp.push(value);
        sum+=value;
    }
    diceImages.innerHTML = gifs.join('');

    setTimeout(() => {
        for(let i=0; i < numOfDice; i++){
    images.push(`<img src="img/${temp[i]}.png" alt="Dice ${temp[i]}">`);

    }
    diceImages.innerHTML = images.join('');
    diceResult.textContent = `Dice: ${values.join(',')}`;
    total.textContent=sum;
    total.style.display="inline-block"
    }, 764);

       
}