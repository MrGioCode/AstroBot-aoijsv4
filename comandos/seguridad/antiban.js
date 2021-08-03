module.exports = [{
  name: "antiban",
  code: `
  $if[$getServerVar[antiban]==off]
  $setServerVar[antiban;on]
  <:tick:856950258219352075> | Anti prohibiciones activado correctamente!
  $onlyForIds[$ownerID;<:cross_red:856744445395206144> | Solo el propietario del servidor]
  $onlyBotPerms[ban;<:cross_red:856744445395206144> | No cuento con los permisos necesarios]
  $elseIf[$getServerVar[antiban]==on]
  $setServerVar[antiban;off]
  <:tick:856950258219352075> | Anti prohibiciones desactivado correctamente!
  $onlyForIds[$ownerID;<:cross_red:856744445395206144> | Solo el propietario del servidor]
  $endelseIf
  $endif
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]
$onlyIf[$getServerVar[seguridad]==true;<:cross_red:856744445395206144> | La categoria \`seguridad\` no esta activada. Uso: !activar seguridad]`
}, {
  channel: "$randomChannelID",
  code: `
  $unban[$authorID]
  $suppressErrors[Error]
  $onlyIf[$getServerVar[antiban]==on;]`,
  type: 'banAddCommand'
}]
