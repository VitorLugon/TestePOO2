import { Router } from "express";
import BidController from "../controllers/BidController";

const BidRouter = Router();

BidRouter.get("/bid", BidController.listBid);

BidRouter.post("/bid", BidController.createBid);

BidRouter.put("/bid", BidController.updateBid);

BidRouter.delete("/bid", BidController.deleteBid);

export default BidRouter;

