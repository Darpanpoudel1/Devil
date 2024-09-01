"use server"
import { adminEmails } from '@/db/Admins';
import { connectToDb } from '@/lib/connectDB';
import ClientModel from '@/lib/models/client.model';
// import { adminEmails } from '@/db/Admins';
// import StudentDataModel from '@/lib/models/student.data.model';
// import StudentModel from '@/lib/models/students.model';
// import { TStudentData } from '@/lib/types/student.types';
import { decodeBase64, encodeBase64 } from '@/utils/hashing.func';
import { currentUser } from '@clerk/nextjs/server';
// import { connectToDb } from '../../connectDB';


export const handleSignInSignUps = async () => {
    const user = await currentUser();
    if (!user) return JSON.stringify({error: "Not authorized"})
    const userEmail = user.emailAddresses[0].emailAddress
    if (adminEmails.includes(userEmail)) {
        return encodeBase64({ message: "admin", authorized: true });
    }
    connectToDb();
    try {
        const studentExists = await ClientModel.findOne({email: userEmail})
        if(!studentExists) {
            return encodeBase64({error: "Student not found", authorized: false})
        }
        return encodeBase64({message: "Student Exists", authorized: true})
    } catch (error) {
        const encodedData =  encodeBase64({error: "Something went wrong in db"})
        return encodedData
    }
}
