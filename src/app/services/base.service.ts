import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class BaseService {
  protected basePath = '';
  constructor(path: string) {
    this.basePath = path;
  }

}
