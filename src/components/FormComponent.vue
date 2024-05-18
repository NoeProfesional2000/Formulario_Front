<template>
    <div class="">
        <div clas="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="form-group">
                        <input class="form-control" placeholder="Nombre">
                    </div>
                    <div class="form-group">
                        <input class="form-control" placeholder="Edad">
                    </div>
                    <div class="form-group">
                        <select class="form-control" >
                            <option selected>Habilidades</option>
                            <option v-for="item in this.habilities" :key="item.id" :value="item.id">
                            </option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="col-md-12 btn-save">
                        <button class="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        hability:{
            type: Array,
            default: []
        }
    },
    computed:{
        habilities(){
            return this.hability
        }
    }
}
</script>
<style scoped>
.btn-save{
    width:100%;
}
</style>