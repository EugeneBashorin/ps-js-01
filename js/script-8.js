
console.log("*******CART********");
const cart = {
    items: [],

    getItems(){
        return this.items;
    },

    add(product){
        for(const item of this.items){
            console.log(product.name);
            if(product.name === item.name){
                item.quantity += 1;
                return;
            }
    }
    
    const newProduct = {
        ...product, 
        quantity: 1,
    };

    this.items.push(newProduct);
    },

    remove(productName){
        for(const item of this.items){
            if(item.name === productName){
                this.items.splice(this.items.indexOf(item),1);
            }
        }

    },

    clear(){
        this.items = [];
    },

    countTotalPrice(){
        let totalPrice = 0;
        if(this.items.length){
            for(const item of this.items){
                totalPrice += item.price;
            }
            return `Total Price ${totalPrice}`
        }else{
            return `Cart is empty`
        }
    },
    increaseQuantity(productName){},
    decreaseQuantity(productName){},
};

cart.add({name: 'apple', price: 50});
cart.add({name: 'limon', price: 60});
cart.add({name: 'lime', price: 70});
cart.add({name: 'lime', price: 70});
cart.add({name: 'lime', price: 70});
cart.add({name: 'peach', price: 80});
cart.add({name: 'plum', price: 90});
cart.add({name: 'cherry', price: 100});
console.table(cart.getItems());
// console.table(cart.remove('lime'));
// console.table(cart.getItems());
// console.table(cart.countTotalPrice());
// console.table(cart.clear());
// console.table(cart.countTotalPrice());
// cart.add({name: 'apple', price: 50});
// cart.add({name: 'limon', price: 60});
// cart.add({name: 'lime', price: 70});
// cart.add({name: 'peach', price: 80});
// cart.add({name: 'plum', price: 90});
// cart.add({name: 'plum', price: 90});
// cart.add({name: 'plum', price: 90});
// cart.add({name: 'cherry', price: 100});
// console.table(cart.getItems());