import { Component,OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'prediklyassignment';
model:any={};
  angForm: FormGroup;
  winner: any;
  constructor(private fb: FormBuilder){
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      rhymno: ['', Validators.required ],
    
   });
  }
  ngOnInit(){
  console.log("ngonit");

}
smplfun(){
  console.log(this.model);
  this.queen(4,this.model.rhymno);
}

   queen(n, k) {
     console.log("hi", n);
     console.log(k);

    let queue = [];
    for (let i = 1; i <= n; i++){ 
      queue.push(i);
    }
    
    let servOrder = [];
    
    while (queue.length !== 1) {
        for (let skip = 1; skip < k; skip++) queue.push(queue.shift());
        servOrder.push(queue.shift());
    }
    
    console.log("servant order is " + servOrder.join(" "));
    console.log("winner is",queue[0]);
    this.winner=queue[0];
    // console.log("winner is",this.winner);
    return queue[0]; //survivor
    
    }
 
}
