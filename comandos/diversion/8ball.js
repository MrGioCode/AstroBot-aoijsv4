module.exports = ({
  name: "8ball",
  code: `
$author[8ball!! 🎱;$authorAvatar]
$description[
**Pregunta**
> $message
**Respuesta**
> \`$randomText[si;no;si.;no.;que;bruh;nose;.;brutal;si hazlo;no lo hagas;pero;no me interesa]\`]
$footer[$userTag[$authorID];$authorAvatar]
$color[BLUE]
$onlyIf[$charCount[$message]<20;<:cross_red:856744445395206144> | Maximo \`10\` caracteres]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquil@...]`
})