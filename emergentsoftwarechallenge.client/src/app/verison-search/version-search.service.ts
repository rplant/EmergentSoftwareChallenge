
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SoftwareVersion } from './SoftwareVersion';

@Injectable({
  providedIn: 'root'
})
export class VersionSearchService {
  private apiUrl = 'https://localhost:7167/api/Version/search';

  constructor(private http: HttpClient) { }

  getVersions(): Observable<SoftwareVersion[]> {
    return this.http.get<SoftwareVersion[]>(this.apiUrl);
  }

  searchVersions(query: string): Observable<SoftwareVersion[]> {

    const searchUrl = `${this.apiUrl}?searchVersion=${query}`; 

    return this.http.get<SoftwareVersion[]>(searchUrl);
  }
}

