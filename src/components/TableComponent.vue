<template>
    <table class="table">
        <thead>
            <tr>
                <th>No</th>
                <th>Nombre</th>
                <th>Habilidades</th>
                <th>Opciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Noe Tapia</td>
                <td>PHP</td>
                <td>
                    <div class="btn group">
                        <button class="btn btn-primary btn-editar">Editar</button>
                        <button class="btn btn-danger">Eliminar</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<style scoped>
thead{
    background-color: blue;
}

th{
    color: white;
    font-weight: 700;
}

.btn-editar{
    margin-right: 10px;
}
</style>