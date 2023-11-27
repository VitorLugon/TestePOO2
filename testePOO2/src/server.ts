import express from 'express';
import UserRouter from './routes/UserRoutes';
import AuctionRouter from './routes/AuctionRouter';

const app = express();
app.use(express.json());

app.use(UserRouter);
app.use(AuctionRouter)



app.listen(3000, function(){
    console.log("Server running on port 3000");
})