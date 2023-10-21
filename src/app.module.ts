import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'

@Module({
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
