const { server } = require("./index");

const schemas = [
  {
    $id: "postProduct",
    type: "object",
    additionalProperties: false,
    required: ["title", "price", "description", "stock"],
    properties: {
      name: {
        type: "string",
        minLength: 2,
        maxLength: 50,
      },
      price: {
        type: "number",
        exclusiveMinimum: 0,
        exclusiveMaximum: 100000000,
      },
      description: {
        type: "string",
        minLength: 2,
        maxLength: 300,
      },
      stock: {
        type: "number",
      },
    },
  },
  {
    $id: "putProduct",
    type: "object",
    additionalProperties: false,
    anyOf: [
      { required: ["title"] },
      { required: ["price"] },
      { required: ["description"] },
      { required: ["stock"] },
    ],
    properties: {
      title: {
        type: "string",
        minLength: 2,
        maxLength: 50,
      },
      price: {
        type: "number",
        exclusiveMinimum: 0,
        exclusiveMaximum: 100000000,
      },
      description: {
        type: "string",
        minLength: 2,
        maxLength: 300,
      },
      stock: {
        type: "number",
      },
    },
  },
];

schemas.forEach((schema) => server.addSchema(schema));
