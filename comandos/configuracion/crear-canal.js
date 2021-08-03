module.exports = [{
	name: "crear-canal",
	code: `
$awaitReaction[$authorID;10s;{author:¿Que tipo de canal deseas crear?:$authorAvatar}{description:
**[\`1\`] :: [\`Voz\`]**
**[\`2\`] :: [\`Texto\`]**}{color:GREEN};1️⃣,2️⃣;createch1,createch2;Comando Expirado]
$setServerVar[createchn;$message]
$cooldown[10s;<:info:852306506280206386> | Tranquil@ vas muy rapido]
$argsCheck[>1;<:cross_red:856744445395206144> | Nombre no proporcionado]
$onlyPerms[managechannels;<:cross_red:856744445395206144> | No cuentas con el permiso necesario]
$onlyBotPerms[managechannels;<:cross_red:856744445395206144> | No cuento con el permiso necesario]
$cooldown[3s;<:cross_red:824001307001487370> | Tranquilo...]
$onlyIf[$getServerVar[configuracion]==true;<:cross_red:856744445395206144> | La categoria \`configuracion\` no esta activada. Uso: !activar configuracion]`
}, {
    name: "createch1",
	code: `
<:tick:856950258219352075> | Canal de voz creado correctamente!
$createChannel[$getServerVar[createchn];voice]
$suppressErrors[<:cross_red:856744445395206144> | Error, algo me impidio crear el canal]`,
    type: 'awaitedCommand'
}, {
    name: "createch2",
	code: `
<:tick:856950258219352075> | Canal de texto creado correctamente!
$createChannel[$getServerVar[createchn];text]
$suppressErrors[<:cross_red:856744445395206144> | Error, algo me impidio crear el canal]`,
    type: 'awaitedCommand'
}]
