const users=[
    {
        uid:1,
        fname:"sumit",
        gender:'male'
    },
    {
        uid:2,
        fname:"rakesh",
        gender:'male'
    },
    {
        uid:3,
        fname:"aman",
        gender:'male'
    },
    {
        uid:4,
        fname:"aniket",
        gender:'male'
    }
]
// console.log(users)

for (const user of users) {
    console.log(`UID: ${user.uid}, Name: ${user.fname}, Gender: ${user.gender}`);
}