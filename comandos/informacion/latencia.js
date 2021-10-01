module.exports = ({
    name: "latencia",
    code: `
$reply[$messageID;{author:Pong! 🏓:$authorAvatar}{description:
**Websocket**
> \`\`\`$pingms\`\`\`
**Cliente**
> \`\`\`$botPingms\`\`\`}{thumbnail:$userAvatar[$clientID]}{footer:$userTag $addTimestamp}{color:BLUE};no]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]`
})

