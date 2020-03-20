import { ProvidersEnum } from '@src/app/core/models/providers.enum';
import { IStream } from '@src/app/core/models/stream.model';

export interface IProvider {
    provider: ProvidersEnum;
    streams: IStream[];
}
