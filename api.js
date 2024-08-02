import express from "express";
const APi = express()

APi.listen(5000,()=>console.log('SUCESSO'))

APi.get('/calculador/somar/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)

    let soma = n1 + n2
    resp.send({
        res : soma
    })
})  

APi.get('/calculador/subtrair/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)

    let sub = n1 - n2
    resp.send({
        res : sub
    })
}) 