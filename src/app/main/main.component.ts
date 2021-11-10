import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  form: FormGroup;
  data: any = [] ;
  array:any = []
  comaprebnt: boolean = false;
  removebnt : boolean = true

  constructor(public Http:HttpClient) { }

  ngOnInit() {
   this.Http.get('https://jsonplaceholder.typicode.com/photos').subscribe(res=>{
     this.data = res
     console.log(this.data)
   })
  
  }
  onclick(a){
  console.log(a)
  this.array.push(a)
 
  }

  init(){
    
  }

   
}
