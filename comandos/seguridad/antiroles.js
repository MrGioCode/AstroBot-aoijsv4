module.exports = [{
  name: "antiroles",
  code: `
  $if[$getServerVar[antiroles]==off]
  $setServerVar[antiroles;on]
  <:tick:856950258219352075> | Anti creacion de role activado correctamente!
  $onlyForIds[$ownerID;<:cross_red:856744445395206144> | Solo el propietario del servidor]
  $onlyBotPerms[manageroles;<:cross_red:856744445395206144> | No cuento con los permisos necesarios]
  $elseIf[$getServerVar[antiroles]==on]
  $setServerVar[antiroles;off]
  <:tick:856950258219352075> | Anti creacion de role desactivado correctamente!
  $onlyForIds[$ownerID;<:cross_red:856744445395206144> | Solo el propietario del servidor]
  $endelseIf
  $endif
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]
$onlyIf[$getServerVar[seguridad]==true;<:cross_red:856744445395206144> | La categoria \`seguridad\` no esta activada. Uso: !activar seguridad]`
}, {
  channel: "$randomChannelID",
  code: `
  $deleteRoles[$newRole[id]]
  $suppressErrors[<:cross_red:856744445395206144> | Error al intentar borrar un rol]
  $onlyIf[$getServerVar[antiroles]==on;]`,
  type: 'roleCreateCommand'
}]
