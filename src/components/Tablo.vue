<template>
  <div class="kart">

    <h1>{{tableName}}</h1>
    <!-- <VueSlideBar v-model="value"/> -->
    <!-- <h3>{{urun.name}}</h3> -->

    <div class="button-container">
      <button class="view-product-button" @click="updateWhichTableToShow">
        Tabloya Git
      </button>
      <div>
        <input type="range" class="mySlider" min="0" max=100 step="1" v-model="value">
        <span >{{value}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["table"],
  data(){
    return{
      value:0
    }
  },
  components:{
  },
  methods:{
    updateWhichTableToShow(){
      this.$store.commit("SET_TABLE_TO_SHOW",this.tableName);
      console.log("-->"+this.tableName)
    }

  },
  computed: {
    tableName() {
      return this.table.name;
    },
    countOfColumn(){
      return this.$store.getters.getUserCount();
    }
  },
};

</script>
<style lang="scss">
.kart {
  width: 80%;
  margin: 10%;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 20px gray;

}
button.view-product-button {
  padding: 10px;
  // background-color: #cec3ff;
  background-color: rgb(82, 100, 179);

  color: rgb(255, 255, 255);
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
  border-radius: 4px;

  &:hover {
    color: white;
    background-color: rgb(118, 143, 255);
  }
}

@media (min-width: 500px) {
  .kart {
    width: 350px;
    margin: 10px;
  }
}
</style>