import { IProvider } from '@src/app/core/models/provider.model';

export interface IPostAuthor {
    username: string;
    name: string;
    email: string;
    avatar: string;
    about: string;
    creator: boolean;
    providers: IProvider[];
    followers: number[];
    follows: number[];
}
