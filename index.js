// const { App } = require('@slack/bolt');
require('dotenv').config();
const service= require ("./service");

run().catch(err => console.log(err));

async function run() {
    const data =await service.sendNotificationToBotty("#random");
    data.ok? console.log("Perfect okeyy"):console.log("Poraliya");
}