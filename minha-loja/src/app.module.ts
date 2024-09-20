import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { config } from './ormconfig'
import { ProductsModule } from './products/products.module';

@Module({
    imports: [TypeOrmModule.forRoot(config), UsersModule, ProductsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
