Users API for learning simple RESTful principles

# users-api
### How use this api?
You have few endpoints: 

#### GET https://test-users-api.herokuapp.com/users/ 
Show your all created users. No parameters.

#### GET https://test-users-api.herokuapp.com/users/:id
Show your only one user by id. No parameters.

#### POST https://test-users-api.herokuapp.com/users/ 
Creating new user. Required parameters: name -> String, age -> Number;

#### PUT https://test-users-api.herokuapp.com/users/:id
Editing user by ID, sending in URL. Avialible parameters: name -> String, age -> Number

#### DELETE https://test-users-api.herokuapp.com/users/:id
Deleting user by ID, sending in URL. No parameters.

## Example fetch request
Please pay attention to HEADERS and JSON.stringify!

  ```javascript
  fetch('https://test-users-api.herokuapp.com/users', {
    method: 'POST',
    body: JSON.stringify({ name: "NEW", age: 12}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });
  ```
