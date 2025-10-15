const express = require('express')
const bodyParser = require('body-parser');
const ejsLocals = require('ejs-locals')
const path = require('path')


const app = express()
const PORT = 3050

app.engine('ejs', ejsLocals)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(express.json())
app.use(bodyParser.json());

let descricao = `
        Meu nome é Gustavo Ribeiro da Rosa sou estudante de programação de São José dos Campos-SP. Gosto de
        estudar principalmente tecnologias para desenvolvimento Web e Banco de Dados e desejo me especializar
        nestas áreas.
        Atualmente estou cursando o curso superior de Desenvolvimento de Software Multiplataforma.<br /><br />

        Além da área de tecnologia, meus maiores gostos pessoais são videogames músicas. No meu tempo livre
        geralmente estou jogando algo e sempre ouvindo músicas. Gosto muito de descobrir
        novos álbuns e procurar a história por trás das produções. <br /><br />

        Aqui você poderá conhecer os destaques da minha carreira como desenvolvedor!
    `

let disciplinas = [
    { nome: 'Programação Web', cargaHoraria: 60 },
    { nome: 'Banco de Dados', cargaHoraria: 80 },
    { nome: 'Algoritmos e Estruturas de Dados', cargaHoraria: 100 }
]

let contatos = [
    { texto: 'Email: gustavo@example.com' },
    { texto: 'Número: (11) 91234-5678' },
    { texto: 'GitHub: https://github.com/gustasvos' }
]

// let descricao = [
//     { nome: 'Programação Web', cargaHoraria: 60 },
//     { nome: 'Banco de Dados', cargaHoraria: 80 },
//     { nome: 'Algoritmos e Estruturas de Dados', cargaHoraria: 100 }
// ]

let projetos = [
    {
        nome: 'Análise de Dados do Comércio Internacional do Estado de São Paulo',
        descricao: `Este projeto visa desenvolver um site que forneça através de gráficos, os dados disponíveis na base do Comex Stat do Ministério do Desenvolvimento, Indústria, Comércio e Serviços sobre as exportações e importações realizadas no estado de São Paulo ao longo dos anos. A partir deste, deverá ser possível identificar cenários de ascenção, estagnação ou declínio de municípios e/ou produtos no mercado internacional. Para o projeto a equipe utilizou as tecnologias Python, Flask, Pandas, Google Colab e Figma.`,
        hardSkills: 'Python (Flask e Pandas), HTML, CSS e MySQL.',
        softSkills: 'Metodologia Ágil, Autogerenciamento, Colaboração e Comunicação ativa.',
        repoLink: 'https://github.com/arthur-oliver/API-Crows',
        videoLink: 'static/assets/site-graficos.mp4'
    },
    {
        nome: 'Members Only',
        descricao: `Uma aplicação CRUD desenvolvida em Ruby on Rails seguindo as regras propostas no desafio encontrado em https://www.theodinproject.com/lessons/ruby-on-rails-members-only. Foi criado uma API e uma interface web que a permite a criação de posts para usuários, e algumas ações permitidas apenas para os usuários cadastrados e que estiverem logados.`,
        hardSkills: 'Ruby, Ruby on Rails, HTML e Bootstrap.',
        softSkills: 'Autonomia e Comunicação ativa (recebendo feedbacks e implementando alterações).',
        repoLink: 'https://github.com/gustasvos/members-only',
        videoLink: 'static/assets/members-only.mp4'
    },
    {
        nome: 'WeatherAPI',
        descricao: `Com propósito de estudar o manuseio de APIs no framework Ruby on Rails, desenvolvi uma simples aplicação web que mostra informações do clima do mundo todo com base na API meteorológica disponível em https://www.weatherapi.com/.`,
        hardSkills: 'Ruby, Ruby on Rails, HTML e Bootstrap.',
        softSkills: 'Autonomia.',
        repoLink: 'https://github.com/gustasvos/weather-api',
        videoLink: 'static/assets/wheaterapi.mkv'
    }
]

app.get('/disciplinas', (req, res) => {
    res.render('pages/disciplinas', { disciplinas: disciplinas })
})

app.post('/disciplinas', (req, res) => {
    const newItem = req.body
    disciplinas.push(newItem)
    res.json(newItem)
})

app.put('/disciplinas/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const updatedItem = req.body
    const i = disciplinas.findIndex(item => item.id === id)
    if (i >= 0) {
        disciplinas[i] = updatedItem
        res.json(updatedItem)
    } else {
        res.status(404).json({ message: 'Disciplina não encontrada' })
    }
})

app.delete('/disciplinas/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const i = disciplinas.findIndex(item => item.id === id)
    if (i >= 0) {
        disciplinas.splice(i, 1)
        res.sendStatus(204)
    } else {
        res.status(404).json({ message: 'Disciplina não encontrada' })
    }
})

app.get('/projetos', (req, res) => {
    res.render('pages/projetos', { projetos: projetos })
})

app.post('/projetos', (req, res) => {
    const newItem = req.body
    projetos.push(newItem)
    res.json(newItem)
})

app.put('/projetos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const updatedItem = req.body
    const i = projetos.findIndex(item => item.id === id)
    if (i >= 0) {
        projetos[i] = updatedItem
        res.json(updatedItem)
    } else {
        res.status(404).json({ message: 'Projeto não encontrado' })
    }
})

app.delete('/projetos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const i = projetos.findIndex(item => item.id === id)
    if (i >= 0) {
        projetos.splice(i, 1)
        res.sendStatus(204)
    } else {
        res.status(404).json({ message: 'Projeto não encontrado' })
    }
})

app.get('/contatos', (req, res) => {
    res.render('pages/contatos', { contatos: contatos })
})

app.post('/contatos', (req, res) => {
    const newItem = req.body
    contatos.push(newItem)
    res.json(newItem)
})

app.put('/contatos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const updatedItem = req.body
    const i = contatos.findIndex(item => item.id === id)
    if (i >= 0) {
        contatos[i] = updatedItem
        res.json(updatedItem)
    } else {
        res.status(404).json({ message: 'Contato não encontrado' })
    }
})

app.delete('/contatos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const i = contatos.findIndex(item => item.id === id)
    if (i >= 0) {
        contatos.splice(i, 1)
        res.sendStatus(204)
    } else {
        res.status(404).json({ message: 'Contato não encontrado' })
    }
})


app.get('/sobre', (req, res) => {
    res.render('pages/sobre', { descricao })
})

app.post('/sobre', (req, res) => {
    const newItem = req.body.texto
    descricao = newItem
    res.json({ descricao })
})

app.put('/sobre', (req, res) => {
    const updatedItem = req.body.texto
    descricao = updatedItem
    res.json({ descricao })
})

app.delete('/sobre', (req, res) => {
    descricao = ""
    res.sendStatus(204)
})

app.get('/teste', (req, res) => {
    res.render('index')
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
