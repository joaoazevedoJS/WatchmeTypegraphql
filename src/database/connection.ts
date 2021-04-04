import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://joao337:joao337@login.vlxvu.mongodb.net/watchme?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
