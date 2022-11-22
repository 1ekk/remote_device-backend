const app = require('express')()
const http = require('http')

const config = require('./config/config')

const DEVICE_PORT = config.DEVICE_PORT
const DEVICES = config.DEVICES

app.get('/api/device/:dev_id/button/:btn_id', (req, res) => {
    let data = ''

    DEVICES.forEach(device => {
        if (device.id == req.params.dev_id) {
            console.log(`Pressed btn #${req.params.btn_id} on device #${req.params.dev_id} with ip: ${device.ip}`)
            res.json('TEST')

            let _URL = `http://${device.ip}:${DEVICE_PORT}/instrumentctrl/vnc/php/sethardkeyaction.php?ID=${req.params.btn_id}`
            console.log(_URL)
            http.get(_URL, (resp) => {
                resp.on('data', (chunk) => {
                    data += chunk
                })
                resp.on('end', () => {
                    res.sendStatus(200)
                })
            }).on('error', (err) => {
                console.log('ERROR: ', err)
            })
        }
    })
})

const port = process.env.PORT || 8080

app.listen(port, () => {console.log(`LISTENING ON PORT ${port}`)})


