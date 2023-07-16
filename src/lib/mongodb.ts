import { connect, connection } from 'mongoose';

const connectDB = async () => {
  const uri: string = process.env.MONGODB_URL ? process.env.MONGODB_URL : '';

  const options: any = {
    useNewURLParser: true,
    useUnifiedTopology: true,
  };

  try {
    if (connection.readyState === 0) {
      await connect(uri, options);
      console.log('mongoose con: established');
    } else {
      console.log('mongoose state: ', connection.readyState);
    }
  } catch (error) {
    console.log('mongoose error: ', error);
  }
};

export default connectDB;
