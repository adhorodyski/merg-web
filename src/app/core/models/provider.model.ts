import { ProvidersEnum } from '@src/app/core/models/providers.enum';
import { IProviderDetails } from '@src/app/core/models/provider-details.model';

export interface IProvider {
    name: ProvidersEnum;
    details: IProviderDetails[];
}
