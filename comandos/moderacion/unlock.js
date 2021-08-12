module.exports = ({
  name: "unlock",
  code: `
<:tick:856950258219352075> | \`$channelName[$channelID]\` Desbloqueado correctamente
$modifyChannelPerms[$channelID;+sendmessages;$guildID]
$onlyPerms[managechannels;<:cross_red:856744445395206144> | No cuentas con los permisos necesarios]
$onlyBotPerms[managechannels;<:cross_red:856744445395206144> | No cuento con el permiso necesario]
$cooldown[1m;<:cross_red:856744445395206144> | Tranquilo...]`
});
