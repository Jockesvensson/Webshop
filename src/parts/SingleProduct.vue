<template>
    <div>
        <ShoppingCart></ShoppingCart>
            <div id="products" class="container">
                <MainPage></MainPage>
                <div class="columns is-mobile">
                    <div class="column is-mobile">
                        <img :src="product.image" class="single-image">
                    </div>
                    <div class="column is-mobile">
                        <div id="product-title" class="field">{{product.title}}</div>
                        <div id="product-type" class="field">{{product.type}}</div>
                        <div id="product-cost" class="field">{{product.cost}} kr</div>
                        <div id="product-description" class="field">{{product.description}}</div>
                    </div>
                </div>
                <div class="columns is-mobile">
                    <div class="column">
                        <button class="button is-success" @click.prevent="addToCartNew(product)" @click="addedToCart">Lägg i varukorg</button>
                    </div>
                </div>
                <div id="#addedToCart" class="field">
                    <transition name="fade" mode="out-in">
                        <div v-if="addedToCartClicked" class="alert" role="alert">
                            Produkt tillagd!
                        </div>
                    </transition>
                </div>
            </div>
    </div>
</template>

<script>
import ShoppingCart from '../shared/ShoppingCart'
import MainPage from '../shared/MainPage'
// import {_} from 'vue-underscore';
export default {
    name: 'SingleProduct',
    //
    components: {ShoppingCart, MainPage},
    data() {
        return {
            id: this.$route.params.id,
            count: 1,
            addedToCartClicked: false,
        }
    },
    computed: {
        product() {
            return this.$store.state.products[this.id - 1];
        },
    },
    methods: {
        
        addToCartNew(product) {
            this.$store.commit('addToCartNew', product);
            this.show = true;
        },
        removeQuantityFromCart(product) {
            this.$store.commit('removeQuantity', product);
        },
        addedToCart() {
            this.addedToCartClicked = true,
            setTimeout(() => {
                this.addedToCartClicked = false
            }, 3000)
        }
          
    }
}
</script>

<style scoped>
@media only screen and (min-width: 770px) {
    #products{
    width: 800px;
    }
}
.single-image{
    height: 250px;
}
.columns{
    margin-top: 100px;
}

#product-title{
    font-size: 35px;
    text-align: left;
    margin-bottom: -5px;
}
#product-type{
    font-size: 25px;
    text-align: left;
    margin-bottom: 2px;
}
#product-cost{
    font-size: 20px;
    text-align: left;
}
#product-description{
    font-size: 15px;
    text-align: left;
}
.alert{
    position: relative;
    display: inline-block;
    background-color: lightgreen;
    padding: 15px;
    width: 150px;
    top: -150px;
}
.fade-enter-active,
.fade-leave-acive {
    transition: opacity 1.3s ease;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>