### INSTRUCCIONES PARA UTILIZAR LA API

## INMUEBLES

# OBTENER TODOS LOS INMUEBLES

 - Para poder obtener todos los inmuebles, se debe de utilizar el verbo "GET" junto con la URL: http://localhost:3000/api/inmuebles.

 # OBTENER UN INMUEBLE ESPECÍFICO

 - Para obtener un inmueble específico, se debe de utilizar el verbo "GET" junto con la URL: http://localhost:3000/api/inmuebles/INMUEBLEID. Siendo el "INMUEBLEID" el id del inmueble que se quiere recuperar en formato número.

 # CREAR UN NUEVO INMUEBLE

- Para crear un nuevo inmueble, se debe de utilizar el verbo "POST" junto con la URL: http://localhost:3000/api/inmuebles. junto con esto se le debe de pasar en el body la siguiente información en formato Json: piso: "String", letra: "String", extension: "Number", habitaciones: "Number", alquilado: "Boolean", propietario: "String", mail: "String".

# ACTUALIZAR UN INMUEBLE EXISTENTE

- Para actualizar un post, se debe de utilizar el verbo "PUT" junto con la URL: http://localhost:3000/api/inmuebles/INMUEBLEID. Siendo el "INMUEBLEID" el id del inmueble que se quiere modificar en formato número. Junto con esto, se le debe de pasar en el body, cualquiera de las siguientes claves valor que se quieran modificar en formato Json: piso: "String", letra: "String", extension: "Number", habitaciones: "Number", alquilado: "Boolean", propietario: "String", mail: "String".

# BORRAR UN INMUEBLE EXISTENTE

- Para eliminar un inmueble, se debe de utilizar el verbo "DELETE" junto con la URL: http://localhost:3000/api/inmuebles/INMUEBLEID. Siendo el "INMUEBLEID" el id del post que se quiere eliminar en formato número. 

### Con esto tenemos el sistema (CRUD)