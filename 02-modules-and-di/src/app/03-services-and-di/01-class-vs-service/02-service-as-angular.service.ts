import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({//Special decorator which will make Angular to understand this class is a Service
    providedIn: 'root' //Where this class should be provided? If root - this is a singleton 
})
export class UserApiService {
    //Or so:
    // private readonly httpClient = inject(HttpClient);
    

    constructor(private readonly httpClient: HttpClient, @Inject('baseUrl') private readonly apiUrl: string) {}

    public getUsers(): Observable<string[]> {
        return this.httpClient.get<string[]>(`${this.apiUrl}/users`);
    }

    public getUser(id: number): Observable<string> {
        return this.httpClient.get<string>(`${this.apiUrl}/users/${id}`);
    }
}