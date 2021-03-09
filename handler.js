 //TODO: implement "API_responses" in every status code

 module.exports.balance = (event, context, callback) => {
     const { transactions } = JSON.parse(event.body);
     let response = {
         statusCode: 0,
         body: JSON.stringify({
             message: "hola"
         })
     };
     if (transactions == undefined || transactions == null || transactions == 0) {
         response = {
             statusCode: 500,
             body: JSON.stringify({
                 message: "Internal Server Error"
             })
         };
     } else {
         for (let transaction in transactions) {
             const { status, currency, amount } = transactions[transaction];
             if (amount == null || currency == null) {
                 response.statusCode = 400;
                 response.body = JSON.stringify({
                     message: "Bad Request, missing a required parameter"
                 });
             } else {
                 let balance = {
                     amounts: {
                         ars: 0,
                         usd: 0
                     }
                 };
                 for (let transaction in transactions) {
                     const { status, currency, amount } = transactions[transaction];
                     if (status === "success") {
                         if (currency === "ARS") {
                             balance.amounts.ars += amount;
                         } else {
                             balance.amounts.usd += amount;
                         }
                     }
                 }
                 response = {
                     statusCode: 200,
                     body: JSON.stringify({
                         message: "OK",
                         balance: balance
                     })
                 };
             }
         }
     }

     callback(null, response);
 };