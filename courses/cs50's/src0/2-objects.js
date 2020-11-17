
const o = new Object()
o.firstName = 'Laiana'
o.lastName = 'Santiago'
o.isCoding = true
o.greet = function() { console.log('Olá!') }

console.log(JSON.stringify(o))

const o2 = {}
o2['firstName'] = 'Laiana'
const a = 'lastName'
o2[a] = 'Santiago'

console.log(JSON.stringify(o2))

const o3 = {
  firstName: 'Laiana',
  lastName: 'Santiago',
  greet: function() {
    console.log('Oi')
  },
  address: {
    street: "df 150.",
    number: 'km 5'
  }
}

console.log(JSON.stringify(o3))

// see 3-objectsMutation.js for more objects

//output:

// {"firstName":"Laiana","lastName":"Santiago","isCoding":true}
// {"firstName":"Laiana","lastName":"Santiago"}
// {"firstName":"Laiana","lastName":"Santiago","address":{"street":"df 150.","number":"km 5"}}
