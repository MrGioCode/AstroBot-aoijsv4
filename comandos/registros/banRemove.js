module.exports = ({
  channel: "$getServerVar[logsch]",
  code: `
  $author[Usuario Desbaneado;$authorAvatar]
  $description[
    ==> **Informacion Del Unban** \`Log #$getServerVar[logsnum]\`

    **Usuario**
    > \`\`\`$userTag[$authorID]\`\`\`
    **Responable**
    > \`\`\`$userTag[$getAuditLogs[1;everyone;MEMBER_BAN_REMOVE;$guildID;{executor.id}]]\`\`\`]
    $thumbnail[$authorAvatar]
    $footer[$userTag[$getAuditLogs[1;everyone;MEMBER_BAN_REMOVE;$guildID;{executor.id}]] $addTimestamp]
    $color[GREEN]
    $setServerVar[logsnum;$sum[$getServerVar[logsnum];1]]
    $onlyIf[$serverChannelExists[$getServerVar[logsvh]]==true;]`,
  type: 'banRemoveCommand'
})
