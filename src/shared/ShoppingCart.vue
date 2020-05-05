<template>
   
        <router-link :to="'/cart'"><div class="cart-items">
            <div id="cart">
                <span class="btn-label"><i class="glyphicon glyphicon-shopping-cart"></i></span>
            </div>
            <div id="count">
                {{cartCount}}
            </div>
        </div></router-link>
</template>

<script>
export default {
    name: 'ShoppingCart',
    computed: {
        cartCount() {
            return this.$store.state.cartCount;
        },
    }
}
</script>

<style lang="scss" scoped>

.cart-items{
   
    overflow: hidden;
}
#cart{
    float: right;
    margin-left: -50%;
    margin-top: 0.7em;
    margin-right: 0.7em;
    font-size: 26px;
  
}
#count{
    position: relative;
    float: right;
    margin-left: -50%;
    margin-top: 0.4em;
    margin-right: 0.5em;
    background: red;
    border-radius: 50%;
    width: 20px;
    height: 24px;
    color: white;
}

</style>