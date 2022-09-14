/* eslint-disable no-undef */
const supertest = require('supertest')
// import {build as app} from './app.js'
const build = require('../app')

const my_ip = '181.46.66.9'

const app = build({trustProxy: true})

beforeAll( async ()=>{
    await app.ready()
})

describe('Test /location',()=>{

    test('Response a Json format', async ()=>{
        await supertest(app.server)
        .get('/v1/location')
        .set('Accept', 'application/json')
        .set('X-Forwarded-For', my_ip)
        .expect(200)
        .expect('Content-type',/application\/json/)
    })

    test('Response a Json with valid information',async () =>{
        const res = await supertest(app.server)
            .get('/v1/location')
            .set('Accept', 'application/json')
            .set('X-Forwarded-For', my_ip)

        expect(res.body).toHaveProperty('status')
        expect(res.body['status']).toBe('success')
        expect(res.body).toHaveProperty('lat')
        expect(res.body).toHaveProperty('lon')
    })

    
})