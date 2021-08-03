module.exports = [{
  name: "set-mute",
  code: `
  <:tick:856950258219352075> | Se ha establecido el rol correctamente
  <:tick:856950258219352075> | Rol configurado en todos los canales
  $forEachGuildChannel[setmute]
  $setServerVar[muterole;$mentionedRoles[1]]
  $argsCheck[>1;<:cross_red:856744445395206144> | Menciona el rol que deseas establecer]
  $onlyIf[$roleExists[$mentionedRoles[1]]==true;<:cross_red:856744445395206144> | ID del rol invalido]
  $onlyPerms[manageroles;<:cross_red:856744445395206144> | No cuentas con el permiso necesarios]
$onlyBotPerms[manageserver;<:cross_red:856744445395206144> | No cuento con los permisos necesarios]
$onlyIf[$getServerVar[establecer]==true;<:cross_red:856744445395206144> | La categoria \`establecer\` no esta activada. Uso: !activar establecer]`
}, {
    name: "setmute",
    code: `
$modifychannelPerms[$channelID;-sendmessages;-addreactions;$getServerVar[muterole]]`,
    type: 'awaitedCommand'
}]
