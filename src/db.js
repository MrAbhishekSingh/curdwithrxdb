import * as RxDB from "rxdb";
import { addRxPlugin } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
// import {
//     getRxStorageMongoDB
// } from 'rxdb/plugins/storage-mongodb';



let dbPromise = null;

const businessSchema = {
    version: 0,
    primaryKey: "id",
    type: "object",
    properties: {
        id: { type: "string", maxLength: 100 },
        name: { type: "string" },
    },
    required: ["id", "name"],
};

const articleSchema = {
    version: 0,
    primaryKey: "id",
    type: "object",
    properties: {
        id: { type: "string", maxLength: 100 },
        name: { type: "string" },
        qty: { type: "number" },
        selling_price: { type: "number" },
        business_id: { type: "string" },
    },
    required: ["id", "name", "qty", "selling_price", "business_id"],
};

async function createDatabase() {
    const db = await RxDB.createRxDatabase({
        name: "crudappdb",
        storage: getRxStorageDexie(), // Use Dexie.js as storage
    });

    // Create collections
    await db.addCollections({
        businesses: { schema: businessSchema },
        articles: { schema: articleSchema },
    });

    return db;
}

export function getDatabase() {
    if (!dbPromise) {
        dbPromise = createDatabase();
    }
    return dbPromise;
}