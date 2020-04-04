import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MaterialsService {
  path="materials";
  constructor(
    @Inject('API_URL') protected API_URL: string,
    protected http: HttpClient,
  ) { }

  getAll(): Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.get(`${this.API_URL}/${this.path}`)
            .toPromise()
            .then((response: any) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err)
            })
    });
}
}
