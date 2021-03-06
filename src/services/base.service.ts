import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root',
  })
export class BaseService {
    constructor(private http: HttpClient) {}
    public get<T>(url: string)
    {
        return this.http.get<T>(url);
    }

    public post<T>(url: string, body: any)
    {
        return this.http.post<T>(url,body);
    }

    public put<T>(url: string, body: any)
    {
        return this.http.put<T>(url,body);
    }

    public delete<T>(url: string, body: any)
    {
        return this.http.delete<T>(url,body);
    }

    public deleteWithId(url: string, id: string)
    {
        return this.http.delete(`${url}?id=`+id);
    }
}