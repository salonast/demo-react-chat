import { Plugin } from '../../shared/plugin.interface';
import { UploadcareComponent } from './UploadcareComponent';

export const plugin: Plugin = {
  name: 'uploadcare',
  Message: UploadcareComponent,
};
