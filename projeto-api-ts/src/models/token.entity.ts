import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import User from "./user.entity"

@Entity()
export default class Token extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    token!: string

    @Column()
    refreshToken!: string

    @Column()
    expiresAt!: Date

    @Column()
    userId!: number

    @ManyToOne(() => User, (user) => user.tokens)
    user!: User
}
