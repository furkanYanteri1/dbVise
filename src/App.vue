<template>
  <div class="container">
    <!-- {{this.$store.getters.getUsersProperties}} -->
    <div class="db-selector">
      <tablo
      v-for="table in tables" :key="table.id" :table="table" />      
    </div>

    <div class="db-display">
      <div class="row" style="justify-content:center;">
        <div class="col-md-6 offset-">
          <div class="card" style="width:500px;">
            <div class="card-header">
              <h1>Tablo İçeriği (users)</h1> 
              <div class="card-body" style="overflow:auto;height:400px;">
                <ul class="list-group">
                  <li v-for="(user,index) in users" :key="index" class="list-group-item">
                    <span style="float:left">{{user.id}}</span>{{user.name}} - {{user.telephone}}
                  </li>
                </ul>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import tablo from './components/Tablo.vue'


export default {
  name: 'App',
  components: {
    tablo,
  },
  created(){
    this.$store.dispatch('tablolariCek')
    this.tables=this.$store.getters.getTableNames;
    this.table=null;
    this.users=this.$store.getters.getUsersTable;
    this.info=this.$store.getters.getInfoTable;
    this.userCount=this.$store.getters.getUsersCount;
    this.infoCount=this.$store.getters.getInfoCount;
    this.tableToShow=this.$store.getters.getTableToShow;

  },
  mounted(){
  },
  data(){
    return{
      // tables:this.$store.getters.getTableNames,
      // table:null,
      tables:[],table:null,
      users:[],info:[],
      userCount:0,infoCount:0,
      tableToShow:"",
      active:{
        showUsers:false
      }
    }
  },
  computed:{
  },


}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
body {
  background-color: #ffffff;
}
.container{
  display: flex;
  // background-color: red;
  .db-selector{
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: top;
  float: left;

  }
  .db-display{
    margin: 10px;
    flex: 2;
    // background-color: rgb(255, 215, 215);
    justify-content: center;
  }
}

</style>
