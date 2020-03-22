import { ProvidersEnum } from '@src/app/core/models/providers.enum';
import { IUser } from '@src/app/core/models/user.model';

export const mockedUser: IUser = {
    creator: true,
    username: 'm_brownlee',
    name: 'MKBHD',
    email: 'mbrown@mail.com',
    avatar: 'https://pbs.twimg.com/profile_images/1212149592403382281/cI0-xyss_400x400.jpg',
    about: 'I promise I wont overdo the filters.',
    providers: [
        {
            provider: ProvidersEnum.YOUTUBE,
            streams: [
                {
                    username: 'MKBHD',
                    avatar: 'https://pbs.twimg.com/profile_images/1212149592403382281/cI0-xyss_400x400.jpg',
                },
            ],
        },
        {
            provider: ProvidersEnum.INSTAGRAM,
            streams: [
                {
                    username: 'marcus_brownlee',
                    avatar: 'https://reidrealtors.com/wp-content/uploads/2017/12/pic-bio-melvin26-500x480-c-center.jpg',
                },
                {
                    username: 'mkbhd',
                    avatar: 'https://pbs.twimg.com/profile_images/1212149592403382281/cI0-xyss_400x400.jpg',
                },
            ],
        },
    ],
    followers: [],
    follows: [],
};
