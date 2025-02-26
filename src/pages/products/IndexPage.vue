<template>
    <div>
        <h5>Productos</h5>

        <div class="q-pa-md text-right">
            <q-btn
                icon="add"
                color="secondary"
                label="Nuevo Producto"
            />
        </div>

        <q-table
            table-header-class="bg-primary text-white"
            :rows="products"
            :columns="columns"
            row-key="name"
            flat bordered
        /> 
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const products = ref([]);

const columns = [

  { name: 'id', label: 'Id', field: 'id' },
  { name: 'title', label: 'Nombre', field: 'title' },
  { name: 'price', label: 'Precio', field: 'price' },
  { name: 'description', label: 'Descripcion', field: 'description' }

]

const callApiProducts = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const data = await response.json()

    console.log(data)

    products.value = data
}

onMounted(() => {
    callApiProducts()
});

</script>
