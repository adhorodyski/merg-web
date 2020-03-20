import { IProvider } from '@src/app/core/models/provider.model';

export interface IUser {
    username: string;
    avatar: string;
    providers: IProvider[];
}
