import { Router } from "express";
import AuctionController from "../controllers/AuctionController";


const AuctionRouter = Router();

AuctionRouter.get("/auction", AuctionController.listAuction);

AuctionRouter.post("/auction", AuctionController.createAuction);

AuctionRouter.put("/auction", AuctionController.updateAuction);

AuctionRouter.delete("/auction", AuctionController.deleteAuction);

export default AuctionRouter;