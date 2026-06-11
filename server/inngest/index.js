import { Inngest } from "inngest";
import User from "../models/user.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-booking-ticket" });

// inngest function to save user to a database
const syncuserCreation = inngest.createFunction(
    { id: "sync-user-from-clerk", triggers: [{ event: "clerk/user.created" }] },
    async ({event}) => {
        const { id, first_name, last_name, email_addresses,image_url} = event.data
        const userData = {
            _id:id,
            name:first_name + " " + last_name,
            email:email_addresses[0].email_address,
            image:image_url
        }

        await User.create(userData)
    }
)

// a function to delete user from a database
const syncuserDeletion = inngest.createFunction(
    { id: "delete-user-with-clerk", triggers: [{ event: "clerk/user.deleted" }] },
    async ({event}) => {
        const { id } = event.data
        await User.findByIdAndDelete(id)
    }
)
// a inngest function to update user data in a database

const syncuserUpdation = inngest.createFunction(
    { id: "update-user-from-clerk", triggers: [{ event: "clerk/user.updated" }] },
     async ({event}) => {
        const { id, first_name, last_name, email_addresses,image_url} = event.data
        const userData = {
            _id:id,
            name:first_name + " " + last_name,
            email:email_addresses[0].email_address,
            image:image_url
        }

        await User.findByIdAndUpdate(id, userData)
    }
)

// Create an empty array where we'll export future Inngest functions
export const functions = [
    syncuserCreation,
    syncuserDeletion,
    syncuserUpdation
];