(function(){
    $("#boton_envio").click(function() {
    var nombre = $(".nombre").val();
        validacion_nombre = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
            email = $(".email").val();
            validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            telefono = $(".telefono").val();
            validacion_tel = /[0-9]/;
            mensaje = $(".mensaje").val();

        if (nombre == "" || !validacion_nombre.test(nombre)) {
            $.alert({
                title: '<h4 style="color:red;"> Error </h4>',
                icon: 'fa fa-warning',
                type: 'red',
                content: 'colocar su nombre',
                buttons: {
                specialKey: {
                text: 'Close',
             },}
          
            });
            return false;
        }else if(email == "" || !validacion_email.test(email)){
           /* $(".email").focus();  */
            $.alert({
                title: '<h4 style="color:red;"> Error </h4>',
                icon: 'fa fa-warning',
                type: 'red',
                content: 'colocar su E-mail correctamente',
                buttons: {
                specialKey: {
                text: 'Close',
             },}
          
            });  
            return false;
        }else if(mensaje == ""){
           /* $(".mensaje").focus();*/
            $.alert({
                title: '<h4 style="color:red;"> Error </h4>',
                icon: 'fa fa-warning',
                type: 'red',
                content: 'Escribir un mensaje en la caja de Texto',
                buttons: {
                specialKey: {
                text: 'Close',
             },}
          
            });
            return false;
        }else{
            var datos = 'nombre='+ nombre + 'email=' + email + 'mensaje=' + mensaje;
            $.ajax({
                type: "POST",
                url: "../php/proceso.php",
                data: datos,
                success: function() {
                    $('input').val("");//todos los inputs quedarán vacíos ;)
                    $('textarea').val("");
                    $.confirm({
                        icon: 'fa fa-smile-o',
                        theme: 'modern',
                        closeIcon: true,
                        animation: 'scale',
                        type: 'blue',
                        title: 'Gracias',
                        content: 'Nos pondremos en contacto',
                        buttons: {
                        specialKey: {
                        text: 'Salir',
                     },}
                    });
                },
                error: function() {
                    $('input').val("");//todos los inputs quedarán vacíos ;)
                    $('textarea').val("");
                    $.alert({
                        title: '<h4 style="color:red;"> Error </h4>',
                        icon: 'fa fa-warning',
                        type: 'red',
                        content: 'Al enviar Datos',
                        buttons: {
                        specialKey: {
                        text: 'Close',
                     },}
                  
                    });              
                }
            });
            return false;
        }
 
    });
})();