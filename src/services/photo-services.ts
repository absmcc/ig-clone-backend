import { Photo } from "../models/photo";
import {db } from "../db/db"
import { ObjectId} from 'mongodb'

interface PhotoServices {
    updateLikes(id: string, inc: number): Promise<Photo>;
    createPhoto(photo: Photo): Promise<string>;
    createComment(id: string, comment: string): Promise<Photo>;
    getAllPhotos(): Promise <Photo[]>;
}
const photosCollection = db.collection<Photo>("photos")


export const getAllPhotos = async (): Promise<Photo[]> => {
    const photos = await photosCollection.find().toArray()
    return photos;
};

const createPhoto = async (photo: Photo): Promise<string> => {
try{
    const res = await photosCollection.insertOne(photo)
    return res.insertedId.toString();
    

}catch (error){
    return "Somthing went wrong"

}
};

export const updateLikes = async(
    id: string, 
    inc: number =1,)
    :Promise<Photo> => {
        const res = await photosCollection.findOneAndUpdate(
            {_id: new ObjectId(id)},
            { $inc: {likes: inc}}
        );
    
    const updatedPhoto = res.value as Photo
    return updatedPhoto
        }
    



export const createComment =async (id:string, comment: string): Promise<Photo> => {
    
}


export const photoServices: PhotoServices = 
{ getAllPhotos, 
    createPhoto, 
   updateLikes, 
   createComment 
}



