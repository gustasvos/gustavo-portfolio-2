const express = require('express')
const app = express()
const PORT = 3050

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))
app.use(express.json())

const createRoutes = (nomeRota, arr) => {
    app.get(`/${nomeRota}`, (req, res) => {
        res.json(arr)
    })

    app.post(`/${nomeRota}`, (req, res) => {
        const newItem = req.body
        arr.push(newItem)
        res.json(newItem)
    })

    app.put(`/${nomeRota}/:id`, (req, res) => {
        const id = parseInt(req.params.id)
        const updatedItem = req.body

        const i = arr.findIndex(item => item.id === id)
        if (i >= 0) {
            arr[index] = updatedItem
            res.json(updatedItem)
        } else {
            res.json({ message: 'Item não encontrado' })
        }
    })

    app.delete(`/${nomeRota}/:id`, (req, res) => {
        const id = parseInt(req.params.id)

        const i = arr.findIndex(item => item.id === id)
        if (i >= 0) {
            arr.splice(index, 1)
            res.send()
        } else {
            res.json({ message: 'Item não encontrado' })
        }
    })
}

let disciplinas = []
let projetos = []
let contatos = []
let descricao = []

createRoutes('disciplinas', disciplinas)
createRoutes('projetos', projetos)
createRoutes('contatos', contatos)
createRoutes('sobre', descricao)

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/sobre', (req, res) => {
    res.render()
})

app.get('/dashboard', (req, res) => {
    res.render()
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
