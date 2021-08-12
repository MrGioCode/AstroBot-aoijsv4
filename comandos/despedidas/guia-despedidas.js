module.exports = ({
    name: "guia-despedidas",
    code: `
$author[Guia Despedidas;$authorAvatar]
$description[
**<:chat:856976412417064980> ┃ 「Establece El Canal De Despedidas」**
**<:flecha:856958613205680218> :: \`!set-despedidas #ejemplo-despedidas\`**

**<:chat:856976412417064980> ┃ 「Establece El Mensaje De Despedidas」**
**<:flecha:856958613205680218> :: \`!set-msgdespedidas {user_tag} Se fue del servidor - Ejemplo\`**

**🔗 ┃ 「Variables」**
**1️⃣ :: \`{user_tag}\` - Muestra el nombre y la etiqueta del usuario saliente.**
**2️⃣ :: \`{user_name}\` - Muestra el nombre sin la etiqueta del usuario saliente.**
**3️⃣ :: \`{user_mention}\` - Muestra una mencion del usuario saliente**
**4️⃣ :: \`{members_count}\` - Muestra la cantidad de miembros en tu servidor.**]
$footer[$userTag $addTimestamp;$authorAvatar]
$color[GREEN]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquil@...]`
})
