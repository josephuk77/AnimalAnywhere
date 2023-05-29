import { MongoClient } from 'mongodb'

const url = 'mongodb+srv://AnimalAnywhere:dltmddnr0820@cluster0.uouvz9l.mongodb.net/forum?retryWrites=true&w=majority'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {                   //개발단계에서 웹페이지를 실행할 때 마다 DB에 연결하게 되면 안되기 때문에 변수에 저장해 한번만 접근하게 한다
  if (!global._mongo) {                                                     
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }


