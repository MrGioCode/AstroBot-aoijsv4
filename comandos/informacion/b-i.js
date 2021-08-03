module.exports = ({
    name: "b-i",
    code: `
$reply[$messageID;{author:Informacion $userTag[$clientID]:$userAvatar[$clientID]}
{description:
**Dueño: [\`$userTag[$botOwnerID]\`]**
**Dueño ID: [\`$botOwnerID\`]**
**Nombre: [\`$username[$clientID]\`]**
**Etiqueta: [\`#$discriminator[$clientID]\`]**
**ID: [\`$clientID\`]**
**Mi Soporte: [[AQUI](https://discord.gg/kHv3dV3KeW)]**
**Host: [\`Termux\` - \`Host Local\`]**
**Servidores y Usuarios: [\`Servidores - $serverCount\`|\`Usuarios - $allMembersCount\`]**
**Activo Desde: [\`$creationDate[$clientID;time]\`]**
**Paquetes: [\`Aoi.JS\`|\`Discord.JS\`]**
**Ram: [\`$ramMB\`/\`-GB\`]**
**Disk: [\`32MB\`/\`-GB\`]**
**CPU: [\`$cpu%\`/\`-%\`]**}
{thumbnail:$userAvatar[$clientID]}
{color:YELLOW}
{footer:$userTag $addTimestamp:$authorAvatar};no]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]
$onlyIf[$getServerVar[informacion]==true;<:cross_red:856744445395206144> | Los comandos \`informativos\` no estan activados. Usa !activar informacion]`
})
