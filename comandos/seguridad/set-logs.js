module.exports = ({
    name: "set-logs",
    code: `
<:tick:856950258219352075> | Registros seran enviados en el canal \`$channelName[$mentionedChannels[1]]\`
$setServerVar[logsch;$mentionedChannels[1]]
$onlyIf[$channelType[$mentionedChannels[1]]==text;<:cross_red:856744445395206144> | Solo canales de texto]
$onlyIf[$serverChannelExists[$mentionedChannels[1]]==false;<:cross_red:856744445395206144> | ID de canal invalido]
$onlyPerms[manageserver;<:cross_red:856744445395206144> | No cuentas con el permiso necesarios]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquil@...]`
})
