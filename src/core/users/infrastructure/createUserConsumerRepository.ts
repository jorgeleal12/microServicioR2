import { amqp } from "../../../shared/rabittConnect";

import { IcreateUserConsumerRepository } from "../applications/icreateUserConsumerRepository";

export class CreateUserConsumerRepository implements IcreateUserConsumerRepository {


  async createUserConsumer(): Promise<any> {
    await amqp.channel.consume('user', (message: any) => {
      let user = JSON.parse(message.content.toString())
      console.log(user);
    })
  }
}