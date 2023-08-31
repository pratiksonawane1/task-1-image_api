import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoint } from '../constant/api-endpoint';
import { Observable, catchError } from 'rxjs';
import { Image } from '../component/interface/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageProviderService {
  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(ApiEndpoint.IMAGE_URL)
      .pipe(
        catchError(error => {
          console.error('Error fetching images:', error);
          throw error;
        })
      );
  }

}
