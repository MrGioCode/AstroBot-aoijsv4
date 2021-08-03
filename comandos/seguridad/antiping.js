module.exports = [{
    name: "antiping",
    code: `
  $if[$getServerVar[antiping]==off]
  $setServerVar[antiping;on]
  <:tick:856950258219352075> | Anti menciones activado con exito!
  $onlyPerms[admin;<:cross_red:856744445395206144> | No cuentas con el permiso necesarios]
  $onlyBotPerms[admin;<:cross_red:856744445395206144> | No cuento con los permisos necesarios]
  $elseIf[$getServerVar[antiping]==on]
  $setServerVar[antiping;off]
  <:tick:856950258219352075> | Anti menciones desactivado con exito!
  $onlyPerms[admin;<:cross_red:856744445395206144> | No cuentas con el permiso suficiente]
  $endelseIf
  $endif
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]
$onlyIf[$getServerVar[seguridad]==true;<:cross_red:856744445395206144> | La categoria \`seguridad\` no esta activada. Uso: !activar seguridad]`
}, {
    name: "$alwaysExecute",
    code: `
$if[$getUserVar[warns]==5]
<:tick:856950258219352075> | Warns del usuario \`$userTag[$authorID]\` eliminadas!
$wait[100]
$setUserVar[warns;$sub[$getUserVar[warns;$authorID];$getUserVar[warns;$authorID]];$authorID]
<:tick:856950258219352075> | \`$userTag[$authorID]\` baneado indefinido por warn limit! \`5/5\`
$ban[$authorID;Warn "Limit" 5/5!]
$suppressErrors[<:cross_red:856744445395206144> | No he podido prohibir al usuario]
$endif
$if[$getUserVar[warns]==3]
<:tick:856950258219352075> | \`$userTag[$authorID]\` expulsado por exceso de warns! \`3/5\`
$kick[$authorID;Warn 3/3!]
$suppressErrors[<:cross_red:856744445395206144> | No he podido expulsar al usuario]
$endif
$if[$roleExists[$getServerVar[muterole]]==true]
$giveRoles[$authorID;$getServerVar[muterole]]
$suppressErrors[<:cross_red:856744445395206144> | No he podido silenciar al usuario]
$endif
$deletecommand
$onlyIf[$getServerVar[antiping]==on;]
$onlyIf[$hasAnyPerm[admin;manageserver;managechannels;manageroles]==false;]
  $onlyIf[$checkContains[$toLowercase[$message;@everyone;@here]]==true;]`
}]
