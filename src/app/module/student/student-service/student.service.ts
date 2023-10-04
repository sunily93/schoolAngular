import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/storage.service';

const BASIC_URL=["http://localhost:8080/"];

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudentById():Observable<any>
  {
    return this.http.get(BASIC_URL+`api/students/${StorageService.getUserId()}`,{
      headers:this.getTokenForAccess()
    })
  }

  applyLeave(studentLeaveDto):Observable<any>
  {
    studentLeaveDto.userId=StorageService.getUserId();
    return this.http.post(BASIC_URL+`api/students/leave`,studentLeaveDto,{
      headers:this.getTokenForAccess()
    })
  }

  getAllApplyLeaveStudentById():Observable<any>
  {
    return this.http.get(BASIC_URL+`api/students/leave/${StorageService.getUserId()}`,{
      headers:this.getTokenForAccess()
    })
  }

  updateStudent(studentLeaveDto):Observable<any>
  {
    return this.http.put(BASIC_URL+`api/students/${StorageService.getUserId()}`,studentLeaveDto,{
      headers:this.getTokenForAccess()
    })
  }

  getTokenForAccess():HttpHeaders{
    let authHeaders:HttpHeaders=new HttpHeaders();
    return authHeaders.set(
     "Authorization","Bearer "+StorageService.getToken()
    );
 }
}
