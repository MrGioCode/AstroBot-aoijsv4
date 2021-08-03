module.exports = ({
    channel: "$getServerVar[welcomech]",
    code: `
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[welcomemsg];{user_tag};$userTag];{user_name};$username];{user_mention};<@$authorID>];{members_count};$membersCount]`,
    type: 'joinCommand'
})
