module.exports = ({
    channel: "$getServerVar[verifych]",
    code: `
    <@$authorID>
    $description[<:flecha:856958613205680218> | \`$userTag\` Verifica usando **!verify $getServerVar[verifycode]**]
    $color[BLUE]
    $onlyIf[$isBot[$authorID]==false;]
    $onlyIf[$serverChannelExists[$getServerVar[verifych]]==true;]`,
    type: 'joinCommand'
})