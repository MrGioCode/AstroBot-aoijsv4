module.exports = ({
    name: "new-poll",
    code: `
$channelSendMessage[$channelID;<:tick:856950258219352075> | Encuesta creada y enviada ha \`#$channelName[$getServerVar[pollsch]]\` correctamente!]
$addReactions[$splitText[2];$splitText[3];$splitText[4];$splitText[5];$splitText[6]]
$author[Nueva Encuesta!! 📊;$authorAvatar]
$description[
**Staff**
> \`$userTag[$authorID]\`
**Encuesta**
> $splitText[1]]
$thumbnail[$authorAvatar]
$footer[A Votar! $addTimestamp;$authorAvatar]
$color[YELLOW]
$useChannel[$getServerVar[pollsch]]
$textSplit[$message; | ]
$setServerVar[pollsnum;$sum[$getServerVar[pollsnum];1]]
$argsCheck[>1;<:cross_red:856744445395206144> | Coloca un texto]
$onlyIf[$serverChannelExists[$getServerVar[pollsch]]==true;<:cross_red:856744445395206144> | No existe el canal de encuestas]
$onlyIf[$getServerVar[pollsch]!=;<:cross_red:856744445395206144> | No hay un canal de encuestas establecido]
$onlyPerms[manageserver;<:cross_red:856744445395206144> | No cuentas con el permiso necesarios]`
})