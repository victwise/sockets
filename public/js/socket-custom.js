var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// 'on' - escuchar información
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// 'emit' - Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Victor Miranda',
    mensaje: 'Hi!'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// EScuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});