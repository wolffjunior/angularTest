import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { convertPost } from '../utils/converters';
import { Post } from '../dtos';



@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Array<Post>> {

    const url = "https://jsonplaceholder.typicode.com/posts"


    return this.http.get<Array<Post>>(url).pipe(map((e:any) => {
      return e.map((e2:any) => convertPost(e2));
    }))

  }


}
