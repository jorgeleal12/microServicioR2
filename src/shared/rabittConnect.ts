// import amqplib, { Connection, Channel } from 'amqplib'


// export default  class IRabbitMQ {
//   private static instance: IRabbitMQ

//   private static connection: Connection;
//   private static channel: Channel;

//   private constructor() {
//     // this.init();
//   }
//   public static async init() {
//     this.connection = await amqplib.connect('amqp://guest:guest@localhost:5672')
//     this.channel = await this.connection.createChannel();
//     //  console.log(this.channel)

//   }
//   public static async getInstance() {
//     if (!this.instance) {
//       await this.init();
//       this.instance = new IRabbitMQ();

//     }
//     return this.instance;
//   }

//   get channel(): Channel {
//     return IRabbitMQ.channel;
//   }
//   // async init() {
//   //   try {
//   //     this.connection = await amqplib.connect('amqp://guest:guest@localhost:5672')
//   //     this.channel = await this.connection.createChannel();

//   //   } catch (err) {
//   //     console.error(err);
//   //   }
//   // }

// }

// // export const amqp = new IRabbitMQ();


import amqplib, { Channel, Connection } from 'amqplib';


class IRabbitMQ {
  public connection!: Connection;
  public channel!: Channel;

  constructor() {
    this.init();
  }

  async init() {
    try {
      this.connection = await amqplib.connect('amqp://guest:guest@localhost:5672')
      this.channel = await this.connection.createChannel()

    } catch (err) {
      console.error(err);
    }
  }

}

export const amqp = new IRabbitMQ();