import axios from 'axios';

import buildPaginationQueryOpts from '@/shared/sort/sorts';

import { IRecord } from '@/shared/model/record.model';

const baseApiUrl = 'api/records';

export default class RecordService {
  public find(id: number): Promise<IRecord> {
    return new Promise<IRecord>(resolve => {
      axios.get(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public retrieve(paginationQuery?: any): Promise<any> {
    return new Promise<any>(resolve => {
      axios.get(baseApiUrl + `?${buildPaginationQueryOpts(paginationQuery)}`).then(function(res) {
        resolve(res);
      });
    });
  }

  public delete(id: number): Promise<any> {
    return new Promise<any>(resolve => {
      axios.delete(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res);
      });
    });
  }

  public create(entity: IRecord): Promise<IRecord> {
    return new Promise<IRecord>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity: IRecord): Promise<IRecord> {
    return new Promise<IRecord>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
