import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'  
import { Job } from './job';
import * as XLSX from 'xlsx'; 
declare const myTest: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Workstatus';
  myusername: string|any;
mytitle:string|any;
  productForm: FormGroup|any;  
worksort:FormArray|any;
 wlist:string[]|any;
 fileName= 'workstatus.xlsx';  
 public fresult:any;
 click : boolean = false;



  constructor(private fb:FormBuilder) {  
  
    this.productForm = this.fb.group({  
      worksort: this.fb.array([]) ,  
    });  
  }  
    
  works() : FormArray {  
    return this.productForm.get("worksort");
   }  
     
  newWorks(): FormGroup {  
    return this.fb.group({  
      sno: '',  
      developer: '',  
      title: '',  
      description: '',    
      date: '',  
      hours: '', 
      status: '',  
      assignee: '', 
      reporter: '',  
      defects: '', 
    })  
  }  
  addWorks() {  
    this.works().push(this.newWorks());  
    this.click = !this.click;
  }  
     
  // removeWorks(i:number) {  
  //   this.works().removeAt(i);  
  // }  
     
  onSubmit() {  
 this.fresult=this.productForm.value;
console.log( this.fresult);  


}
save(){
myTest();
}
exportexcel(): void 
    {
  
       /* table id is passed over here */   
       let element = document.getElementById('show'); 
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }
    next()
    {

    }
}












// this.wlist=[this.workstate];
// return this.wlist;
// }  
// save(){
  // this.myusername=this.productForm.get('assignee')?.value;
  // console.log(this.myusername);
  // console.log(this.productForm.value);  
  // this.myusername = this.usernameElement.nativeElement.value;
  // console.log('it does nothing', this.myusername);
//  console.log(this.developername);
// console.log("the code :" + this.tcode);
//  const developername =this.productForm.get('developer').value;
//  console.log(developername);
// console.log(this.myNameElem.nativeElement.value);

// const titlename=(<HTMLInputElement>document.getElementById('inputtitle')).value;
// console.log(developername);

// }

//   blurEvent(event: any){
//     this.myusername = event.target.value;
// this.mytitle=event.target.value;
// this.wlist.push(this.myusername,this.mytitle);
// return this.wlist;
// console.log(this.wlist);
// console.log(this.mytitle);
// }
// OnInput(value: any) {
//   this.serialno = value;
//   console.log(this.serialno);
//  }

