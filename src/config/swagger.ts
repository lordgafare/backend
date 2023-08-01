import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Your API",
      version: "1.0.0",
      description: "API documentation using Swagger",
    },
    servers: [
      {
        url: "http://localhost:6476",
      },
    ],
  },
  apis: ["./src/controllers/*.ts"],
};

const specs = swaggerJsdoc(options);

export default specs;
