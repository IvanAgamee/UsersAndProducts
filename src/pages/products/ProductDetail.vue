<template>
    <div>
        <h5>Esta es mi pagina de el detalle de un producto</h5>

       <!-- <div>{{ productDetail }}</div> -->

        <div class="col-6">
        <q-img v-if="productDetail?.images?.[0]"
          :src="productDetail?.images?.[0]"
          alt="Imagen de Producto"
          width="150px"
          height="150px">
        </q-img>
        <q-img v-if="productDetail.images?.[1]"
          :src="productDetail.images?.[1]"
          alt="Imagen de Producto"
          width="150px"
          height="150px">
        </q-img>
        <q-img v-if="productDetail?.images?.[2]"
          :src="productDetail?.images?.[2]"
          alt="Imagen de Producto"
          width="150px"
          height="150px">
        </q-img>

      </div>


      <div class="q-pa-md example-column-row-width">
      <div class="column" style="height: 150px">
        <div class="col">
          <label>Nombre: </label>{{ productDetail.title }}
        </div>
        <div class="col">
          <label>Precio: </label>{{ productDetail.price }}
        </div>
        <div class="col">
          <label>Descripcion: </label>{{ productDetail.description }}
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
