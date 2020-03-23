import { IPost } from '@src/app/core/models/post.model';
import { ProvidersEnum } from '@src/app/core/models/providers.enum';
import { mockedPostAuthor } from '@src/app/core/mocks/post-author.mockup';

export const mockedRiver: IPost[] = [
    {
        provider: ProvidersEnum.YOUTUBE,
        author: mockedPostAuthor,
        timestamp: new Date(),
        source: 'https://youtube.com',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
    },
    {
        provider: ProvidersEnum.INSTAGRAM,
        author: mockedPostAuthor,
        timestamp: new Date(),
        source: 'https://instagram.com',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
    },
    {
        provider: ProvidersEnum.INSTAGRAM,
        author: mockedPostAuthor,
        timestamp: new Date(),
        source: 'https://instagram.com',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
    },
    {
        provider: ProvidersEnum.YOUTUBE,
        author: mockedPostAuthor,
        timestamp: new Date(),
        source: 'https://youtube.com',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
    },
    {
        provider: ProvidersEnum.TWITTER,
        author: mockedPostAuthor,
        timestamp: new Date(),
        source: 'https://twitter.com',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
    },
    {
        provider: ProvidersEnum.FACEBOOK,
        author: mockedPostAuthor,
        timestamp: new Date(),
        source: 'https://facebook.com',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
    },
];
