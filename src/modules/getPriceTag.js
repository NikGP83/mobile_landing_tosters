
export function setPriceTag({promoOldPrice, promoNewPrice}){
    const oldPrice = document.querySelector('.old-price');
    const newPrice = document.querySelector('.new-price');
    oldPrice.textContent = `R ${promoOldPrice}`;
    newPrice.textContent = `R ${promoNewPrice}`;
}