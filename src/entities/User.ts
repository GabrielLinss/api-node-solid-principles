import { uuid } from 'uuidv4'
import { Entity, Column, PrimaryColumn, BaseEntity, BeforeInsert, BeforeUpdate } from 'typeorm'
import bcrypt from 'bcryptjs'

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryColumn()
  public readonly id: string;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10)
  }

  constructor(
    props: Omit<User, 'id' | 'hasId' | 'save' | 'remove' | 'softRemove' | 'recover' | 'reload' | 'hashPassword'>,
    id?: string
  ) {
    super();

    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}