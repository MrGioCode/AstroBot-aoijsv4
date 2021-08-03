module.exports = [{
  name: "antilinks",
  code: `
  $if[$getServerVar[antilink]==off]
  $setServerVar[antilink;on]
  <:tick:856950258219352075> | Anti enlaces activado con exito!
  $onlyPerms[admin;<:cross_red:856744445395206144> | No cuentas con el permiso necesarios]
  $onlyBotPerms[managemessages;<:cross_red:856744445395206144> | No cuento con los permisos necesarios]
  $elseIf[$getServerVar[antilink]==on]
  $setServerVar[antilink;off]
  <:tick:815774195740311564> | Anti enlaces desactivado con exito!
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
$setUserVar[warns;$sum[$getUserVar[warns;$authorID];1];$authorID]
<:cross_red:856744445395206144> | \`$userTag[$authorID] No enlaces :/\`
$onlyIf[$getServerVar[antilink]==on;]
$onlyIf[$hasAnyPerm[admin;manageserver;managechannels;manageroles]==false;]
$onlyIf[$checkContains[$message;https://;discord.gg/;https://discord.gg/]==true;]`
}, {
    channel: "$channelID",
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
<:cross_red:856744445395206144> | \`$userTag[$authorID] No enlaces :/\`
$deleteMessage[$channelID;$messageID]
$setUserVar[warns;$sum[$getUserVar[warns;$authorID];1];$authorID]
$onlyIf[$getServerVar[antilink]==on;]
$onlyIf[$hasAnyPerm[admin;manageserver;managechannels;manageroles]==false;]
$onlyIf[$checkContains[$message;https://;discord.gg/;https://discord.gg/]==true;]`,
    type: 'updateCommand'
}]
