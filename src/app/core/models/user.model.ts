import { IProvider } from '@src/app/core/models/provider.model';

export interface IUser {
    username: string;
    name: string;
    email: string;
    avatar: string;
    about: string;
    providers: IProvider[];
    followers: number[];
    follows: number[];
}
