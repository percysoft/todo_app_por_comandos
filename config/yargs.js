const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripcion de la tarea por hacer'
};

const completado =  {
      default: true,
      alias: 'c',
      desc: 'Marca como completa o pendiente la tarea'
    };

const argv  = require('yargs')
.command('crear','Crear un elemento por hacer', {
  descripcion
})
.command('actualizar', 'actualziar el estas completadod e una tarea', {
  descripcion,
  completado
})
.command('borrar', 'borra una tarea', {
  descripcion
})
.help()
.argv;

module.exports = {
  argv
}