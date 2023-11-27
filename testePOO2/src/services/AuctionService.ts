import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AuctionService {
    constructor(){

    }

    async createAuction(auction: Prisma.AuctionCreateInput) {
        try {
            const newAuction= await prisma.auction.create({
                data: auction
            });
            return newAuction;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async findAuction(id?: string) {
        try {
            if (id) {
                const auction = await prisma.auction.findUnique({
                    where: {
                        id
                    }
                })
                return auction;
            }
            else {
                const auctions = await prisma.auction.findMany();
                return auctions;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async updateAuction(id: string, newData: Prisma.AuctionUpdateInput){
        try{
            const leilaoUpdated = await prisma.auction.update({
                where : {
                    id
                },
                data: newData
            });
            return leilaoUpdated;
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteAuction(id: string){
        try{
            if(!id){
                return console.log("ID is not optional.");
            }
            await prisma.auction.delete({where: {id}});
            return "Ok";
        } catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new AuctionService();