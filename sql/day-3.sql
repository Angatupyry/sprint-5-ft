-- Tabla Usuario

create table usuario(
    id serial,
    email varchar,
    activo boolean
)

-- Tabla Prioridad
create table prioridad(
    id serial,
    nombre,
    descripcion
)

-- Tabla Tarea

create table tarea(
    id serial,
    titulo,
    prioridad_id,
    autior_id 
)

