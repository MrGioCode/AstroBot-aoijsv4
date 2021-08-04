module.exports = [{
   name: "comandos",
   code: `
$reactionCollector[$splitText[1];everyone;5m;1️⃣,2️⃣,3️⃣,4️⃣,5️⃣,6️⃣,7️⃣,8️⃣,9️⃣,❌,🔁;category1,category2,category3,category4,category5,category6,category7,category8,category9,salir,volver;yes]
$textSplit[$sendMessage[
{author:xAstroBot:$authorAvatar}
{description:
**[1️⃣] - [\`Informacion\`] - [$replaceText[$replaceText[$checkCondition[$getServerVar[informacion]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**[2️⃣] - [\`Seguridad\`] - [$replaceText[$replaceText[$checkCondition[$getServerVar[seguridad]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**[3️⃣] - [\`Establecer\`] - [$replaceText[$replaceText[$checkCondition[$getServerVar[establecer]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**[4️⃣] - [\`Configuracion\`] - [$replaceText[$replaceText[$checkCondition[$getServerVar[configuracion]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**[5️⃣] - [\`Moderacion\`] - [$replaceText[$replaceText[$checkCondition[$getServerVar[moderacion]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**[6️⃣] - [\`Bienvenidas\`] - [$replaceText[$replaceText[$checkCondition[$getServerVar[bienvenidas]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**[7️⃣] - [\`Despedidas\`] - [$replaceText[$replaceText[$checkCondition[$getServerVar[despedidas]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**[8️⃣] - [\`Activaciones\`]**
**[9️⃣] - [\`Sugerencias\`] - [$replaceText[$replaceText[$checkCondition[$getServerVar[sugerencias]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**

**[❌] - [\`Salir\`]**
**[🔁] - [\`Inicio\`]**

<:link:856765531382218772> | [invitacion](https://discord.com/api/oauth2/authorize?client_id=864965981290102784&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FkHv3dV3KeW&scope=bot) | [soporte](https://discord.gg/mKQGB6Q2VP) |}
{footer:Lista de categorias $addTimestamp}{thumbnail:$userAvatar[$clientID]}{color:WHITE};yes]; ]`
}, {
    name: "category1",
    code: `
$editMessage[$message[1];{author:xAstroBot Informacion:$authorAvatar}
{description:
**[\`!help\`] - [\`Muestra informacion acerca de como comenzar a usar a xAstroBot\`]**
**[\`!b-i\`] - [\`Muestra las estadisticas de xAstroBot\`]**
**[\`!ch-i\`] - [\`Menciona un canal y ve su informacion\`]**
**[\`!s-i\`] - [\`Muestra la informacion del servidor\`]**
**[\`!u-i\`] - [\`Menciona a un usuario y muestra su informacion\`]**

**status : [$replaceText[$replaceText[$checkCondition[$getServerVar[informacion]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**activar : [\`!activar informacion\`]**}
{footer:Lista de comandos informativos $addTimestamp}{thumbnail:$userAvatar[$clientID]}{color:RANDOM}]`,
    type: 'awaitedCommand'
}, {
    name: "category2",
    code: `
$editMessage[$message[1];{author:xAstroBot Seguridad:$authorAvatar}
{description:
**[\`!antilinks\`] - [\`Activa sistema anti enlaces\`]**
**[\`!antiping\`] - [\`Activa sistema anti @here y @everyone\`]**
**[\`!antich\`] - [\`Activa el sistema anti canales (evita creacion masiva de canales)\`]**
**[\`!antiroles\`] - [\`Activa el sistema anti roles (evita creacion masiva de roles)\`]**
**[\`!antiban\`] - [\`Activa el sistema anti ban (evita ban all)\`]**
**[\`!antibot\`] - [\`Activa el sistema anti bots (disminuye la probabilidad de raids)\`]**

**[\`!set-logs\`] - [\`Establece el canal donde se enviaran los registros del servidor\`]**

**status : [$replaceText[$replaceText[$checkCondition[$getServerVar[seguridad]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**activar : [\`!activar seguridad\`]**}
{footer:Lista de comandos seguridad $addTimestamp}{thumbnail:$userAvatar[$clientID]}{color:RANDOM}]`,
    type: 'awaitedCommand'
}, {
    name: "category3",
    code: `
$editMessage[$message[1];{author:xAstroBot Establecer:$authorAvatar}
{description:
**[\`!set-autorole\`] - [\`Establece el rol que se dara a los nuevos usuarios\`]**
**[\`!set-mute\`] - [\`Establece el rol que se dara al silenciar a un usuario\`]**

**status : [$replaceText[$replaceText[$checkCondition[$getServerVar[establecer]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**activar : [\`!activar establecer\`]**}
{footer:Lista de comandos establecer $addTimestamp}{thumbnail:$userAvatar[$clientID]}{color:RANDOM}]`,
    type: 'awaitedCommand'
}, {
    name: "category4",
    code: `
$editMessage[$message[1];{author:xAstroBot Configuracion:$authorAvatar}
{description:
**[\`!crear-canal\`] - [\`Crea un canal\`]**
**[\`!clonar-canal\`] - [\`Clona un canal\`]**
**[\`!crear-rol\`] - [\`Crea un rol\`]**
**[\`!remover-rol\`] - [\`Elimina un rol\`]**
**[\`!set-nombre\`] - [\`Estabece un nombre a un usuario\`]**

**status : [$replaceText[$replaceText[$checkCondition[$getServerVar[configuracion]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**activar : [\`!activar configuracion\`]**}
{footer:Lista de comandos configuracion $addTimestamp}{thumbnail:$userAvatar[$clientID]}{color:RANDOM}]`,
    type: 'awaitedCommand'
}, {
    name: "category5",
    code: `
$editMessage[$message[1];{author:xAstroBot Moderacion:$authorAvatar}
{description:
**[\`!clear\`] - [\`Elimina cierta cantidad de mensajes\`]**
**[\`!nuke\`] - [\`Explota un canal\`]**
**[\`!lock\`] - [\`Bloquea un canal\`]**
**[\`!unlock\`] - [\`Desbloquea un canal\`]**
**[\`!mute\`] - [\`Silencia a un usuario\`]**
**[\`!unmute\`] - [\`Remueve silencio a un usuario\`]**
**[\`!ban\`] - [\`Prohibe a un usuario\`]**
**[\`!unban\`] - [\`Remueve prohibicion a un usuario\`]**

**status : [$replaceText[$replaceText[$checkCondition[$getServerVar[moderacion]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**activar : [\`!activar moderacion\`]**}
{footer:Lista de comandos moderacion $addTimestamp}{thumbnail:$userAvatar[$clientID]}{color:RANDOM}]`,
    type: 'awaitedCommand'
}, {
    name: "category6",
    code: `
$editMessage[$message[1];{author:xAstroBot Bienvenidas:$authorAvatar}
{description:
**[\`!set-bienvenidas\`] - [\`Establece un canal de bienvenidas\`]**
**[\`!set-msgbienvenidas\`] - [\`Establece el mensaje de bienvenidas\`]**
**[\`!guia-bienvenidas\`] - [\`Muestra una guia para las bienvenidas\`]**

**status : [$replaceText[$replaceText[$checkCondition[$getServerVar[bienvenidas]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**activar : [\`!activar bienvenidas\`]**}
{footer:Lista de comandos bienvenidas $addTimestamp}{thumbnail:$userAvatar[$clientID]}{color:RANDOM}]`,
    type: 'awaitedCommand'
}, {
    name: "category7",
    code: `
$editMessage[$message[1];{author:xAstroBot Despedidas:$authorAvatar}
{description:
**[\`!set-despedidas\`] - [\`Establece un canal de despedidas\`]**
**[\`!set-msgdespedidas\`] - [\`Establece el mensaje de despedidas\`]**
**[\`!guia-despedidas\`] - [\`Muestra una guia para las despedidas\`]**

**status : [$replaceText[$replaceText[$checkCondition[$getServerVar[despedidas]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**activar : [\`!activar despedidas\`]**}
{footer:Lista de comandos despedidas $addTimestamp}{thumbnail:$userAvatar[$clientID]}{color:RANDOM}]`,
    type: 'awaitedCommand'
}, {
    name: "category8",
    code: `
$editMessage[$message[1];{author:xAstroBot Activaciones:$authorAvatar}
{description:
**[\`!activar\`] - [\`Activa una categoria\`]**
**[\`!desactivar\`] - [\`Desactiva una categoria\`]**}
{footer:Lista de comandos activaciones $addTimestamp}{thumbnail:$userAvatar[$clientID]}{color:RANDOM}]`,
    type: 'awaitedCommand'
}, {
    name: "category9",
    code: `
$editMessage[$message[1];{author:xAstroBot Sugerencias:$authorAvatar}
{description:
**[\`!set-sugg\`] - [\`Establece el canal de sugerencias\`]**
**[\`!new-sugg\`] - [\`Crea una sugerencia\`]**
**[\`!den-sugg\`] - [\`Denega una sugerencia (solo administradores)\`]**
**[\`!acc-sugg\`] - [\`Acepta una sugerencia (solo administradores)\`]**

**status : [$replaceText[$replaceText[$checkCondition[$getServerVar[sugerencias]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**activar : [\`!activar sugerencias\`]**}
{footer:Lista de comandos activaciones $addTimestamp}{thumbnail:$userAvatar[$clientID]}{color:RANDOM}]`,
    type: 'awaitedCommand'
}, {
    name: "salir",
    code: `
$deleteMessage[$channelID;$message[1]]`,
    type: 'awaitedCommand'
}, {
    name: "volver",
    code: `
$editMessage[$message[1];{author:xAstroBot:$authorAvatar}
{description:
**[1️⃣] - [\`Informacion\`] - [$replaceText[$replaceText[$checkCondition[$getServerVar[informacion]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**[2️⃣] - [\`Automoderacion\`] - [$replaceText[$replaceText[$checkCondition[$getServerVar[seguridad]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**[3️⃣] - [\`Establecer\`] - [$replaceText[$replaceText[$checkCondition[$getServerVar[establecer]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**[4️⃣] - [\`Configuracion\`] - [$replaceText[$replaceText[$checkCondition[$getServerVar[configuracion]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**[5️⃣] - [\`Moderacion\`] - [$replaceText[$replaceText[$checkCondition[$getServerVar[moderacion]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**[6️⃣] - [\`Bienvenidas\`] - [$replaceText[$replaceText[$checkCondition[$getServerVar[bienvenidas]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**[7️⃣] - [\`Despedidas\`] - [$replaceText[$replaceText[$checkCondition[$getServerVar[despedidas]!=false];true;$customEmoji[online]];false;$customEmoji[offline]]]**
**[8️⃣] - [\`Activaciones\`]**

**[❌] - [\`Salir\`]**
**[🔁] - [\`Inicio\`]**}
{footer:Lista de categorias $addTimestamp}{thumbnail:$userAvatar[$clientID]}{color:WHITE}]`,
    type: 'awaitedCommand'
}]
