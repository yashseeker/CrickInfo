

const QRCode = require('qrcode')

const opts = {
  errorCorrectionLevel: 'H',
  type: 'terminal',
  quality: 0.95,
  margin: 1,
  color: {
    dark: '#208698',
    light: '#FFF',
  },
}


QRCode.toFile('qrCode.png',, opts)
