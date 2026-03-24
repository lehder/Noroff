```sh
npm install swagger-autogen swagger-ui-express
```

docs:
https://swagger-autogen.github.io/docs/getting-started/quick-start

swagger.js

```js
const swaggerAutogen = require("swagger-autogen")();
const outputFile = "./swagger-output.json"; // output
const endpointsFiles = ["./app.js"]; // input

swaggerAutogen(outputFile, endpointsFiles /* , doc */);
```

Inside the endpoints

```js
{
  // #swagger.key = "your value"
  // #swagger.description = "Describe the endpoint"
  // #swagger.produces = ["application/json"] // What the endpoint sends out
  // #swagger.consumes = ["application/json"] // What the endpoint takes in
  // #swagger.consumes = ["application/json"] // What the endpoint takes in
  /* #swagger.parameters['parameterName'] = {
            in: 'body',
            description: 'Some description...'
            type: 'number'
    } */
}
```

app.js

```js
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
```