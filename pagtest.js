
var fs = require('fs'),
    pagseguro = require('pagseguro'),
    config = fs.readFileSync('pagconfig.json'),
    pag = new pagseguro(config);

// config = { email: 'your@email.com', token: 'your_token', mode: 'sandbox' }

pag.currency('BRL');
pag.reference('123456');

pag.addItem({
  id: 1,
  description: 'first product',
  amount: '120.00',
  quantity: 1
});

pag.buyer({
  name: 'John Doe'
  email: 'johndoe@mail.com',
  phoneAreaCode: '19',
  phoneNumber: '999998888'
});

pag.setRedirectURL('http://google.com');

pag.send(function(err, res) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(res);
});
