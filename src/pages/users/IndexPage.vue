<template>

  <div>
      <h5>Usuarios</h5>

      <div class="q-pa-md text-right">
          <q-btn
              icon="add"
              color="secondary"
              label="Nuevo usuario"
              @click="router.push({ name: 'addUser' })"
          />
      </div>

      <q-table
          table-header-class="bg-primary text-white"
          :rows="users"
          :columns="columns"
          row-key="name"
          flat bordered
      >
        <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                    <q-btn color="primary" icon="fa-solid fa-eye" dense class="q-pa-sm" @click="router.push({ path: `/user/${props.row.id}` })" />
                </q-td>
          </template>
      </q-table>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const users = ref([]);

const columns = [

{ name: 'actions', label: 'Acciones', field: 'actions' },
{ name: 'id', label: 'Id', field: 'id' },
{ name: 'email', label: 'Correo', field: 'email' },
{ name: 'password', label: 'Contraseña', field: 'password' },
{ name: 'name', label: 'Nombre', field: 'name' }

]

const callApiUsers = async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/users')
  const data = await response.json()

  console.log(data)

  users.value = data
}

onMounted(() => {
  callApiUsers()
});

</script>
