const request = require('supertest');
const app = require('../../src/app');
const conection = require('../../src/database/connection');

describe('ONG',()=>{
  beforeEach(async()=>{
    await conection.migrate.rollback();
    await conection.migrate.latest();
  }); 


  afterAll(async ()=>{
    await conection.destroy();

  });


  it('should be able to create a new ONG', async () => {   
    const res = await request(app).post('/ongs').send({      
      name : "APAC1",
	    email: "contato@xyz.com",
	    whatsapp: "8475856445",
    	city: "Rio do Sul",
	    uf: "SC"
    });

    expect(res.body).toHaveProperty('id');
    expect(res.body.id).toHaveLength(8);
  });

});