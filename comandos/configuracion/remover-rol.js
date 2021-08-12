module.exports = ({
    name: "remover-rol",
    code: `
<:tick:856950258219352075> | Rol removido correctamente!
$takeRoles[$mentioned[1];$mentionedRoles[1]]
$onlyIf[$hasRoles[$mentioned[1];$mentionedRoles[1]]==true;<:cross_red:856744445395206144> | El usuario no tiene el rol mencionado]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];<:cross_red:856744445395206144> | Tienes un rol abajo o igual al mencionado]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];<:cross_red:856744445395206144> | Tengo un rol menor o igual al mencionado]
$onlyIf[$roleExists[$mentionedRoles[1]]==true;<:cross_red:856744445395206144> | Rol no existente]
$argsCheck[>1;<:cross_red:856744445395206144> | Rol no proporcionado]
$onlyIf[$memberExists[$mentioned[1]]==true;<:cross_red:856744445395206144> | ID invalido]
$argsCheck[>1;<:cross_red:856744445395206144> | Usuario no proporcionado]
$onlyPerms[manageroles;<:cross_red:856744445395206144> | No cuentas con el permiso necesario]
$onlyBotPerms[manageroles;<:cross_red:856744445395206144> | No cuento con los permisos necesarios]
$cooldown[3s;<:cross_red:824001307001487370> | Tranquilo...]`
})
