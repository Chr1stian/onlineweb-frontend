import IImage from 'common/models/Image';

export interface ICompany {
  id: number;
  name: string;
  website: string;
  image: IImage;
}

export interface IApiCompany {
  readonly id: number;
  readonly name: string;
  readonly short_description: string; // TextField model?
  readonly long_description: string; // TextField model?
  readonly image: IImage; // Image, or StaticContent model?
  readonly site: string; // URL model?
  readonly email_address: string; // Email model?
  readonly phone_number: string; // Phone model?
}
