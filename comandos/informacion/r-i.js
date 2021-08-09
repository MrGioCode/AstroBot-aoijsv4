module.exports = ({
  name: "r-i",
  code: `
$reply[$messageID;
{author:Informacion De Rol:$authorAvatar}
{description:
==> **Informacion \`@$roleName[$mentionedRoles[1]]\`**

**Name**
> \`$roleName[$mentionedRoles[1]]\`
**Mencion**
> <@!$mentionedRoles[1]>
**ID**
> \`$mentionedRoles[1]\`
**Color**
> \`$role[$mentionedRoles[1];hex]\`
**Creado**
> \`$role[$mentionedRoles[1];created]\`
**Posicion**
> \`$role[$mentionedRoles[1];position]\`}
{footer:$userTag $addTimestamp:$authorAvatar}{color:$role[$mentionedRoles[1];hex]};no]
$onlyIf[$roleExists[$mentionedRoles[1]]==true;<:cross_red:856744445395206144> | Rol no existente]
$onlyIf[$mentionedRoles[1]!=;<:cross_red:856744445395206144> | Menciona un rol no una ID]
$argsCheck[>1;<:cross_red:856744445395206144> | Rol no proporcionado]`
})
