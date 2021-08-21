//Flag
let memoryClicked16 = 0;
let memoryClicked8 = 0;
let storage256 = 1;
let storage512 = 0;
let storage1tb = 0;
let deliveryClickedFree = 1;
let deliveryClickedPaid = 0;
let promoClickCheck= 0;

// Current Total price
function currentTotalPrice(){
    const totalPrice = document.getElementById('total-price');
    promoClickCheck = 0;
    return parseInt(totalPrice.innerText);
    
}


// Memory 
function extraMemoryCalculation(a){
    const extraMemory = document.getElementById('extra-memory');
    const extraMemoryValue = extraMemory.innerText;
    if(a == '8gb-memory'){
        extraMemory.innerText = 0;
        return parseInt(extraMemory.innerText);
         
    }
    else if(a == '16gb-memory' ){
        extraMemory.innerText = 180;
        return parseInt(extraMemory.innerText);
    }
}

document.getElementById('8gb-memory').addEventListener('click',function(){
    const extraMemory = document.getElementById('extra-memory');
    const extraMemoryAmount = extraMemoryCalculation('8gb-memory');
    const totalPriceCurrent = document.getElementById('total-price');
    const allTotalValue = document.getElementById('allTotalValue');
   

    if(memoryClicked8 == 1 ){
        const totalPrice = currentTotalPrice();
        const updateTotalPrice = totalPrice - 180;
        totalPriceCurrent.innerText = updateTotalPrice;
        allTotalValue.innerText = updateTotalPrice;
        memoryClicked8 = 0;
        memoryClicked16 = 0;
        
        
    }

});
document.getElementById('16gb-memory').addEventListener('click',function(){

    
    const extraMemory = document.getElementById('extra-memory');
    const extraMemoryAmount = extraMemoryCalculation('16gb-memory');
    const totalPriceCurrent = document.getElementById('total-price');
    const allTotalValue = document.getElementById('allTotalValue');

    if(memoryClicked16 == 0 ){
        const totalPrice = currentTotalPrice();
        const updateTotalPrice = extraMemoryAmount + totalPrice;
        totalPriceCurrent.innerText = updateTotalPrice;
        allTotalValue.innerText = updateTotalPrice;
        memoryClicked16 = 1;
        memoryClicked8 = 1;
        
    }
 
});


// Storage 

function extraStorageCalculation(a){
    const extraStorage = document.getElementById('extra-storage');
    const extraStorageValue = extraStorage.innerText;
    if(a == '256gb-storage'){
        extraStorage.innerText = 0;
        return parseInt(extraStorage.innerText);
         
    }
    else if(a == '512gb-storage'){
        extraStorage.innerText = 100;
        return parseInt(extraStorage.innerText);
         
    }
    else if(a == '1tb-storage'){
        extraStorage.innerText = 180;
        return parseInt(extraStorage.innerText);
         
    }
    
}

document.getElementById('256gb-storage').addEventListener('click',function(){

    
    const extraStorage = document.getElementById('extra-storage');
    const extraStorageAmount = extraStorageCalculation('256gb-storage'); 
    const totalPriceCurrent = document.getElementById('total-price');
    const allTotalValue = document.getElementById('allTotalValue');

    if(storage512 == 1 ){
        const totalPrice = currentTotalPrice();
        const updateTotalPrice = totalPrice - 100;
        totalPriceCurrent.innerText = updateTotalPrice;
        allTotalValue.innerText = updateTotalPrice;
        
        storage256 = 1;
        storage512 = 0;
        storage1tb = 0;

        
    }
    else if(storage1tb == 1 ){
        const totalPrice = currentTotalPrice();
        const updateTotalPrice = totalPrice - 180 ;
        totalPriceCurrent.innerText = updateTotalPrice;
        allTotalValue.innerText = updateTotalPrice;
        
        storage256 = 1;
        storage512 = 0;
        storage1tb = 0;  
        
    }
 

});
document.getElementById('512gb-storage').addEventListener('click',function(){

    
    const extraStorage = document.getElementById('extra-storage');
    const extraStorageAmount = extraStorageCalculation('512gb-storage'); //100
    const totalPriceCurrent = document.getElementById('total-price');
    const allTotalValue = document.getElementById('allTotalValue');

    if(storage1tb == 1 ){
        const totalPrice = currentTotalPrice();
        const updateTotalPrice = totalPrice - 80;
        totalPriceCurrent.innerText = updateTotalPrice;
        allTotalValue.innerText = updateTotalPrice;
        
        storage256 = 0;
        storage512 = 1;
        storage1tb = 0;

        
    }
    else if(storage256 == 1 ){
        const totalPrice = currentTotalPrice();
        const updateTotalPrice = totalPrice + 100 ;
        totalPriceCurrent.innerText = updateTotalPrice;
        allTotalValue.innerText = updateTotalPrice;
        
        storage256 = 0;
        storage512 = 1;
        storage1tb = 0;

        
        
    }
 

});

