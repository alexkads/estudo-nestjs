import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [CategoriesModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
