import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { ProductFood } from "../entities/ProductFood";
import { Request, Response } from "express";

class ProductFoodService {
  private readonly ProductFoodRepository: Repository<ProductFood> =
    AppDataSource.getRepository(ProductFood);

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const productFood = this.ProductFoodRepository.create({
          name: data.name,
          price: data.price,
          quantity: data.quantity,
          image: data.image,
      });
      this.ProductFoodRepository.save(productFood);
      return res.status(200).json("data berhasil di tambahkan");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const productFood = await this.ProductFoodRepository.findOne({
        where: {
          id: req.params.id,
        },
      });
      await this.ProductFoodRepository.delete(productFood);
      return res.status(200).json("data berhasil di hapus");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }

  async patch(req: Request, res: Response) {
    try {
      const productFood = await this.ProductFoodRepository.findOne({
        where: {
          id: req.params.id,
        },
      });
      productFood.name = req.body.name;
      productFood.price = req.body.price;
      productFood.quantity = req.body.quantity;
      productFood.image = req.body.image;
      await this.ProductFoodRepository.save(productFood);
      return res.status(200).json("data berhasil di ubah");
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }

  async get(req: Request, res: Response) {
    try {
      const productFood = await this.ProductFoodRepository.find();
      return res.status(200).json(productFood);
    } catch (error) {
      return res.status(500).json("terjadi kesalahan");
    }
  }
}

export default new ProductFoodService();
