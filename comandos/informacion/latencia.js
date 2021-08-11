module.exports = ({
    name: "latencia",
    code: `
$reply[$messageID;{author:Pong! 🏓:$authorAvatar}{description:
**Mi Ping**
> \`\`\`$pingms\`\`\`
**Mensajes**
> \`\`\`$botPingms\`\`\`}{thumbnail:$userAvatar[$clientID]}{footer:$userTag $addTimestamp}{color:BLUE};no]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]
$onlyIf[$getServerVar[informacion]==true;<:cross_red:856744445395206144> | Los comandos \`informativos\` no estan activados. Usa: !activar informacion]`
})

