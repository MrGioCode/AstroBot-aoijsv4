module.exports = ({
    name: "set-despedidas",
    code: `
<:tick:856950258219352075> | Registro de despedidas establecido correctamente!
$setServerVar[leavech;$mentionedChannels[1]]
$onlyIf[$channelType[$findServerChannel[$message[1];no]]==text;<:cross_red:856744445395206144> | Solo canales de texto]
$onlyIf[$channelExists[$mentionedChannels[1]]==true;<:cross_red:856744445395206144> | ID de canal invalida]
$argsCheck[>1;<:cross_red:856744445395206144> | ID no proporcionada]
$onlyPerms[manageserver;<:cross_red:856744445395206144> | No cuentas con el permiso necesario]
$cooldown[1m;<:cross_red:856744445395206144> | Tranquil@...]`
})
