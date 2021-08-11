module.exports = ({
    name: "s-i",
    code: `
$reply[$messageID;{author:Informacion De Servidor:$authorAvatar}
{description:
==> **Informacion Servidor \`$serverName[$guildID]\`**

**Creador**
> <@$ownerID>
**Nombre**
> \`$serverName[$guildID]\`
**ID**
> \`$guildID\`
**Localizacion**
> \`$serverRegion\`
**Total De Canales**
> \`Texto $channelCount[text] | Voz $channelCount[voice] | Categorias $channelCount[category]\`
**Total De Miembros Y Roles**
> \`Roles $roleCount | Miembros $membersCount | Bots $botCount\`
**Roles**
> $guildRoles[mention]}
{color:ORANGE}
{footer:$userTag $addTimestamp:$authorAvatar};no]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]
$onlyIf[$getServerVar[informacion]==true;<:cross_red:856744445395206144> | Los comandos \`informativos\` no estan activados. Usa: !activar informacion]`
})
