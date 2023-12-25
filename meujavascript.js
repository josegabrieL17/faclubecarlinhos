document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');
    const passwordInput = document.getElementById('password');
    const passwordForm = document.getElementById('form-password');

    submitButton.addEventListener('click', validatePassword);
    passwordForm.addEventListener('submit', validatePassword);

    function validatePassword(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const enteredPassword = passwordInput.value;
        if (enteredPassword === 'carlinhosgod') {
            window.location.href = 'home.html';
        } else {
            alert('VOCÊ NÃO É DIGNO DE ESTAR AQUI.');
        }
    }
});
/* #####    ###       ###              #####    #####    ##  ##  ######            ######   ######    #####    #####    ##  ##  ######     ###               ###     #####    ##  ##   ####
### ###   ###      #####            ### ###  #######  ### ###   ######           ### ###  ### ###  ### ###  #######  ### ###  ### ###   #####             #####   #######  ### ###  ######
### ###   ###     ### ###           ### ###  ###  ##  ### ###   ##               ###  ##  ###  ##  ### ###  ### # #  ### ###  ###  ##  ### ###           ### ###  ###  ##  ### ###    ###
##   ##  ###      ### ###           ##   ##  ##   ##  ##  ###  ######            ### ###  ### ###  ##   ##  ##       ##  ###  ### ###  ### ###           ### ###  ##   ##  ##  ###    ###
##   ##  ###      ### ###           ##   ##  ##  ###  ###  ##  #####             ######   ######   ##   ##  ##       ###  ##  ######   ### ###           ### ###  ##  ###  ###  ##   ###
### ###  ### ###  #######           ### ###  #######  ### ###  ###               ###      ### ###  ### ###  ### # #  ### ###  ### ###  #######           #######  #######  ### ###   ###
#######  #######  ### ###           #######   #####   #######  #######            ###      ### ### #######  #######  #######   ### ### ### ###           ### ###   #####   #######  #####
 #####    #####    ##  ##            #####      ####   #####    #####             ###      ### ###  #####    #####    #####    ### ###  ##  ##            ##  ##     ####   #####    #####
*/

