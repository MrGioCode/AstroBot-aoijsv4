module.exports = ({
    name: "unmute",
    code: `
<:tick:856950258219352075> | \`$userTag[$findUser[$message[1]]]\` silencio removido correctamente!
  $takeRoles[$findUser[$message[1]];$getServerVar[muterole]]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];<:cross_red:856744445395206144> | Tienes un rol abajo o igual al mencionado]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];<:cross_red:856744445395206144> | Tengo un rol menor o igual al mencionado]
  $onlyIf[$findUser[$message[1]]!=$authorID;<:cross_red:856744445395206144> | ID invalido]
  $onlyIf[$memberExists[$findUser[$message[1];no]]==true;<:cross_red:856744445395206144> | ID invalido]
  $onlyIf[$hasRole[$findUser[$message[1]];$getServerVar[muterole]]!=false;<:cross_red:856744445395206144> | Usuario no silenciado]
  $onlyIf[$roleExists[$getServerVar[muterole]]==true;<:cross_red:856744445395206144> | No hay rol establecido]
  $argsCheck[>1;<:cross_red:856744445395206144> | Menciona al usuario que deseas remover silencio]
  $onlyIf[$getServerVar[muterole]!=;<:cross_red:856744445395206144> | No hay rol establecido]
  $suppressErrors[<:cross_red:856744445395206144> | Error al intentar remover un rol]
  $onlyPerms[manageroles;<:cross_red:856744445395206144> | No cuentas con los permisos necesarios]
$onlyBotPerms[manageroles;<:cross_red:856744445395206144> | No cuento con el permiso necesario]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]`
})
