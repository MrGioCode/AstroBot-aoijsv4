module.exports = [({
    name: "lock-all",
    code: `
<:tick:856950258219352075> | Los canales del servidor \`$serverName\` han sido Bloqueados correctamente!
$forEachGuildChannel[lockall1]
$onlyPerms[managechannels;<:cross_red:856744445395206144> | No cuentas con los permisos necesarios]
$onlyBotPerms[managechannels;<:cross_red:856744445395206144> | No cuento con los permisos necesarios]
$cooldown[1m;<:cross_red:856744445395206144> | Tranquilo...]`
}), ({
    name: "lockall1",
    code: `
$modifyChannelPerms[$channelID;-sendmessages;$guildID]`,
    type: 'awaitedCommand'
})]