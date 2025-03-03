<template>
  <div>
      <h6>Crear usuario </h6>

      <q-input v-model="user.name"  type="text" label="Nombre del Usuario" />

      <q-input v-model="user.email"  type="number" label="Correo" />

      <q-input
        v-model="user.password"
        :type="isPasswordVisible ? 'text' : 'password'"
        label="Contraseña"
        outlined
      >
        <template v-slot:append>
          <q-btn
            flat
            dense
            round
            :icon="isPasswordVisible ? 'visibility_off' : 'visibility'"
            @click="isPasswordVisible = !isPasswordVisible"
        />
      </template>
    </q-input>


      <q-btn label="Guardar" color="primary" @click="createProduct" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Notify } from 'quasar'

const isPasswordVisible = ref(false);

const router = useRouter()

const user = ref({
  name: '',
  email: '',
  password: "" ,
  avatar: ''
});


const createUser = async () => {

  console.log(user.value);

  const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user.value)
  });

  const data = await response.json();
  console.log(data);
  Notify.create({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Usuario creado correctamente',
      position: 'top-right'
  })
  router.push({ name: 'usersTable' });
}


</script>
