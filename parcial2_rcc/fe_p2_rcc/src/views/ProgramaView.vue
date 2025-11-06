<script setup lang="ts">
import ProgramaList from '@/components/programas/ProgramaList.vue'
import ProgramaSave from '@/components/programas/ProgramaSave.vue'
import { Button } from 'primevue'
import { ref } from 'vue'

const mostrarDialog = ref(false)
const programaListRef = ref<typeof ProgramaList | null>(null)
const programaEdit = ref<any>(null)

function handleCreate() {
  programaEdit.value = null
  mostrarDialog.value = true
}

function handleEdit(programa: any) {
  programaEdit.value = programa
  mostrarDialog.value = true
}

function handleCloseDialog() {
  mostrarDialog.value = false
}

function handleGuardar() {
  cancionListRef.value?.obtenerLista()
}
</script>

<template>
  <div class="mx-2 mt-6 md:m-7">
    <h2>Canciones</h2>
    <Button label="Crear Nuevo" icon="pi pi-plus" @click="handleCreate" />
    <CancionList ref="cancionListRef" @edit="handleEdit" />
    <CancionSave
      :mostrar="mostrarDialog"
      :cancion="cancionEdit"
      :modoEdicion="!!cancionEdit"
      @guardar="handleGuardar"
      @close="handleCloseDialog"
    />
  </div>
</template>

<style scoped></style>
