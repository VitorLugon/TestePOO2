import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class BidService {
    constructor() { }

    async createBid(bid: Prisma.BidCreateInput) {
        try {
            const newBid = await prisma.bid.create({
                data: bid
            });
            return newBid;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async findBid(id?: string) {
        try {
            if (id) {
                const bid = await prisma.bid.findUnique({
                    where: {
                        id
                    }
                })
                return bid;
            }
            else {
                const bids = await prisma.bid.findMany();
                return bids;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async updateBid(id: string, newData: Prisma.BidUpdateInput){
        try{
            const bidUpdated = await prisma.bid.update({
                where : {
                    id
                },
                data: newData
            });
            return bidUpdated;
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteBid(id: string){
        try{
            if(!id){
                return console.log("ID is not optional.");
            }
            await prisma.bid.delete({where: {id}});
            return "Ok";
        } catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new BidService();