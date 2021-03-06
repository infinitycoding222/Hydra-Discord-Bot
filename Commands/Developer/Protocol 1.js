const Command = require('../../Structures/Command');
const ms = require('ms');
const {
    MessageEmbed
} = require('discord.js')
module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['protocol1', 'ID-2717', '2717', 'prtcl1'],
            name: 'protocol_1',
            category: 'Developer',
            description: ['Activates protocol 1 for backstage developing and testing without other people using the bot while this is activated'],
            disabled: false,
            clientPerms: [],
            userPerms: [],
            owner: true
        });
    }
    async run(message, args) {
        let tickNo = this.client.emojis.cache.get('657695046757384192'),
            tickYes = this.client.emojis.cache.get('657695069498900491'),
            sentient = this.client.emojis.cache.get('727220809181036700');
        let embed = new MessageEmbed()
        if (args[0] == 'status') {
            embed.setColor(this.client.config.color)
            embed.setDescription(`${sentient}\`Protocol 1\` is ${this.client.protocol_1 ? "Enabled" : "Disabled"}!`)
            message.channel.send(embed)
        }
        if (!args[0] && this.client.protocol_1 == false) {
            this.client.protocol_1 = true;
            embed.setColor("GREEN")
            embed.setDescription(`${tickYes} Activated \`Protocol 1\` Successfully!`)
            message.channel.send(embed)
            let channel = this.client.channels.cache.get('727498799974711316')
            channel.send(new MessageEmbed()
                .setColor(this.client.config.denied)
                .setDescription(`${tickYes} Activated \`Protocol 1\` Successfully!`))
            console.log(`${this.client.chalk.red(`[Client]`)} <=> ${this.client.chalk.bgCyan(this.client.user.username)} - ${this.client.chalk.green(`[${message.createdAt.toLocaleString('en-GB')}]`)} - ${this.client.chalk.yellow(`${message.author.tag}`)} <=> Executed Activation of ${this.client.chalk.blue(`Protocol 1`)} and it Activated Successfully!`)
        } else if (!args[0] && this.client.protocol_1 == true) {
            this.client.protocol_1 = false;
            embed.setColor("RED")
            embed.setDescription(`${tickNo} Disabled \`Protocol 1\` Successfully!`)
            message.channel.send(embed)
            let channel = this.client.channels.cache.get('727498799974711316')
            channel.send(new MessageEmbed()
                .setColor(this.client.config.denied)
                .setDescription(`${tickYes} Deactivated \`Protocol 1\` Successfully!`))
            console.log(`${this.client.chalk.red(`[Client]`)} - ${this.client.chalk.green(`[${message.createdAt.toLocaleString('en-GB')}]`)} - ${this.client.chalk.yellow(`${message.author.tag}`)} <=> Executed Deactivation of ${this.client.chalk.blue(`Protocol 1`)} and it Deactivated Successfully!`)
        }
    }
};