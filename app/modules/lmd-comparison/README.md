# Raison d'être
Lo que vamos a realizar en este módulo es la adaptación de la lógica aplicada en CurricularDataProvider de fe-libro-matriz para determinar dónde es necesario realizar el refactor de uso de SWR para que funcione y se implemente de forma correcta.

# Funcionalidad esperada
- Los datos de la caja curricular deben obtenerse en función del estado `selectedLevel` y de que ya se haya hecho fetch de `levelsData`.
- Los datos de la caja curricular deben refrescarse si se realiza una actualización de éstos.
- El `GET` de los datos de NIVEL se hace con la URL y el ID del estudiante.