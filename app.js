import express from 'express'

import producer from './kafka-producer.js'

let app = express()

app.get('/event', (req, res) => {

    let event = {
        type: '/event', 
        userId: 1, 
        sessionId: 0, 
        data: "hello-world"
    }

    producer.sendRecord(event)

    res.send(event)
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
  })


