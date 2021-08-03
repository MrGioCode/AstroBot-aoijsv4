module.exports = ({
    name: "set-nombre",
    code: `
<:tick:856950258219352075> | Nickname cambiado correctamente!
$changeNickname[$mentioned[1];$noMentionMessage]
$onlyIf[$charCount[$noMentionMessage]<20;<:cross_red:856744445395206144> | El texto no debe exceder de 20 caracteres]
$argsCheck[>2;<:cross_red:824001307001487370> | Texto no proporcionado]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];<:cross_red:856744445395206144> | Tienes un rol abajo o igual al mencionado]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];<:cross_red:856744445395206144> | Tengo un rol menor o igual al mencionado]
$onlyIf[$memberExists[$mentioned[1]]==true;<:cross_red:856744445395206144> | ID no existente]
$argsCheck[>1;<:cross_red:856744445395206144> | ID no proporcionado]
$onlyPerms[managenicknames;<:cross_red:856744445395206144> | No cuentas con el permiso necesario]
$onlyBotPerms[managenicknames;<:cross_red:856744445395206144> | No cuento con los permisos necesarios]
$cooldown[3s;<:cross_red:824001307001487370> | Tranquilo...]
$onlyIf[$getServerVar[configuracion]==true;<:cross_red:856744445395206144> | La categoria \`configuracion\` no esta activada. Uso: !activar configuracion]`
})
