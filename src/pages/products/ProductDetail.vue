<template>
    <div>
        <h5>Esta es mi pagina de el detalle de un producto</h5>

        <div>{{ productDetail }}</div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Sirve para obtener los parametros de una ruta
const route = useRoute()
// Sirve para navegar entre rutas
const router = useRouter()

const productDetail = ref([]);


const callApiOneProductDetail = async (id) => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    const data = await response.json()

    productDetail.value = data
}

onMounted(() => {
    callApiOneProductDetail(route.params.id)
});

</script>
