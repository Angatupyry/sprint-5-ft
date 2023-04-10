insert into prioridad (nombre, descripcion)
values ('Alta', 'Necesidad de ser cumplida de forma inmediata');

insert into prioridad (nombre, descripcion)
values ('Media', 'La tarea puede ser aplazada');

insert into prioridad (nombre, descripcion)
values ('Baja', 'La tarea no es urgente');

insert into prioridad (email, activo)
values ('unemail@gmail.com', true);

insert into usuario (nombre, descripcion)
values ('otroemail@gmail.com', false);


insert into tarea (titulo, prioridad_id, usuario_id)
values ('Una tarea', 1, 1);

select * from tarea;

select * from tarea where usuario_id = 1;



