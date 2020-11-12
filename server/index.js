const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const { graphqlHTTP } = require('express-graphql')

const graphqlSchema = require('./graphql/schema')
const graphqlResolvers = require('./graphql/resolvers')
const envs = require('./utils').getEnvs()

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

const ENVIRONMENT = envs.NODE_ENV || 'Development'
const PORT = envs.port || 8080

app.use(express.static(path.join(__dirname, "..", "build")))
app.use('/static', express.static(path.join(__dirname, '..", build/static')));
app.use(express.static("public"))

app.use('/api', graphqlHTTP({
  graphiql: ENVIRONMENT === 'Development',
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  customFormatErrorFn(err) {
    if (!err.originalError) {
      return err
    }
    const data = err.originalError.data
    const message = err.message || 'Ocurrió un error.'
    const code = err.originalError.code || 500
    return {
      message, status: code, data
    }
  }
}))

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, "..", "build")})
});

app.use((error, req, res, next) => {
  console.log(error)
  const status = error.statusCode || 500
  const data = error.data
  const message = error.message
  res.status(status).json({
    message,
    data,
  })
})

const server = app.listen(PORT, () => {
  console.log(`[${ENVIRONMENT}] Servidor arriba y corriendo en puerto ${PORT}.`)
})
