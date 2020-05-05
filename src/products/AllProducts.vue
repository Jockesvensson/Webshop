<template>
    
    <div id="app" class="container my-5">
        <div class="row mb-3">
            
                <div class="container">
                    <button class="btn-show btn-show1" @click="showAll()">ALL</button>
                    <button class="btn-show btn-show1" @click="showHeads()">HEADS</button>
                    <button class="btn-show btn-show1" @click="showTorsos()">TORSOS</button>
                    <button class="btn-show btn-show1" @click="showArms()">ARMS</button>
                    <button class="btn-show btn-show1" @click="showBases()">BASES</button>
                </div>
            
            <div class="row">
                <Item
                    v-for="(item, index) in filteredData"
                    :key="index"
                    :id="item.id"
                    :title="item.title"
                    :image="item.image"
                    :type="item.type"
                    :cost="item.cost" />
            </div>
        </div>
    </div>

</template>

<script>
import Item from './Item.vue';
export default {
    name: 'allProducts',
    data() {
        return {
            currentFilterProperty: '',
            currentFilterValue: '',
            products: this.$store.getters.currentProduct,
        }
    },
    components: {Item},
    computed: {
        product() {
            return this.$store.getters.currentProduct;
        },
        filteredData() {
            var self = this;
            if(this.currentFilterValue != undefined && this.currentFilterValue != '') {
                return this.products.filter(function(d) {
                    return d.type.indexOf(self.currentFilterValue) != -1;
                });
            } else {
                return this.products;
            }
        }
    },
    methods: {
        showAll() {
            this.currentFilterValue = ''
        },
        showHeads() {
            this.currentFilterValue = 'Heads'
        },
        showTorsos() {
            this.currentFilterValue = 'Torsos'
        },
        showArms() {
            this.currentFilterValue = 'Arms'
        },
        showBases() {
            this.currentFilterValue = 'Bases'
        },
    }
}
</script>

<style scoped>
.btn-show{
    position: relative;
    overflow: hidden;
    max-width: 264px;
    box-sizing: border-box;
    min-height: 48px;
    text-align: center;
    flex-shrink: 0;
    white-space: normal;
}
.btn-show1{
    border: 0;
    margin: 0;
    cursor: pointer;
    display: inline-flex;
    outline: none;
    align-items: center;
    user-select: none;
    border-radius: 0;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
}
.btn-show.btn-show1:hover {
    color: lightblue;
}

</style>