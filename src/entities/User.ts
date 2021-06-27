import { uuid } from 'uuidv4'
import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm'

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

  constructor(
    props: Omit<User, 'id' | 'hasId' | 'save' | 'remove' | 'softRemove' | 'recover' | 'reload'>,
    id?: string
  ) {
    super();

    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}