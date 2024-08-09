document.getElementById('sendEmail').addEventListener('click', function() {
  var recipient = 'luquipeluqui10@gmail.com';
  var subject = encodeURIComponent('¡FELIZ CUMPLEAÑOS LUCA!');
  var body = encodeURIComponent('Que disfrutes de tu dia i que te lo pases muy bien. 🎉');
  var mailtoLink = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;
  
  window.location.href = mailtoLink;
});
document.addEventListener('DOMContentLoaded', function() {
    var cancion = document.getElementById("cancion");
    cancion.play().catch(function(error) {
      // Manejar errores si la reproducción automática falla
      console.error('La reproducción automática del audio falló:', error);
    });
  });