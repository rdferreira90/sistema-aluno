import { Repository } from "typeorm";
import { AppDataSource } from "../config/ormconfig";
import { User } from "../models/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
  
  private repo: Repository<User>;

  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  async findAll(): Promise<User[]> {
    return await this.repo.find();
  }

  async findById(id: number): Promise<User | null> {
    return await this.repo.findOne({ where: { id } });
  }

  async create(userData: Partial<User>): Promise<User> {
    const newUser = this.repo.create(userData);
    return await this.repo.save(newUser);
  }

  async update(id: number, userData: Partial<User>): Promise<User | null> {
    const user = await this.findById(id);
    if (!user) return null;
    await this.repo.update(id, userData);
    return await this.findById(id);
  }

  async delete(id: number): Promise<void> {
    const user = await this.findById(id);
    if (!user) throw new Error("Usuário não encontrado");
    await this.repo.delete(id);
  }
}
