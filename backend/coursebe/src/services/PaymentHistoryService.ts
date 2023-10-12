import { Request, Response } from "express";
import { Between, Repository } from "typeorm";
import { PaymentHistories } from "../entities/PaymentHistory";
import { AppDataSource } from "../data-source";

class PaymentHistoryService {
  private readonly PaymentHistoryRepository: Repository<PaymentHistories> =
    AppDataSource.getRepository(PaymentHistories);

    // async find(req: Request, res: Response) {
    //   try {
    //     if (!req.body.date[0] || !req.body.date[1]) {
    //       return res.status(400).json("Both startDate and endDate are required.");
    //     }

    //     const startDate = new Date(req.body.date[0]);
    //     const endDate = new Date(req.body.date[1]);

    //     const data = await this.PaymentHistoryRepository.find({
    //       where: {
    //         date: Between(startDate, endDate),
    //       },
    //     });

    //     return res.status(200).json(data);
    //   } catch (error) {
    //     console.error(error);
    //     return res.status(500).json("Internal server error");
    //   }
    // }
  async find(req: Request, res: Response) {
    try {
  
      const data = await this.PaymentHistoryRepository.find({
      });
  
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json("Internal server error");
    }
  }
  
}

export default new PaymentHistoryService();
