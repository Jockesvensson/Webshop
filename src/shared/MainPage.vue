<template>
    <router-link to="/"><div class="back-button">
            <a href="#" class="btn btn-default"><span class="glyphicon glyphicon-arrow-left"></span> Tillbaka</a>
        </div></router-link>
</template>

<script>
export default {
    name: 'MainPage',
    computed: {
        
    }
}
</script>

<style scoped>
.back-button{
  position: absolute;
  top: 40px;
  left: 23%;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
}
</style>