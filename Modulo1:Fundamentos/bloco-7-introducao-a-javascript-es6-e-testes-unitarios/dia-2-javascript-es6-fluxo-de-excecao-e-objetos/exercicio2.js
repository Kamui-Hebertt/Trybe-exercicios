const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const delivery = order.order.delivery.deliveryPerson;
  const secPerson = order['name'];
  const Phone = order['phoneNumber'];
  const address = order.address.street;

  
  console.log(`Olá ${delivery} entrega para: ${secPerson}, Telefone: ${Phone}, R. ${address}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);

}

customerInfo(order);

const orderModifier = (order) => {
  const newPerson = order.name = 'Luiz Silva';
  const newtotal = order.payment.total = '50';
  console.log(`Olá ${newPerson}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${total}.`)

}

orderModifier(order);