module.exports = ({
    name: "set-msgdespedidas",
    code: `
<:tick:856950258219352075> | Mensaje de despedidas establecido correctamente!
$setServerVar[leavemsg;$message]
$onlyIf[$charCount[$message]<500;<:cross_red:856744445395206144> | El mensaje no debe exceder de 500 caracteres]
$argsCheck[>1;<:cross_red:856744445395206144> | Mensaje no proporcionado]
$onlyPerms[manageserver;<:cross_red:856744445395206144> | No cuentas con el permiso necesario]
$cooldown[10s;<:cross_red:856744445395206144> | Tranquil@... \`%time%\`]`
})
