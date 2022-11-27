const app = require('express')()
const http = require('http')

const config = require('../config/config')

const DEVICES = config.DEVICES

app.get('/api/device/:dev_id/button/:btn_id', (req, res) => {
    DEVICES.forEach(device => {
        if (device.id == req.params.dev_id) {
            console.log(`Pressed btn #${req.params.btn_id} on device #${req.params.dev_id} with ip: ${device.ip}`)
            res.json('')
            let _URL = `http://${device.ip}/instrumentctrl/vnc/php/sethardkeyaction.php?ID=${req.params.btn_id}`
            console.log(_URL)
            http.get(_URL)
                .on('error', err => {
                    console.log('ERROR: ', err)
                })
                
        }
    })
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`)
    DEVICES.forEach(device => {
        console.log(`DEVICE ${device.id}: ${device.ip}`)
    })
})


