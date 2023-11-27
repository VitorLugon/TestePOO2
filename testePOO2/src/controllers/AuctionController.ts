import { Request, Response } from "express"
import {Prisma} from "@prisma/client"
import AuctionService from "../services/AuctionService"

class AuctionController{
    constructor(){}

    async listAuction(req: Request, res: Response){
        const auction = await AuctionService.findAuction()

        return res.status(200).json({
            status: "OK",
            auction: auction,
        })
    }

    async createAuction(req: Request, res: Response){
        const data: Prisma.AuctionCreateInput = req.body;
        if(data){
            const newAuction = AuctionService.createAuction(data)
            res.status(200).json({
                status: '20',
                newAuction: newAuction
            });
        }else {
            res.status(400).json({
                status: "error",
                mensage: "Missing data"
            });
        }
        res.end('Auction created')
    }

    async updateAuction(req: Request, res: Response){
        try{
            //const updateUser = await UserServices.updateUser();
            const auctionToUpdate = req.params.id;
            const {product, price, limitData, ownerId} = req.body;

            const auctionUpdated = await AuctionService.updateAuction(auctionToUpdate, req.body);

            return res.json(auctionUpdated);   
    }catch(error){
        console.log(error);
    }
}

async deleteAuction(req: Request, res: Response){
    try{
        const auctionToDelete = req.params.id

        const auctionDeleted = await AuctionService.deleteAuction(auctionToDelete)

        return res.json(auctionDeleted)
    }catch(error){
        console.log(error);
    }
}

    
}

export default new AuctionController();