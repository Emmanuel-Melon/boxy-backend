// import { db } from "../../lib/drizzle/db";
import { users } from "../../lib/drizzle/drizzle.schema";

export const listUsers = async () => {
    // const allUsers = await db.select().from(users);
    // console.log(allUsers);
    return [
        {
            id: 1,
            name: "Trevor",
            description: "Hello, world",
            members: 15,
            cycleDuration: "2 weeks",
            nextPayout: "April 15th",
            contributionAmount: 200,
            payoutAmount: 3000
        },
        {
            id: 2,
            name: "Eman",
            description: "Hello, world",
            members: 15,
            cycleDuration: "2 weeks",
            nextPayout: "April 15th",
            contributionAmount: 200,
            payoutAmount: 3000
        }
    ];
}