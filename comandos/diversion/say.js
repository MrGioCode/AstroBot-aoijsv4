module.exports = ({
  name: "say",
  code: `
$message
$disableEveryoneMentions
$onlyIf[$checkContains[$message;@]==true;<:cross_red:856744445395206144> | Se bloqueo el uso de algunos caracteres]
$onlyIf[$checkContains[$message;discord.gg;dsc.gg;https://]==false;<:cross_red:856744445395206144> | No enlaces]`
})