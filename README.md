*Importante*
(1) El objetivo de este proyecto es entregar una interfaz que pueda encritar y desencriptar mensajes.
(2) Este proyecto está codificado para que sea totalmete responsivo para dimensiones, que fueron solicitadas en el modelo de Figma. De 1440px x 1024px como página principal o de desktop, 768px x 1174px (tablet) y 375px x 933px(celular)

El proyecto cuenta con las siguientes funcionalidades:
- Se realiza una validación del mensaje que se desea encriptar o desencritar, a través de javascript. Esta validación evalua si la palabra o mensaje que se ingresa contiene algún caracter especial y si las letras están en minúsculas.
- Si la validación falla, se le envía un mensaje por pantalla al usuario recordando las intrucciones del encriptador.(Solo minúsuculas y sin tildes).
- Si el mensaje es validado, entonces se procede a encriptar o desencritar el mensaje según las claves que el desafio estipuló. Además, ciertas elementos en el html desapareceran de la vista del usuario. Como por ejemplo: La imagen del muñeco y los textos que indican que "no se ha encontrado ningun mensaje".
- Si el mensaje es validado, aparecerá la encriptación en su área correspondiente y además, aparecerá el botón de copiar.
- El botón de copiar, tiene la funcionalidad que le entrega el clipboard API. Si se presiona este botón, se copirá el mensaje que resultó de la encriptación o desencriptación y aparecerá un mensaje por pantalla que indica que el mensaje fue copiado con exito al portapapeles.
- El usuario podrá pegar el mensaje copiado en área de ingreso de texto a encriptar o desencriptar.   
