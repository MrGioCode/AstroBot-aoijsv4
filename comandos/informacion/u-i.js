module.exports = ({
    name: "u-i",
    code: `
$reply[$messageID;{author:Informacion De Usuario:$userAvatar[$mentioned[1]]}
{description:
**Mencion: [<@$mentioned[1]>]**
**Nombre: [\`$userTag[$mentioned[1]]\`]**
**Etiqueta: [\`#$discriminator[$mentioned[1]]\`]**
**ID: [\`$mentioned[1]\`]**
**Inicio En Discord: [\`$creationDate[$mentioned[1];date]\`]**}
{thumbnail:$userAvatar[$mentioned[1]]}
{color:ORANGE}
{footer:$userTag $addTimestamp:$authorAvatar};no]
$onlyIf[$userExists[$mentioned[1]]==true;<:cross_red:856744445395206144> | ID invalida]
$argsCheck[>1;<:cross_red:856744445395206144> | Usuario no proporcionado]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquilo...]
$onlyIf[$getServerVar[informacion]==true;<:cross_red:856744445395206144> | Los comandos \`informativos\` no estan activados. Usa: !activar informacion]`
})
