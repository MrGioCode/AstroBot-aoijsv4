module.exports = ({
    name: "set-verifych",
    code: `
    $channelSendMessage[$mentionedChannels[1];<:tick:856950258219352075> | Desde ahora el canal de verificacion sera aqui :D!]
    <:tick:856950258219352075> | Canal de verificacion establecido en \`#$channelName[$mentionedChannels[1]]\` correctamente!
    $setServerVar[verifych;$mentionedChannels[1]]
    $onlyIf[$channelType[$mentionedChannels[1]]==text;<:cross_red:856744445395206144> | Solo canales de texto]
    $onlyIf[$serverChannelExists[$mentionedChannels[1]]==true;<:cross_red:856744445395206144> | ID de canal invalido]
    $argsCheck[>1;<:cross_red:856744445395206144> | Canal no proporcionado]
    $onlyPerms[manageserver;<:cross_red:856744445395206144> | No cuentas con el permiso necesarios]
    $cooldown[3s;<:cross_red:856744445395206144> | Tranquil@...]`
})