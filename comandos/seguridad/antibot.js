module.exports = [{
  name: "antibot",
  code: `
  $if[$getServerVar[antibot]==off]
  $setServerVar[antibot;on]
  <:tick:856950258219352075> | Sistema anti bot activado correctamente!
  $onlyForIds[$ownerID;<:cross_red:856744445395206144> | Solo el propietario del servidor]
  $onlyBotPerms[ban;<:cross_red:856744445395206144> | No cuento con los permisos necesarios]
  $elseIf[$getServerVar[antibot]==on]
  $setServerVar[antibot;off]
  <:tick:856950258219352075> | Sistema anti bot desactivado correctamente!
  $onlyForIds[$ownerID;<:cross_red:856744445395206144> | Solo el propietario del servidor]
  $endelseIf
  $endif
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]
$onlyIf[$getServerVar[seguridad]==true;<:cross_red:856744445395206144> | La categoria \`seguridad\` no esta activada. Uso: !activar seguridad]`
}, {
  channel: "$randomChannelID",
  code: `
  $sendDM[$ownerID;<:tick:856950258219352075> | \`$userTag[$authorID]\` Es un bot, por lo tanto, lo he expulsado.]
  $kick[$authorID]
  $suppressErrors[Error]
  $onlyIf[$isBot[$authorID]==true;]
  $onlyIf[$getServerVar[antibot]==on;]`,
  type: 'joinCommand'
}]
