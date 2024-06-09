import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [AuthModule, PostsModule],
})
export class AppModule {}
