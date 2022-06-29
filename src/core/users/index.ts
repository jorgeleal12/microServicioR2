
import { CreateUserConsumerUseCase } from "./applications/createUserConsumerUseCase";
import { CreateUserConsumerRepository } from "./infrastructure/createUserConsumerRepository";


const createUserConsumerRepository  = new CreateUserConsumerRepository();
const createUserConsumerUseCase = new CreateUserConsumerUseCase(createUserConsumerRepository);


export { createUserConsumerUseCase };