document.getElementById('1tb-storage').addEventListener('click',function(){

    
    const extraStorage = document.getElementById('extra-storage');
    const extraStorageAmount = extraStorageCalculation('1tb-storage'); 
    const totalPriceCurrent = document.getElementById('total-price');
    const allTotalValue = document.getElementById('allTotalValue');

    if(storage512 == 1 ){
        const totalPrice = currentTotalPrice();
        const updateTotalPrice = totalPrice + 80;
        totalPriceCurrent.innerText = updateTotalPrice;
        allTotalValue.innerText = updateTotalPrice;
        
        storage256 = 0;
        storage512 = 0;
        storage1tb = 1;


        
    }
    else if(storage256 == 1 ){
        const totalPrice = currentTotalPrice();
        const updateTotalPrice = totalPrice + 180 ;
        totalPriceCurrent.innerText = updateTotalPrice;
        allTotalValue.innerText = updateTotalPrice;
        
        storage256 = 0;
        storage512 = 0;
        storage1tb = 1;

        
        
    }
 

});



// Delivery Charge

function deliveryCalculation(a){
    const extraDelivery = document.getElementById('delivery-charge');
    const extraDeliveryValue = extraDelivery.innerText;
    if(a == 'delivery-free'){
        extraDelivery.innerText = 0;
        return parseInt(extraDelivery.innerText);
         
    }
    else if(a == 'delivery-paid' ){
        extraDelivery.innerText = 20;
        return parseInt(extraDelivery.innerText);
    }
}

document.getElementById('delivery-free').addEventListener('click',function(){
    const extraDelivery = document.getElementById('delivery-charge');
    const extraDeliveryAmount = deliveryCalculation('delivery-free');
    const totalPriceCurrent = document.getElementById('total-price');
    const allTotalValue = document.getElementById('allTotalValue');
    
   

    if(deliveryClickedPaid == 1 ){
        const totalPrice = currentTotalPrice();
        const updateTotalPrice = totalPrice - 20;
        totalPriceCurrent.innerText = updateTotalPrice;
        allTotalValue.innerText = updateTotalPrice;
        deliveryClickedFree = 1;
        deliveryClickedPaid = 0;
        
    }

});

document.getElementById('delivery-paid').addEventListener('click',function(){
    const extraDelivery = document.getElementById('delivery-charge');
    const extraMemoryAmount = deliveryCalculation('delivery-paid');
    const totalPriceCurrent = document.getElementById('total-price');
    const allTotalValue = document.getElementById('allTotalValue');
   

    if(deliveryClickedFree == 1 ){
        const totalPrice = currentTotalPrice();
        const updateTotalPrice = totalPrice + 20;
        totalPriceCurrent.innerText = updateTotalPrice;
        allTotalValue.innerText = updateTotalPrice;
        deliveryClickedFree = 0;
        deliveryClickedPaid = 1;
    
    }

});



// promo Code 
document.getElementById('promo-button').addEventListener('click',function(){
    const promoInput = document.getElementById('promo-input');
    const allTotalValue = document.getElementById('allTotalValue');
    const allTotalValueAmount  = parseInt(allTotalValue.innerText);
    const promoValue = promoInput.value;

    if(promoValue == 'stevekaku' && promoClickCheck == 0 ){
        let promovalue = (allTotalValueAmount * 0.80) ;
        allTotalValue.innerText = promovalue;
        console.log(allTotalValueAmount + " "+ promovalue);
        promoClickCheck = 1;

    }else{
        if(promoClickCheck == 1){
            alert('You cannt use promo twich!! ');
        }else{
            alert('Please input a Valid Promo Code!!');
        }
        
        promoInput.value = '';
    }
    
    

});