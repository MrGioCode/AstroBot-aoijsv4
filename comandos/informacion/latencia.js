module.exports = ({
    name: "latencia",
    code: `
$reply[$messageID;$customEmoji[cargando_rainbow] | **Host [\`$pingms\`] - Mensajes [\`$botPingms\`]**;no]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]
$onlyIf[$getServerVar[informacion]==true;<:cross_red:856744445395206144> | Los comandos \`informativos\` no estan activados. Usa: !activar informacion]`
})
