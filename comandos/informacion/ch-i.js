module.exports = ({
    name: "ch-i",
    code: `
$reply[$messageID;{author:Informacion #$channelName[$mentionedChannels[1]]:$authorAvatar}
{description:
**Nombre**
> \`#$channelName[$mentionedChannels[1]]\`
**Mencion**
> <#$mentionedChannels[1]>
**Tema**
> \`$channelTopic[$mentionedChannels[1]]\`
**Tipo De Canal**
> \`$channelType[$mentionedChannels[1]]\`}
{color:YELLOW}
{footer:$userTag $addTimestamp:$authorAvatar};no]
$onlyIf[$serverChannelExists[$mentionedChannels[1]]==true;<:cross_red:856744445395206144> | El canal que se proporciono no fue encontrado]
$argsCheck[>1;<:cross_red:856744445395206144> | Canal no proporcionado]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]`
})

