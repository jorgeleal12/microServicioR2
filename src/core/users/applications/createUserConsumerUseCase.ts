
import { IcreateUserConsumerRepository} from "./icreateUserConsumerRepository";

export class CreateUserConsumerUseCase {
  constructor( private icreateUserConsumerRepository: IcreateUserConsumerRepository) {}

  async createUserConsumer() {
    return await this.icreateUserConsumerRepository.createUserConsumer();
  }
}

