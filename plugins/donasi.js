let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  INDOSAT: 085749433476
╰────
╭─「 Donasi • Dompet Digital 」
│ •  DANA: 085749433476
│ •  OVO: 085749433476
│ •  GOPAY: 085749433476
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
