const express = require('express');
const server = express();
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const equipments = require('./src/data/equipments.json')
const materials = require('./src/data/materials.json')
const purchase_orders = require('./src/data/purchase_orders.json')
const sales_orders = require('./src/data/sales_orders.json')
const workforce = require('./src/data/workforce.json')

const cors = require('cors')


//Criando a documentação da API
const swaggerOptions = {
    swaggerDefinition: {
    info: {
        title: "API Swagger",
        version: "1.0.00",
        description: "Documentação da API"
    }       
    },
    apis: ['./index.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
server.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
//a documentação está salva no endereço localhost:4000/api-doc

/** 
* @swagger 
* /equipments:
*    get:
*       description: Pegar os valores dos equipamentos
*       responses:
*           200:
*             description: Success   
*
 */

/** 
* @swagger 
* /materials:
*    get:
*       description: Pegar os valores dos produtos
*       responses:
*           200:
*             description: Success   
*
 */

/** 
* @swagger 
* /purchase_orders:
*    get:
*       description: Pegar os valores dos Pedidos de Compra
*       responses:
*           200:
*             description: Success   
*
 */

/** 
* @swagger 
* /sales_orders:
*    get:
*       description: Pegar os valores dos Pedidos de Venda
*       responses:
*           200:
*             description: Success   
*
 */

/** 
* @swagger 
* /workforce:
*    get:
*       description: Pegar os valores da Mão de obra
*       responses:
*           200:
*             description: Success   
*
 */

//----------

//rotas 
server.use(cors())

server.get('/equipments', function(req, res){
    return res.json(equipments)
})
server.get('/materials', function(req, res){
    return res.json(materials)
})
server.get('/purchase_orders', function(req, res){
    return res.json(purchase_orders)
})
server.get('/sales_orders', function(req, res){
    return res.json(sales_orders)
})
server.get('/workforce', function(req, res){
    return res.json(workforce)
})

//está rodando na porta 4000
server.listen(4000, function(){
    console.log('servidor está funcionando')
})
