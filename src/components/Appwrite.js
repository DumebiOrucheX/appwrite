import {Client, Account, Databases} from "appwrite";


const client = new Client();

client
    .setEndpoint('your project endpoint').setProject('your project ID');

export const account = new Account(client);
export const database = new Databases(client, 'your database ID');  
