import { AccountsEnum } from '@src/app/core/models/accounts.enum';
import { IProvider } from '@src/app/core/models/provider.model';

export interface IPostAuthor {
    username: string;
    name: string;
    email: string;
    avatar: string;
    about: string;
    accountType: AccountsEnum;
    providers: IProvider[];
    followers: number[];
    follows: number[];
}
