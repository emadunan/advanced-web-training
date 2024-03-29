import { ObjectType, Field } from '@nestjs/graphql';
import { AbstractEntity } from 'src/common/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class User extends AbstractEntity {
  @Field(() => String, { description: 'email' })
  @Column()
  email: string;

  @Field(() => String, { description: 'passord' })
  @Column()
  password: string;
}
