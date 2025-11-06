<script setup lang="ts">
import type { Programa } from '@/models/programa'
import http from '@/plugins/axios'
import { Button, Dialog, InputText, Textarea } from 'primevue'
import { computed, ref, version, watch } from 'vue'

const ENDPOINT = 'programas'
const props = defineProps({
  mostrar: Boolean,
  programa: {
    type: Object as () => Programa,
    default: () => ({}) as Programa,
  },
  modoEdicion: Boolean,
})
const emit = defineEmits(['guardar', 'close'])

const dialogVisible = computed({
  get: () => props.mostrar,
  set: (value) => {
    if (!value) emit('close')
  },
})

const programa = ref<Programa>({ ...props.programa })
watch(
  () => props.programa,
  (newVal) => {
    programa.value = { ...newVal }
  },
)

async function handleSave() {
  try {
    const body = {
      nombre: programa.value.nombre,
      descripcion: programa.value.descripcion,
      version: programa.value.version,
      duracion_meses: programa.value.duracion_meses,
      costo: programa.value.costo,
      fecha_inicio: programa.value.fecha_inicio,
      estado: programa.value.estado,
    }
    if (props.modoEdicion) {
      await http.patch(${ENDPOINT}/${programa.value.id}, body)
    } else {
      await http.post(ENDPOINT, body)
    }
    emit('guardar')
    programa.value = {} as Programa
    dialogVisible.value = false
  } catch (error: any) {
    alert(error?.response?.data?.message)
  }
}
</script>

<template>
  <div class="card flex justify-center">
    <Dialog
      v-model:visible="dialogVisible"
      :header="props.modoEdicion ? 'Editar' : 'Crear'"
      style="width: 25rem"
    >
      <div class="flex items-center gap-4 mb-4">
        <label for="descripcion" class="font-semibold w-3">Descripción</label>
        <InputText
          id="descripcion"
          v-model="programa.descripcion"
          class="flex-auto"
          autocomplete="off"
        />
      </div>

      <!-- Versión -->
      <div class="flex items-center gap-4 mb-4">
        <label for="version" class="font-semibold w-3">Versión</label>
        <InputText id="version" v-model="programa.version" class="flex-auto" autocomplete="off" />
      </div>

      <!-- Duración -->
      <div class="flex items-center gap-4 mb-4">
        <label for="duracion" class="font-semibold w-3">Duración (meses)</label>
        <InputText
          id="duracion"
          v-model="programa.duracion_meses"
          class="flex-auto"
          autocomplete="off"
        />
      </div>

      <!-- Costo -->
      <div class="flex items-center gap-4 mb-4">
        <label for="costo" class="font-semibold w-3">Costo</label>
        <InputText id="costo" v-model="programa.costo" class="flex-auto" autocomplete="off" />
      </div>

      <!-- Fecha inicio -->
      <div class="flex items-center gap-4 mb-4">
        <label for="fecha_inicio" class="font-semibold w-3">Fecha inicio</label>
        <InputText
          id="fecha_inicio"
          type="date"
          v-model="programa.fecha_inicio"
          class="flex-auto"
        />
      </div>

      <!-- Estado (dropdown) -->
      <div class="flex items-center gap-4 mb-4">
        <label for="estado" class="font-semibold w-3">Estado</label>
        <Dropdown
          id="estado"
          v-model="programa.estado"
          :options="estados"
          placeholder="Seleccione un estado"
          class="flex-auto"
        />
      </div>
      <div class="flex justify-end gap-2">
        <Button
          type="button"
          label="Cancelar"
          icon="pi pi-times"
          severity="secondary"
          @click="dialogVisible = false"
        ></Button>
        <Button type="button" label="Guardar" icon="pi pi-save" @click="handleSave"></Button>
      </div>
    </Dialog>
  </div>
</template>

<style scoped></style>
