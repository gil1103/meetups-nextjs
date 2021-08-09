import {MongoClient} from 'mongodb'

async function handler (req,res) {
  if( req.method==='POST'){
    const data = req.body // data is an object 

    // const {title, image, address, description} = data

    const client = await MongoClient.connect(
			'mongodb+srv://gil:test1234@cluster0.l3sni.mongodb.net/meetups?retryWrites=true&w=majority'
		);
    const db = client.db()

    const meetupCollection = db.collection('meetups')

    const result = await meetupCollection.insertOne(data)
    
    client.close()

    res.status(201).json({message: 'Meetup inserted!'})
  }
}

export default handler