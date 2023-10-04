import { StorageService } from './../../../storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASIC_URL=["http://localhost:8080/"];
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  addStudent(studentDto:any)
  {
    return this.http.post<[]>(BASIC_URL+"api/admin/student",studentDto,{
      headers:this.getTokenForAccess(),
    });
  }

  getAllStudents():Observable<any>
  {
    return this.http.get(BASIC_URL+"api/admin/students",{
      headers:this.getTokenForAccess()
    })
  }

  deleteStudent(id:any):Observable<any>
  {
    return this.http.delete(BASIC_URL+`api/admin/student/${id}`,{
      headers:this.getTokenForAccess()
    })
  }

  getStudentById(id:any):Observable<any>
  {
    return this.http.get(BASIC_URL+`api/admin/student/${id}`,{
      headers:this.getTokenForAccess()
    })
  }

  updateStudent(id:any):Observable<any>
  {
    return this.http.put(BASIC_URL+`api/admin/student/${id}`,{
      headers:this.getTokenForAccess()
    })
  }

  updateStudentById(studentId:number,studentDto:any)
  {
    return this.http.put<[]>(BASIC_URL+`api/admin/student/${studentId}`,studentDto,{
      headers:this.getTokenForAccess(),
    });
  }

  payFee(studentId:number,feeDto:any)
  {
    return this.http.post<[]>(BASIC_URL+`api/admin/fee/${studentId}`,feeDto,{
      headers:this.getTokenForAccess(),
    });
  }

  getAllApplyLeave():Observable<any>
  {
    return this.http.get(BASIC_URL+`api/admin/leaves`,{
      headers:this.getTokenForAccess()
    })
  }

  changeLeaveStatus(leaveId:number,status:string):Observable<any>
  {
    return this.http.get(BASIC_URL+`api/admin/leave/${leaveId}/${status}`,{
      headers:this.getTokenForAccess()
    })
  }

  //Teacher Operations
  postTeacher(teacherDto:any)
  {
    return this.http.post<[]>(BASIC_URL+"api/admin/teacher",teacherDto,{
      headers:this.getTokenForAccess(),
    });
  }

  getAllTeachers()
  {
    return this.http.get(BASIC_URL+`api/admin/teachers`,{
      headers:this.getTokenForAccess(),
    });
  }

  getTokenForAccess():HttpHeaders{
     let authHeaders:HttpHeaders=new HttpHeaders();
     return authHeaders.set(
      "Authorization","Bearer "+StorageService.getToken()
     );
  }
}
