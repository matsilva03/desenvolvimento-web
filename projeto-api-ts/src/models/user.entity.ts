import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm"
import Task from "./task.entity"
import Token from "./token.entity"

@Entity()
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    password!: string

    @OneToMany(() => Task, (task) => task.user)
    tasks!: Task[]

    @ManyToOne(() => Token, (token) => token.user)
    tokens!: Token[]
}
