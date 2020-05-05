<template>
    <div class="col-md-3">
        <div @mouseover="hover = true" @mouseleave="hover = false" class="item-container">
            <router-link :to="'/products/' + id">
            <img v-show="!hover" :src="image" :alt="title" class="image-top">
            <img v-show="hover" :src="image" :alt="title" class="image-top-hover">
            <div v-show="!hover" class="text-container">
                <div id="item-title" class="field">{{ title }}</div>
                <div id="item-cost" class="field">{{ cost }} kr</div>
                <div id="item-type" class="field">{{ type }}</div>
            </div>
            <div v-show="hover" class="text-container-hover">
                <div id="item-title" class="field">{{ title }}</div>
                <div id="item-cost" class="field">{{ cost }} kr</div>
                <div id="item-type" class="field">{{ type }}</div>
            </div>
            <div class="row justify-content-center">
                <button v-show="hover" id="details-button" class="btn btn-primary">DETAILS</button>
            </div>
            </router-link>
        </div>    
    </div>
    
</template>

<script>
export default {
    name: 'item',
    props: ['id', 'title', 'image', 'cost', 'type'],
    data() {
        return {
            hover: false,
        }
    },
    computed: {
        product() {
            return this.$store.getters.currentProduct;
        },
    },
    methods: {

    },
}
</script>

<style scoped>

@media only screen and (min-width: 770px) {
    .item-container{
    margin: 20px 5px;
}
.image-top{
    background-color: lightslategrey;
    border-radius: 25px;
    background-position: left top;
    background-repeat: repeat;
    padding: 20px;
}
.image-top-hover{
    background-color: lightslategrey;
    border-radius: 25px;
    background-position: left top;
    background-repeat: repeat;
    padding: 20px;
    height: 200px;
}
.text-container{
    margin: 10px 0px;
}
.text-container-hover{
    margin: 10px 0px;
    bottom: 70px;
    padding: 0px 45px 0px 45px;
}
#item-title{
    margin: 0px;
    padding-left: 10px;
    text-align: left;
}
#item-cost{
    margin: -25px 0px 0px 0px;
    padding-right: 10px;
    text-align: right;
}
#item-type{
    margin: 0px;
    padding-left: 10px;
    text-align: left;
}
#details-button{
    margin-bottom: 10px;
    bottom: 20px;
    }
}

@media only screen and (max-width: 766px) {
    .item-container{
    margin: 20px 5px;
}
  .image-top{
    background-color: lightslategrey; 
    border-radius: 25px;
    background-position: left top;
    background-repeat: repeat;
    padding: 20px;
  }
  .image-top-hover{
    background-color: lightslategrey;
    height: 396px;
    border-radius: 25px;
    background-position: left top;
    background-repeat: repeat;
    padding: 20px;
}
  
  .text-container {
    padding: 0px 35px 0px 35px;
    margin: 10px 0px;
  }
  .text-container-hover{
    margin: 10px 0px;
    bottom: 70px;
    padding: 0px 45px 0px 45px;
}
  #item-title{
    margin: 0px;
    padding-left: 10px;
    text-align: left;
}
#item-cost{
    margin: -25px 0px 0px 0px;
    padding-right: 10px;
    text-align: right;
}
#item-type{
    margin: 0px;
    padding-left: 10px;
    text-align: left;
}
#details-button{
    margin-bottom: 10px;
    bottom: 20px;
}
}

</style>