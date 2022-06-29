
import { createUserConsumerUseCase } from "./core/users";

setTimeout(function () {
  createUserConsumerUseCase.createUserConsumer()
}, 5000);