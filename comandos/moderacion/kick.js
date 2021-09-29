module.exports = ({
    name: "kick",
    code: ` 
<:tick:856950258219352075> | \`$userTag[$findUser[$message[1]]]\` expulsado correctamente!
$kick[$findUser[$message[1]];$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;No se proporcionó una razón.];false;$messageSlice[1]];7]
$if[$memberExists[$findUser[$message[1]]]==true]
$onlyIf[$rolePosition[$highestRole[$findUser[$message[1]]]]>$rolePosition[$highestRole];<:cross_red:856744445395206144>  | Tienes un rol abajo o el mismo al mencionado]
$onlyIf[$findUser[$message[1]]!=$authorID;<:cross_red:856744445395206144> | Esa ID no la puedo expulsar]
$onlyIf[$findUser[$message[1]]!=$clientID;<:cross_red:856744445395206144> | Esa ID no la puedo expulsar]
$onlyIf[$findUser[$message[1]]!=$ownerID;<:cross_red:856744445395206144> | Esa ID no la puedo expulsar]
$elseIf[$memberExists[$findUser[$message[1]]]==false]
$onlyIf[$findUser[$message[1]]!=$authorID;<:cross_red:856744445395206144> | ID invalida]
$endelseIf
$endif
$onlyIf[$memberExists[$findUser[$message[1]]]==true;<:cross_red:856744445395206144> | El usuario no se encuentra dentro del servidor]
$onlyIf[$message!=;<:cross_red:856744445395206144> | No haz mencionado al usuario que deseas expulsar]
$onlyPerms[ban;<:cross_red:856744445395206144> | No cuentas con los permisos necesarios]
$onlyBotPerms[ban;<:cross_red:856744445395206144> | No cuento con el permiso necesario]`
})