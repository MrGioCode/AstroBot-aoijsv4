module.exports = ({
  channel: "$getServerVar[logsch]",
  code: `
  $author[Usuario Baneado;$authorAvatar]
  $description[
    ==> **Informacion Del Ban** \`Log #$getServerVar[logsnum]\`

    **Usuario**
    > \`\`\`$userTag[$authorID]\`\`\`
    **Responable**
    > \`\`\`$userTag[$getAuditLogs[1;everyone;MEMBER_BAN_ADD;$guildID;{executor.id}]]\`\`\`
    **Razon**
    > \`\`\`$getBanReason[$authorID;$guildID]\`\`\`]
    $thumbnail[$authorAvatar]
    $footer[$userTag[$getAuditLogs[1;everyone;MEMBER_BAN_ADD;$guildID;{executor.id}]] $addTimestamp]
    $color[GREEN]
    $setServerVar[logsnum;$sum[$getServerVar[logsnum];1]]
    $onlyIf[$serverChannelExists[$getServerVar[logsch]]==true;]`,
  type: 'banAddCommand'
})
