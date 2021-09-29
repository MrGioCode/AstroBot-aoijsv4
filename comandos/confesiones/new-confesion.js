module.exports = ({
    name: "new-confesion",
    code: `
    $author[Nueva Confesion!! 👀;$authorAvatar]
    $description[
    **Mensaje** : \`$message\`
    **Por** : \`Anonimo\`]
    $color[BLUE]
    $useChannel[$getServerVar[confesiones]]
    $channelSendMessage[$channelID;<:tick:856950258219352075> | Confesion enviada con exito!]
    $onlyIf[$serverChannelExists[$getServerVar[confesiones]]==true;<:cross_red:856744445395206144> | No hay canal establecido]
    $cooldown[1m;<:cross_red:856744445395206144> | Tranquil@... \`%time%\`]`
})