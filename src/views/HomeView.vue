<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h1>Datos</h1>
        <form-component :hability="this.habilities"></form-component>
      </div>
      <div class="col-md-8">
        <h1>Lista de Desarrolladores</h1>
        <table-component></table-component>
      </div>
    </div>
  </div>
</template>
<script>
import FormComponent from '../components/FormComponent.vue'
import TableComponent from '../components/TableComponent.vue'
import {getHability} from '../services/habilities'

export default{
  data(){
    return {
      habilities: []
    }
  },
  components:{
    FormComponent,
    TableComponent
  },
  mounted(){
    this.getHabilities()
  },
  methods:{
    async getHabilities(){
      let response = await getHability();
      this.habilities = response.data
      console.log(response)
    }
  }
}
</script>