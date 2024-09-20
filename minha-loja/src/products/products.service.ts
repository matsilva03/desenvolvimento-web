import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { Product } from './entities/product.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) {}

    create(createProductDto: CreateProductDto) {
        const product = this.productsRepository.create(createProductDto)
        return this.productsRepository.save(product)
    }

    findAll() {
        return this.productsRepository.find()
    }

    findOne(id: number) {
        return this.productsRepository.findOneBy({ id })
    }

    update(id: number, updateProductDto: UpdateProductDto) {
        return `This action updates a #${id} product`
    }

    remove(id: number) {
        return `This action removes a #${id} product`
    }
}
