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

let boasvindas = `
        Olá! Me chamo Gustavo Ribeiro da Rosa
        <br />
        Seja bem vindo ao meu portfolio acadêmico!
    `

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
    { nome: 'Banco de Dados Relacional', professor: "Juliana" },
    { nome: 'Estrutura de Dados', professor: "Fernando Masanori" },
    { nome: 'Desenvolvimento Web II', professor: "Cláudio" },
    { nome: 'Matemática para Computação', professor: "Reinaldo Arakaki" },
    { nome: 'Engenharia de Software II', professor: "José Walmir" },
    { nome: 'Técnicas de Programação I', professor: "Gerson" },
]

let contatos = [
    { texto: 'Email: gustavorib.rosa@gmail.com' },
    { texto: 'Número: (11) 11111-1111' },
    { texto: 'GitHub: https://github.com/gustasvos' }
]


let projetos = [
    {
        nome: 'Análise de Dados do Comércio Internacional do Estado de São Paulo',
        descricao: `(Realizado em equipe) Este projeto visa desenvolver um site que forneça através de gráficos, os dados disponíveis na base do Comex Stat do Ministério do Desenvolvimento, Indústria, Comércio e Serviços sobre as exportações e importações realizadas no estado de São Paulo ao longo dos anos. A partir deste, deverá ser possível identificar cenários de ascenção, estagnação ou declínio de municípios e/ou produtos no mercado internacional. Para o projeto a equipe utilizou as tecnologias Python, Flask, Pandas, Google Colab e Figma.`,
        hardSkills: 'Python (Flask e Pandas), HTML, CSS e MySQL.',
        softSkills: 'Metodologia Ágil, Autogerenciamento, Colaboração e Comunicação ativa.',
        repoLink: 'https://github.com/arthur-oliver/API-Crows',
        videoLink: '/assets/site-graficos.mp4'
    },
    {
        nome: 'Members Only',
        descricao: `Uma aplicação CRUD desenvolvida em Ruby on Rails seguindo as regras propostas no desafio encontrado em https://www.theodinproject.com/lessons/ruby-on-rails-members-only. Foi criado uma API e uma interface web que a permite a criação de posts para usuários, e algumas ações permitidas apenas para os usuários cadastrados e que estiverem logados.`,
        hardSkills: 'Ruby, Ruby on Rails, HTML e Bootstrap.',
        softSkills: 'Autonomia e Comunicação ativa (recebendo feedbacks e implementando alterações).',
        repoLink: 'https://github.com/gustasvos/members-only',
        videoLink: '/assets/members-only.mp4'
    },
    {
        nome: 'WeatherAPI',
        descricao: `Com propósito de estudar o manuseio de APIs no framework Ruby on Rails, desenvolvi uma simples aplicação web que mostra informações do clima do mundo todo com base na API meteorológica disponível em https://www.weatherapi.com/.`,
        hardSkills: 'Ruby, Ruby on Rails, HTML e Bootstrap.',
        softSkills: 'Autonomia.',
        repoLink: 'https://github.com/gustasvos/weather-api',
        videoLink: '/assets/wheaterapi.mkv'
    }
]

// DISCIPLINAS

app.get('/disciplinas', (req, res) => {
    res.render('pages/disciplinas', { disciplinas: disciplinas })
})

app.get('/disciplinas-json', (req, res) => {
    res.json(disciplinas)
})

app.post('/disciplinas', (req, res) => {
    const newItem = req.body
    disciplinas.push(newItem)
    res.json(newItem)
})

app.put('/disciplinas/:index', (req, res) => {
    const index = parseInt(req.params.index)
    const updatedItem = req.body

    if (index >= 0 && index < disciplinas.length) {
        disciplinas[index] = updatedItem
        res.json(updatedItem)
    } else {
        res.status(404).json({ message: 'Índice inválido ou disciplina não encontrada' })
    }
})

app.delete('/disciplinas/:index', (req, res) => {
    const index = parseInt(req.params.index)
    
    if (index >= 0 && index < disciplinas.length) {
        const removed = disciplinas.splice(index, 1)[0]
        res.status(200).json({ message: `Disciplina ${removed.nome} removida com sucesso.` })
    } else {
        res.status(404).json({ message: 'Índice inválido' })
    }
})



// app.put('/disciplinas/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const updatedItem = req.body
//     const i = disciplinas.findIndex(item => item.id === id)
//     if (i >= 0) {
//         disciplinas[i] = updatedItem
//         res.json(updatedItem)
//     } else {
//         res.status(404).json({ message: 'Disciplina não encontrada' })
//     }
// })


// app.delete('/disciplinas/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const i = disciplinas.findIndex(item => item.id === id)
//     if (i >= 0) {
//         const removed = disciplinas.splice(i, 1)[0]
//         res.status(200).json({ message: `Disciplina ${removed.nome} removida com sucesso.` })
//     } else {
//         res.status(404).json({ message: 'Disciplina não encontrada' })
//     }
// })


// PROJETOS

app.get('/projetos', (req, res) => {
    res.render('pages/projetos', { projetos: projetos })
})

app.get('/projetos-json', (req, res) => {
    res.json(projetos)
})

app.post('/projetos', (req, res) => {
    const newItem = req.body
    projetos.push(newItem)
    res.json(newItem)
})

app.put('/projetos/:index', (req, res) => {
    const index = parseInt(req.params.index)
    const updatedItem = req.body

    if (index >= 0 && index < projetos.length) {
        projetos[index] = updatedItem
        res.json(updatedItem)
    } else {
        res.status(404).json({ message: 'Índice inválido ou projeto não encontrado' })
    }
})

app.delete('/projetos/:index', (req, res) => {
    const index = parseInt(req.params.index)

    if (index >= 0 && index < projetos.length) {
        projetos.splice(index, 1)
        res.json({ message: `Projeto ${projetos[index].nome} removido com sucesso.` })
    } else {
        res.status(404).json({ message: 'Índice inválido ou projeto não encontrado' })
    }
})


app.get('/contatos', (req, res) => {
    res.render('pages/contatos', { contatos: contatos })
})

app.get('/contatos-json', (req, res) => {
    res.json(contatos)
})

app.post('/contatos', (req, res) => {
    const newItem = req.body
    contatos.push(newItem)
    res.json(newItem)
})

app.put('/contatos/:index', (req, res) => {
    const index = parseInt(req.params.index)
    const updatedItem = req.body

    if (index >= 0 && index < contatos.length) {
        contatos[index] = updatedItem
        res.json(updatedItem)
    } else {
        res.status(404).json({ message: 'Contato não encontrado' })
    }
})

app.delete('/contatos/:index', (req, res) => {
    const index = parseInt(req.params.index)

    if (index >= 0 && index < contatos.length) {
        contatos.splice(index, 1)
        res.json({ message: `Contato no índice ${index} removido com sucesso.` })
    } else {
        res.status(404).json({ message: 'Contato não encontrado' })
    }
})

// HOME

app.get('/', (req, res) => {
    res.render('pages/home', { boasvindas })
})

app.post('/', (req, res) => {
    const newItem = req.body.boasvindas
    boasvindas = newItem
    res.json({ boasvindas })
})

app.put('/', (req, res) => {
    const newItem = req.body.boasvindas
    boasvindas = newItem
    res.json({ boasvindas })
})


// SOBRE

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

app.get('/dashboard', (req, res) => {
  res.render('pages/dashboard', {
    totalDisciplinas: disciplinas.length,
    totalProjetos: projetos.length,
    totalContatos: contatos.length
  });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
