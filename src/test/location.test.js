const supertest = require('supertest')
// import {build as app} from './app.js'
const build = require('../app')

describe('Test /location',()=>{

    test('Response a Json format', async ()=>{
        const app = build()
        await app.ready()
        const res = await supertest(app.server)
        .get('/v1/location')
        .expect(200)
        .expect('Content-type',/application\/json/)
    })

    test('Response a Json with valid information',async () =>{
        const app = build()
        await app.ready()
        const res = await supertest(app.server)
            .get('/v1/location')

        expect(res.body).toHaveProperty('status')
        expect(res.body['status']).toBe('success')
        expect(res.body).toHaveProperty('lat')
        expect(res.body).toHaveProperty('lon')
    })

    
})