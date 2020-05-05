<template>
  <div class="home">
    <div class="wrapper">

      <ShoppingCart></ShoppingCart>

      
      
      <div class="container">
          <AllProducts></AllProducts>
      </div>  
    </div>
  </div>
</template>

<script>
import ShoppingCart from '../shared/ShoppingCart'
import AllProducts from '../products/AllProducts'

export default {
  name: 'Home',
  data() {
    return {

    }
  },
  components: {AllProducts, ShoppingCart},
  computed: {
    product() {
        return this.$store.getters.currentProduct;
    },
    inCart() {
        return this.$store.getters.inCart;
    },
    numInCart() {
        return this.inCart.length;
    },
  },
  methods: {
    
    }, 
}
</script>

<style scoped>

</style>
