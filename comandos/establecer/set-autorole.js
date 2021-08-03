module.exports = [{
    name: "set-autorole",
    code: `
<:tick:856950258219352075> | Rol establecido correctamente!
$setServerVar[autorole]
$onlyIf[$roleExists[$mentionedRoles[1]]==true;<:cross_red:856744445395206144> | ID rol invalido]
$argsCheck[>1;<:cross_red:856744445395206144> | Rol no proporcionado]
$onlyPerms[admin;<:cross_red:856744445395206144> | No cuentas con el permiso necesario]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]
$onlyIf[$getServerVar[establecer]==true;<:cross_red:856744445395206144> | La categoria \`establecer\` no esta activada. Uso: !activar establecer]`
}, {
    channel: "$randomChannelID",
    code: `
$if[$roleExists[$getServerVar[autorole]]==true]
$giveRoles[$authorID;$getServerVar[autorole]]
$suppressErrors[<:cross_red:856744445395206144> | Error al intentar dar un rol a \`$userTag[$authorID]\`
$endif`,
    type: 'joinCommand'
}]
