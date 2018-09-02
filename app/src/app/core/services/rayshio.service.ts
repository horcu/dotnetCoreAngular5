import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class RayshioService {
    
    constructor(private http: Http) {
    
    }

    GetRayshioMessage(): Observable<any[]> {
        return this.http.get(`api/rayshio`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

   PostRayshioMessage(msg: String): Observable<any[]> {
        return this.http.get(`api/rayshio`)
            .map((res: Response) => res.json(),
                  (body: Object) => msg)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }
}