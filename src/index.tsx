import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Programa de Blockchain',
          type: 'deposit',
          category: 'Software',
          amount: 10000,
          createdAt: new Date('2021-11-10 09:00:02'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casas',
          amount: 1200,
          createdAt: new Date('2021-10-10 09:00:02'),
        },
        {
          id: 3,
          title: 'Roupas',
          type: 'withdraw',
          category: 'Esteticas',
          amount: 400,
          createdAt: new Date('2021-10-09 09:00:02'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transactions', data)
    })
  },
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
