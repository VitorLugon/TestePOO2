import { Request, Response } from "express"
import {Prisma} from "@prisma/client"
import BidService from "../services/BidService"

class BidController{
    constructor(){}

    async listBid(req: Request, res: Response){
        const bid = await BidService.findBid()

        return res.status(200).json({
            status: "OK",
            bid: bid,
        })
    }

    async createBid(req: Request, res: Response){
        const data: Prisma.BidCreateInput = req.body;
        if(data){
            const newBid = BidService.createBid(data)
            res.status(200).json({
                status: '20',
                newBid: newBid
            });
        }else {
            res.status(400).json({
                status: "error",
                mensage: "Missing data"
            });
        }
        res.end('Bid created')
    }

    async updateBid(req: Request, res: Response){
        try{
            const bidToUpdate = req.params.id;
            const {product, price, limitData, ownerId} = req.body;

            const bidUpdated = await BidService.updateBid(bidToUpdate, req.body);

            return res.json(bidUpdated);   
    }catch(error){
        console.log(error);
    }
}

async deleteBid(req: Request, res: Response){
    try{
        const bidToDelete = req.params.lanceId

        const bidDeleted = await BidService.deleteBid(bidToDelete)

        return res.json(bidDeleted)
    }catch(error){
        console.log(error);
    }
} 
}

export default new BidController();