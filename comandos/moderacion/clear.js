module.exports = ({
name: "clear",
aliases: ['purge'],
code: `
<:tick:856950258219352075> | He eliminado \`$clear[$message[1];everyone;$channelID;yes] mensajes\`
$deleteIn[2s]
$wait[200]
$deletecommand
$onlyIf[$message[1]<=100;<:cross_red:856744445395206144> | Lá cantidad no puede exceder de los 100 mensajes]
$onlyIf[$isNumber[$message]==true;<:cross_red:856744445395206144> | Numero no proporcionado]
$argsCheck[>1;<:cross_red:856744445395206144> | No haz colocado un numero de mensajes]
$onlyPerms[managechannels;<:cross_red:856744445395206144> | No cuentas con los permisos necesarios]
$onlyBotPerms[managechannels;<:cross_red:856744445395206144> | No cuento con los permisos necesarios]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]`
});
