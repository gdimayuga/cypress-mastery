describe('Store API Tests', () => {
  const updateUser = {
    "id": 1,
    "username": "hahaz",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "userStatus": 0
  };

  it('GET - Returns pet inventories by status', () => {
    cy.api({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/store/inventory`
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('sold');
    });
  });

  it('POST - Place an order for a pet', () => {
    cy.api({
      method: 'POST',
      url: `https://petstore.swagger.io/v2/store/order`,
      body: {
        "shipDate": "2025-04-22T04:23:00.976+0000",
        "status": "placed",
        "complete": true,
        "id": 1,
        "petId": 0,
      }
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1); 
    });
  });

  it('GET - Find purchase order by ID', () => {
    cy.api({
      method: 'POST',
      url: `https://petstore.swagger.io/v2/store/order`,
      body: {
        "shipDate": "2025-04-22T04:23:00.976+0000",
        "status": "placed",
        "complete": true,
        "id": 1,
        "petId": 0,
      }
    })
    cy.api({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/store/order/1`
    }).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
    });
  });

  it('GET - Find purchase order by invalid ID (should return 404)', () => {
    cy.api({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/store/order/abc`,
      failOnStatusCode: false 
    }).should((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('DELETE - Delete purchase order by ID', () => {
    cy.api({
      method: 'POST',
      url: `https://petstore.swagger.io/v2/store/order`,
      body: {
        id: 3,
        petId: 123,
        quantity: 1,
        shipDate: new Date().toISOString(),
        status: 'placed',
        complete: true
      }
    }).should((response) => {
      expect(response.status).to.eq(200)
    })
    
    cy.api({
      method: 'DELETE',
      url:  `https://petstore.swagger.io/v2/store/order/3`
    }).should((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('DELETE - Delete purchase order by ID', () => {
    cy.api({
      method: 'POST',
      url: `https://petstore.swagger.io/v2/store/order`,
      body: {
        id: 3,
        petId: 123,
        quantity: 1,
        shipDate: new Date().toISOString(),
        status: 'placed',
        complete: true
      }
    }).should((response) => {
      expect(response.status).to.eq(200)
    })
    
    cy.api({
      method: 'DELETE',
      url:  `https://petstore.swagger.io/v2/store/order/1`,
      failOnStatusCode: false 
    }).should((response) => {
      expect(response.status).to.eq(404)
    })
  })

});

describe('User API Tests', () => {

  const updateUser = {
    "id": 1,
    "username": "hahaz",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "userStatus": 0
  };

  it ('POST - Create a list of users with given input array', () => {

    const users = [
      {
        "id": 0,
        "username": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": 0
      },
      {
        "id": 1,
        "username": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": 0
      }
    ]

    cy.api({
      method: 'POST',
      url: `https://petstore.swagger.io/v2/user/createWithList`,
      body: users
    }).should((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it ('POST - Create a list of users with given input array', () => {

    const users = [
      {
        "id": 0,
        "username": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": 0
      },
      {
        "id": 1,
        "username": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": 0
      }
    ]

    cy.api({
      method: 'POST',
      url: `https://petstore.swagger.io/v2/user/createWithArray`,
      body: users
    }).should((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('GET - Get user by user name', () => {

    cy.api({
      method: 'POST',
      url: `https://petstore.swagger.io/v2/user`,
      body: {
        "id": 0,
        "username": "haha",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": 0
      }
    })

    cy.api({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/user/haha`
    }).should((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('PUT - Updated user', () => {

    cy.api({
      method: 'POST',
      url: `https://petstore.swagger.io/v2/user`,
      body: {
        "id": 0,
        "username": "haha",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": 0
      }
    })

    cy.api({
      method: 'PUT',
      url: `https://petstore.swagger.io/v2/user/haha`,
      body: updateUser
    }).should((response) => {
      expect(response.status).to.eq(200)
    })

    cy.api({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/user/haha`
    }).should((response) => {
      expect(response.status).to.eq(200);
      return response.body.username === updateUser.username;
    })
  })

  it('DELETE - Delete User', () => {
    cy.api({
      method: 'POST',
      url: `https://petstore.swagger.io/v2/user`,
      body: {
        "id": 0,
        "username": "haha",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": 0
      }
    }).then(() => {
      cy.api({
        method: 'DELETE',
        url: `https://petstore.swagger.io/v2/user/haha`
      }).then((response) => {
        cy.log('DELETE Response: ', JSON.stringify(response));
          expect(response.status).to.eq(200);
      });
        cy.wait(1000); 
    });
  });

  it('GET - Logs user into the system', () => {

    const queryParams = {
      username: 'haha', 
      password: 'password' 
    };

    cy.api({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/user/login`,
      qs: queryParams
    }).should((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('GET - Logs out current logged in user session', () => {
    cy.api({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/user/logout`
    }).should((response) => {
      expect(response.status).to.eq(200)
    })
  })

});

