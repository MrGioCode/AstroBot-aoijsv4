module.exports = ({
    name: "host",
    code: `
    $author[Host xAstroBot;$userAvatar[$clientID]]
    $description[
    ==> **Host xAstroBot Informacion**

    **Alojamiento**
    > [Railway](https://railway.app)
    **Latencia**
    > \`\`\`$pingms\`\`\`
    **Latencia DB**
    > \`\`\`$dbPingms\`\`\`
    **Uptime**
    > \`\`\`$uptime\`\`\`
    **Ram**
    > \`\`\`$rammb\`\`\`]
    $thumbnail[$userAvatar[$clientID]]
    $footer[$userTag $addTimestamp;$authorAvatar]
    $color[BLUE]`
})