module.exports = ({
    name: "set-siverify",
    code: `
    <:tick:856950258219352075> | Rol ya verificado ha sido establecido correctamente!
    $setServerVar[siverify;$mentionedRoles[1]]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];<:cross_red:856744445395206144> | Tengo un rol menor o igual al mencionado]
    $onlyIf[$roleExists[$mentionedRoles[1]]==true;<:cross_red:856744445395206144> | ID de rol invalido]
    $argsCheck[>1;<:cross_red:856744445395206144> | Rol no proporcionado]
    $onlyPerms[manageserver;<:cross_red:856744445395206144> | No cuentas con el permiso necesarios]`
})