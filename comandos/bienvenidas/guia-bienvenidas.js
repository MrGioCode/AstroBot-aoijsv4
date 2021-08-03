module.exports = ({
    name: "guia-bienvenidas",
    code: `
$author[Guia Bienvenidas;$authorAvatar]
$description[
**<:chat:856976412417064980> ┃ 「Establece El Canal De Bienvenidas」**
**<:flecha:856958613205680218> :: \`!set-bienvenidad #ejemplo-bienvenidas\`**

**<:chat:856976412417064980> ┃ 「Establece El Mensaje De Bienvenidas」**
**<:flecha:856958613205680218> :: \`!set-msgbienvenidas {user_tag} bienvenido al servidor - Ejemplo\`**

**🔗 ┃ 「Variables」**
**1️⃣ :: \`{user_tag}\` - Muestra el nombre y la etiqueta del usuario entrante.**
**2️⃣ :: \`{user_name}\` - Muestra el nombre sin la etiqueta del usuario entrante.**
**3️⃣ :: \`{user_mention}\` - Muestra una mencion del usuario entrante**
**4️⃣ :: \`{members_count}\` - Muestra la cantidad de miembros en tu servidor.**]
$footer[$userTag $addTimestamp;$authorAvatar]
$color[GREEN]
$cooldown[3s;<:cross_red:856744445395206144> | Tranquil@...]
$onlyIf[$getServerVar[bienvenidas]==true;<:cross_red:856744445395206144> | La categoria \`bienvenidas\` no esta activada. Uso: !activar bienvenidas]`
})
