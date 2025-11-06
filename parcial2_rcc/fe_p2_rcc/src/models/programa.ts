export interface Programa {
  id: number
  idNivelAcademico: number
  nombre: string
  descripcion: string
  version: number
  duracion_meses: number
  costo: number
  fecha_inicio: Date
  estado: string
  fechaCreacion: Date
  fechaModificacion: Date
  fechaEliminacion: Date
}
