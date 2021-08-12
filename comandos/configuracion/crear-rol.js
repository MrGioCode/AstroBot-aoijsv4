module.exports = [{
	name: "crear-rol",
	code: `
$awaitReaction[$authorID;10s;{author:¿Que tipo de rol quieres crear?:$authorAvatar}{description:
**[\`1\`] :: [\`Un rol miembro\`]**
**[\`2\`] :: [\`Un rol Administración\`]**}{color:GREEN};1️⃣,2️⃣;createrole1,createrole2;Comando Expirado]
$setServerVar[createrolen;$message]
$argsCheck[>1;<:cross_red:856744445395206144> | Nombre no proporcionado]
$onlyPerms[manageroles;<:cross_red:856744445395206144> | No cuentas con el permiso necesario]
$onlyBotPerms[manageroles;<:cross_red:856744445395206144> | No cuento con el permiso necesario]
$cooldown[3s;<:cross_red:824001307001487370> | Tranquilo...]`
}, {
    name: "createrole1",
	code: `
<:tick:856950258219352075> | Rol miembro creado con exito!
$createRole[$getServerVar[createrolen];RANDOM;yes;no;2]
$suppressErrors[<:cross_red:856744445395206144> | Error, algo me impidio crear el rol]`,
    type: 'awaitedCommand'
}, {
    name: "createrole2",
	code: `
<:tick:856950258219352075> | Rol administrador creado con exito!
$createRole[$getServerVar[createrolen];RANDOM;no;yes;2;admin]
$suppressErrors[<:cross_red:856744445395206144> | Error, algo me impidio crear el rol]`,
    type: 'awaitedCommand'
}]
