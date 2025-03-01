<template>
    <div>
        <h6>Crear producto </h6>

        <q-input v-model="product.title"  type="text" label="Nombre del producto" />

        <q-input v-model="product.price"  type="number" label="Precio" />

        <q-input v-model="product.description" type="textarea" label="Descripción" />

        <q-input v-model="product.categoryId" type="number" label="Categoria" />

        <q-btn label="Guardar" color="primary" @click="createProduct" />
      
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Notify } from 'quasar'

const router = useRouter()

const product = ref({
    title: '',
    price: 0,
    description: '',
    categoryId: '',
    images: [
        "https://plus.unsplash.com/premium_photo-1663133632945-4a9e77571659?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]
});

const createProduct = async () => {

    console.log(product.value);

    const response = await fetch('https://api.escuelajs.co/api/v1/products/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product.value)
    });

    const data = await response.json();
    console.log(data); 
    Notify.create({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Producto creado correctamente',
        position: 'top-right'
    }) 
    router.push({ name: 'productsTable' });
}


</script>
