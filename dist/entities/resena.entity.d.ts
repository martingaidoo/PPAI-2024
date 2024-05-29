import { BaseEntity } from 'typeorm';
import { VinoEntity } from './vino.entity';
export declare class ResenaEntity extends BaseEntity {
    id: number;
    comentario: string;
    esPremium: boolean;
    fechaResena: Date;
    puntaje: number;
    vino: VinoEntity;
}
