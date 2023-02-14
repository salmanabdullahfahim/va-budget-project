function getInputValue(id){
    const value = document.getElementById(id).value;
    return parseInt(value);
}

function getInputTextValue(id){
    const value = document.getElementById(id).innerText;
    return parseInt(value);
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}

function total(){
    const chocolate =  getInputTextValue('chocolate');
    const rose = getInputTextValue('rose');
    const diary = getInputTextValue('diary');

    const totalSum = chocolate+rose+diary;
    setInnerText('total',totalSum);
}



document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
    const quantity = getInputValue('kitkat-quantity')
    const kitkatCost = quantity * 200;
    setInnerText('chocolate',kitkatCost);
    total();
})

document.getElementById('rose-buy-btn').addEventListener('click',function(){
    const quantity = getInputValue('rose-quantity');
    const roseCost = quantity * 100;
    setInnerText('rose',roseCost);
    total();
})

document.getElementById('diary-buy-btn').addEventListener('click',function(){
    const quantity = getInputValue('diary-quantity');
    const dairyCost = quantity * 100;
    setInnerText('diary',dairyCost);
    total();
})


document.getElementById('promo-btn').addEventListener('click',function(){
    const promoCode = getInputValue('promo-code');
    if(promoCode == 101){
        const total = document.getElementById('total').innerText;
        const sum = total- parseInt(total)*0.1;
        setInnerText('all-total',sum)
    }
    else{
        alert('Wrong promo code. Try again with valid code.');
    }
})