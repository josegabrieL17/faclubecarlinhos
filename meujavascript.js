const submitButton = document.getElementById('submit-button');
const passwordInput = document.getElementById('password');

submitButton.addEventListener('click', validatePassword);
passwordInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        validatePassword();
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

function validatePassword() {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === 'carlinhosgod') {
        window.location.href = 'home.html';
    } else {
        alert('VOCÊ NÃO É DIGNO DE ESTAR AQUI.');
    }
}

