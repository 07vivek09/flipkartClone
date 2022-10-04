import mongoose from 'mongoose'

const Connection = async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-i1wlk76-shard-00-00.yasusfm.mongodb.net:27017,ac-i1wlk76-shard-00-01.yasusfm.mongodb.net:27017,ac-i1wlk76-shard-00-02.yasusfm.mongodb.net:27017/?ssl=true&replicaSet=atlas-ns3nuv-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
       await mongoose.connect(URL , { useUnifiedTopology:true, useNewUrlParser:true })
       console.log("Database Connected Sucesfully")
    } catch (error) {
        console.log("Error Occured while connecting with database");
    }
}

export default Connection;