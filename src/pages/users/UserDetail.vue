<template>

    <div class="q-pa-md text-left">
          <q-btn
            icon="fa-solid fa-left-long"
            color="secondary"
            label="Volver"
            @click="$router.push({ name: 'usersTable' })"
          />
    </div>

  <div>
      <h5>USUARIO</h5>

      <!-- <div>{{ userDetail }}</div> -->

      <div class="col-6">
        <q-img v-if="userDetail.avatar"
          :src="userDetail.avatar"
          alt="Imagen de Usuario"
          width="150px"
          height="150px">
        </q-img>
      </div>


      <div class="q-pa-md example-column-row-width">
      <div class="column" style="height: 150px">
        <div class="col">
          <label>Email: </label>{{ userDetail.email }}
        </div>
        <div class="col">
          <label>Contraseña: </label>{{ userDetail.password }}
        </div>
        <div class="col">
          <label>Nombre: </label>{{ userDetail.name }}
        </div>
        <div class="col">
          <label>Rol: </label> {{ userDetail.role }}
        </div>
      </div>
</div>


  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Sirve para obtener los parametros de una ruta
const route = useRoute()
// Sirve para navegar entre rutas
const router = useRouter()

const userDetail = ref([]);


const callApiOneUserDetail = async (id) => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
  const data = await response.json()

  userDetail.value = data
}

onMounted(() => {
  callApiOneUserDetail(route.params.id)
});

</script>
