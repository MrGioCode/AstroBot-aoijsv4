module.exports = ({
    name: "b-i",
    code: `
$reply[$messageID;{author:Informacion $userTag[$clientID]:$userAvatar[$clientID]}
{description:
==> **Informacion Sobre El Bot**

**Creador**
> \`$userTag[$botOwnerID]\`
**Nombre**
> \`$userTag[$clientID]\`
**ID**
> \`$clientID\`
**Activo Desde**
> \`$creationDate[$clientID;time]\`
**Servidores Y Usuarios**
> \`$serverCount | $allMembersCount\`

==> **Mas Informacion Sobre El Bot**

**Sistema**
> \`\`\`Linux\`\`\`
**OS**
> \`\`\`Ubuntu 20.04\`\`\`
**Host**
> \`\`\`VPS Linux\`\`\`
**NodeJS**
> \`\`\`v16.6.1\`\`\`
**AoiJS**
> \`\`\`$packageVersion\`\`\`
**Ram**
> \`\`\`$ram\`\`\`
**Cpu**
> \`\`\`$cpu\`\`\`}
{thumbnail:$userAvatar[$clientID]}
{color:YELLOW}
{footer:$userTag $addTimestamp:$authorAvatar};no]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]
$onlyIf[$getServerVar[informacion]==true;<:cross_red:856744445395206144> | Los comandos \`informativos\` no estan activados. Usa !activar informacion]`
})
