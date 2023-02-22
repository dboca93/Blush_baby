const hamburger = document.querySelector(".hamburger"); 

const hidden = document.querySelector(".hidden-menu"); 


/* create for the two links that we want to be hidden 
when the click event happens. 
*/


const products = document.querySelector(".dropbtn"); 

const stores = document.querySelector(".shop"); 



hamburger.addEventListener('click', () => {
        hidden.style.display = 'block';
        products.style.display = 'none'; 
        stores.style.display = 'none'; 
}); 


hidden.addEventListener('click', () => {
        hidden.style.display = 'none'; 
        products.style.display = 'block'; 
        stores.style.display = 'block'; 
}); 