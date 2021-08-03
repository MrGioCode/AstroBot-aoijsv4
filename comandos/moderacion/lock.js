module.exports = ({
  name: "lock",
  code: `
<:tick:856950258219352075> | \`$channelName[$channelID]\` Bloqueado correctamente
$modifyChannelPerms[$channelID;-sendmessages;$guildID]
$onlyPerms[managechannels;<:cross_red:856744445395206144> | No cuentas con los permisos necesarios]
$onlyBotPerms[managechannels;<:cross_red:856744445395206144> | No cuento con los permisos necesarios]
$cooldown[1m;<:cross_red:856744445395206144> | Tranquilo...]
$onlyIf[$getServerVar[moderacion]==true;<:cross_red:856744445395206144> | Los comandos \`moderacion\` no estan activados. Usa: !activar moderacion]`
});
