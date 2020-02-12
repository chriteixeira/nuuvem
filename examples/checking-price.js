const nuuvem = require('../index');



nuuvem.checkPrice('witcher').then((result) => {
  console.log('Results for Witcher:');
  result.forEach(e => {
    console.log(`Title: ${e.title}`);
    console.log(`Price: ${e.currency} ${e.price}`);
    console.log(`Link: ${e.link}`);
  });
}).catch((err) => {

});