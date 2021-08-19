module.exports = ({
    name: "set-polls",
    code: `
<:tick:856950258219352075> | Canal de encuestas establecido en \`#$channelName[$mentionedChannels[1]]\` correctamente!
$setServerVar[pollsch;$mentionedChannels[1]]
$onlyIf[$channelType[$mentionedChannels[1]]==text;<:cross_red:856744445395206144> | Solo canales de texto]
$onlyif[$serverChannelExists[$mentinedChannels[1]]==false;<:cross_red:856744445395206144> | ID de canal invalida]
$argsCheck[>1;<:cross_red:856744445395206144> | ID no porporcionado]
$onlyPerms[manageserver;<:cross_red:856744445395206144> | No cuentas con el permiso necesarios]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquil@...]`
})