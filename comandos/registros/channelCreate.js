module.exports = ({
  channel: "$getServerVar[logsch]",
  code: `
$author[Canal Creado;$userAvatar[$getAuditLogs[1;everyone;CHANNEL_CREATE;$guildID;{executor.id}]]]
$description[
==> **Informacion Del Canal Creado** \`Log #$getServerVar[logsnum]\`

**Nombre**
> \`\`\`#$channelName[$newChannel[id]]\`\`\`
**Posicion**
> \`\`\`$newChannel[position]\`\`\`
**Creador**
> \`\`\`$userTag[$getAuditLogs[1;everyone;CHANNEL_CREATE;$guildID;{executor.id}]]\`\`\`]
$thumbnail[$userAvatar[$getAuditLogs[1;everyone;CHANNEL_CREATE;$guildID;{executor.id}]]]
$footer[$userTag[$getAuditLogs[1;everyone;CHANNEL_CREATE;$guildID;{executor.id}]] $addTimestamp]
$color[GREEN]
$setServerVar[logsnum;$sum[$getServerVar[logsnum];1]]
$onlyIf[$serverChannelExists[$getServerVar[logsch]]==true;]`,
  type: 'channelCreateCommand'
})
