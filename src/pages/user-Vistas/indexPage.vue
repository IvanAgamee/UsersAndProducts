<template>
  <div>
      <h5>Usuarios</h5>

      <div class="q-pa-md text-right">
          <q-btn
              icon="add"
              color="secondary"
              label="Nuevo Producto"
          />
      </div>

      <q-table
          table-header-class="bg-primary text-white"
          :rows="users"
          :columns="columns"
          row-key="name"
          flat bordered
      />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const users = ref([]);

const columns = [

{ name: 'id', label: 'Id', field: 'id' },
{ name: 'email', label: 'Correo', field: 'email' },
{ name: 'password', label: 'Contraseña', field: 'password' },
{ name: 'name', label: 'Nombre', field: 'name' }

]

const callApiProducts = async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/users')
  const data = await response.json()

  console.log(data)

  users.value = data
}

onMounted(() => {
  callApiProducts()
});

</script>
