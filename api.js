import express from "express";
const APi = express()

APi.listen(5000, () => console.log('SUCESSO'))

APi.get('/calculadora/somar/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)

    let soma = n1 + n2

    resp.send({
        val1: n1,
        val2: n2,
        res: soma
    })
})

APi.get('/calculadora/subtrair/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)

    let sub = n1 - n2

    resp.send({
        val1: n1,
        val2: n2,
        res: sub
    })
})

APi.get('/calculadora/multiplicar/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)

    let mult = n1 * n2

    resp.send({
        val1: n1,
        val2: n2,
        res: mult
    })
})

APi.get('/calculadora/dividir/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)

    let div = n1 / n2

    resp.send({
        val1: n1,
        val2: n2,
        res: div
    })
}) 

APi.get('/calculadora/dobro/:val', (req, resp) => {
    let val = Number(req.params.val)

    let dobro = val*2

    resp.send({
        val: val,
        res: dobro
    })
}) 

APi.get('/calculadora/somar', (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)

    let soma = n1 + n2

    resp.send({
        val1: n1,
        val2: n2,
        res: soma
    })
})

APi.get('/calculadora/subtrair', (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)

    let sub = n1 - n2

    resp.send({
        val1: n1,
        val2: n2,
        res: sub
    })
})

APi.get('/calculadora/multiplicar', (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)

    let mult = n1 * n2

    resp.send({
        val1: n1,
        val2: n2,
        res: mult
    })
})

APi.get('/calculadora/dividir', (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)

    let div = n1 / n2

    resp.send({
        val1: n1,
        val2: n2,
        res: div
    })
}) 

APi.get('/calculadora/dobro', (req, resp) => {
    let val = Number(req.query.val)

    let dobro = val*2

    resp.send({
        val: val,
        res: dobro
    })
}) 