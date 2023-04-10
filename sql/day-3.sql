-- Tabla Usuario

create table usuario(
    id serial,
    email varchar unique,
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
    titulo varchar,
    prioridad_id int,
    usuario_id int, 
    completado boolean
)

