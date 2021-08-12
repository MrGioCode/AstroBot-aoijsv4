module.exports = ({
  name: "nuke",
  code: `
 $deleteChannels[$channelID]
 $channelSendMessage[$cloneChannel[$channelID;yes];<:tick:856950258219352075> | \`$channelName[$channelID]\` Explotado correctamente]
$onlyPerms[managechannels;<:cross_red:856744445395206144> | No cuentas con los permisos necesarios]
$onlyBotPerms[managechannels;<:cross_red:856744445395206144> | No cuento con los permisos necesarios]
$suppressErrors[<:cross_red:856744445395206144> | Error al intentar explotar este canal]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]`
});
