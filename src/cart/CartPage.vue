<template>

    <div class="container">
        <div class="back-button">
            <router-link to="/"><a href="#" class="btn btn-default"><span class="glyphicon glyphicon-arrow-left"></span> Startsida</a></router-link>
        </div>
        
        <div v-if="itemsInCart > 0"> 
            
            <div v-for="item in newCart" :key="item.id" id="cart-wrapper" class="columns is-mobile is-centered">
                <div class="column is-two-third-fullhd">
                    <div class="columns is-mobile">
                        <router-link :to="'/products/' + item.id"><div class="column is-narrow-desktop">
                            <div class="box" style="width: 200px;">
                            <img :src="item.image" class="single-image">
                            </div>
                        </div></router-link> 
                        <div class="column">
                            <div id="box-items" class="">
                                <div id="product-title" class="field">{{item.title}}</div>
                                <div id="product-cost" class="field">{{item.cost * item.quantity}} kr</div>
                                    <div id="add-remove" class="column">
                                        <button class="button is-danger" @click="removeQuantityFromCart(item)">
                                            <span class="btn-label"><i class="glyphicon glyphicon-minus"></i></span>
                                        </button>
                                        <button id="quantity-box" class="button is-primary">{{item.quantity}}</button> <!-- riktig fullösning -->
                                        <button class="button is-success" @click="addToCartNew(item)">
                                            <span class="btn-label"><i class="glyphicon glyphicon-plus"></i></span>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div id="total-cost" class="field">
                Totalt: {{totalPrice}} kr och {{cartCount}} produkter
            </div>
            <div class="field">
                <button @click.prevent="removeAllFromCart()">Ta bort allt i varukorgen</button>
            </div>
        </div>
        <div v-else>
            <div class="navbar-item" href="">
                Varukorgen är tom!
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: 'CartPage',
    data() {
        return {
            quantity: 5,
        }
    },
    computed: {
        newCart() {
            return this.$store.getters.cart;
        },
        itemsInCart() {
            return this.newCart.length;
        },
        totalPrice() {
            let total = 0;

            for(let item of this.$store.state.cart) {
                total += item.totalPrice;
            }

            return total.toFixed(0);
        },
        cartCount() {
            return this.$store.getters.cartCount;
        }
    },
    methods: {
        removeFromCart(product) {
            this.$store.commit('removeFromCart', product);
        },
        removeAllFromCart() {
            this.$store.commit('removeAllFromCart');
        },
        addToCartNew(product) {
            this.$store.commit('addToCartNew', product);
        },
        removeQuantityFromCart(product) {
            if(product.quantity > 1) {

                this.$store.commit('removeQuantity', product);
            } else {
                this.removeFromCart(product);
            }
        },
    }
}
</script>

<style scoped>

#cart-wrapper{
    border-bottom: 1px solid grey;
}
.single-image{
    height: 125px;
}
#box-items{
    padding-top: 15px;
}
#product-title{
    text-align: left;
    font-size: 20px;
}
#product-type{
    text-align: left;
}
#product-cost{
    text-align: right;
}
#remove-product{
    cursor: pointer;
    width: 60px;
}
#total-cost{
    text-align: right;
    font-size: 30px;
}
#add-remove{
    text-align: left;
}
#quantity-box{
    background-color: white;
    color: black;
    text-decoration: none;
}
.back-button{
    font-size: 24px;
    margin: 20px 0px;
}
</style>