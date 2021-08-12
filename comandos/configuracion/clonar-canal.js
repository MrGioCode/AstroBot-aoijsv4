module.exports = [{
	name: "clonar-canal",
	code: `
$awaitReaction[$authorID;10s;{author:¿como quieres clonar el canal?:$authorAvatar}{description:
**[\`1\`] :: [\`Clonar pero borrar original\`]**
**[\`2\`] :: [\`Clonar pero mantener original\`]**}{color:GREEN};1️⃣,2️⃣;clonech1,clonech2;Comando Expirado]
$cooldown[10s;<:info:852306506280206386> | Tranquil@ vas muy rapido]
$onlyPerms[managechannels;<:cross_red:856744445395206144> | No cuentas con el permiso necesario]
$onlyBotPerms[managechannels;<:cross_red:856744445395206144> | No cuento con el permiso necesario]
$suppressErrors[<:cross_red:856744445395206144> | Error inesperado :/, revisa permisos]
$cooldown[3s;<:cross_red:824001307001487370> | Tranquilo...]`
}, {
    name: "clonech1",
	code: `
<:tick:856950258219352075> | Canal clonado correctamente!
$deleteChannels[$channelID]
$cloneChannel[$channelID]
$suppressErrors[<:cross_red:856744445395206144> | Error, algo me impidio clonar el canal]`,
    type: 'awaitedCommand'
}, {
    name: "clonech2",
	code: `
<:tick:856950258219352075> | Canal clonado correctamente!
$cloneChannel[$channelID]
$suppressErrors[<:cross_red:856744445395206144> | Error, algo me impidio clonar el canal]`,
    type: 'awaitedCommand'
}]
