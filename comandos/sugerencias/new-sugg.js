module.exports = ({
    name: "new-sugg",
    code: `
$addReactions[<:yes:865059874794766367>;<:no:865059712550830080>;🔍]
$author[Nueva Sugerencia!;$authorAvatar]
$description[
**por: [\`$userTag[$authorID]\`]**
**num: [\`$getServerVar[suggnum]\`]**

**sug:** $message]
$footer[Sugerencia Pendiente...;$authorAvatar]
$color[YELLOW]
$image[https://media.discordapp.net/attachments/876204943613235250/879531335973216276/20210823_175955.jpg]
$useChannel[$getServerVar[suggch]]
$channelSendMessage[$channelID;<:tick:856950258219352075> | Sugerencia enviada con exito!. status: \`pendiente\`]
$setServerVar[suggnum;$sum[$getServerVar[suggnum];1]]
$onlyIf[$serverChannelExists[$getServerVar[suggch]]==true;<:cross_red:856744445395206144> | No hay canal establecido]
$cooldown[1m;<:cross_red:856744445395206144> | Tranquil@... \`%time%\`]`
})
