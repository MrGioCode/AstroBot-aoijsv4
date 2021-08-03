module.exports = [{
  name: "antich",
  code: `
  $if[$getServerVar[antichannel]==off]
  $setServerVar[antichannel;on]
  <:tick:856950258219352075> | Anti creacion de canales activado correctamente!
  $onlyForIds[$ownerID;<:cross_red:856744445395206144> | Solo el propietario del servidor]
  $onlyBotPerms[managechannels;<:cross_red:856744445395206144> | No cuento con los permisos necesarios]
  $elseIf[$getServerVar[antichannel]==on]
  $setServerVar[antichannel;off]
  <:tick:856950258219352075> | Anti creacion de canales desactivado correctamente!
  $onlyForIds[$ownerID;<:cross_red:856744445395206144> | Solo el propietario del servidor]
  $endelseIf
  $endif
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]
$onlyIf[$getServerVar[seguridad]==true;<:cross_red:856744445395206144> | La categoria \`seguridad\` no esta activada. Uso: !activar seguridad]`
}, {
  channel: "$randomChannelID",
  code: `
  $deleteChannels[$newChannel[id]]
  $suppressErrors[<:cross_red:856744445395206144> | Error al intentar eliminar un canal]
  $onlyIf[$getServerVar[antichannel]==on;]`,
  type: 'channelCreateCommand'
}]
