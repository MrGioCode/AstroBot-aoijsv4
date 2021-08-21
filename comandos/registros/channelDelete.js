module.exports = ({
    name: "",
    code: `
$author[Canal Borrado]
$description[
=> **Informacion**

**Nombre**
> \`\`\`$oldChannel[name]\`\`\`
**Posicion**
> \`\`\`$oldChannel[position]\`\`\`
**Tipo**
> \`\`\`$oldChannel[type]\`\`\`]
$color[RED]
$footer[$serverName $addTimestamp]
$setServerVar[logsnum;$sum[$getServerVar[logsnum];1]]
$onlyIf[$serverChannelExists[$getServerVar[logsvh]]==true;]`
})