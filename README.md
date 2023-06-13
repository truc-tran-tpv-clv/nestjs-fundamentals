## Naming Convention
- Follow [Document](https://oneline.atlassian.net/wiki/spaces/BTH/pages/1859190805/APM+NestJS+-+Naming+convention)

## Fastify
- Use Fastify replace Express 
- Setup global validation Pipe

## Provider
- Use [Standard Providers](https://docs.nestjs.com/fundamentals/custom-providers#standard-providers) 
- Use [Asynchronous providers](https://docs.nestjs.com/fundamentals/async-providers) when we need to clarify. 

## Module
- Only export share service

## DTO
- Use `class-validator`, `class-transformer`
- Use decorators for properties
- Use `plainToInstance` convert from `JSON Object` to `DTO`
 
## Circular dependency
- Don't export all files from `index.ts`
- Should read carefully [Circular dependency](https://docs.nestjs.com/fundamentals/circular-dependency)

