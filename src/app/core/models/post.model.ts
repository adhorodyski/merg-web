import { IPostAuthor } from '@src/app/core/models/post-author.model';
import { ProvidersEnum } from '@src/app/core/models/providers.enum';

export interface IPost {
    author: IPostAuthor;
    provider: ProvidersEnum;
    timestamp: Date;
    source: string;
    embed: string;
}
