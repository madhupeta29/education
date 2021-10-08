import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.css']
})
export class CourceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    cource=[
    
      { 'id':1,'name':'learn angualar','description':'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry hhhhhh ','image':'../../assets/s2.jpg'},
      { 'id':2,'name':'learn typescript','description':'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry hhhhhh ','image':'../../assets/s3.jpg'},
      { 'id':3,'name':'learn nodejs','description':'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry hhhhhh ','image':'../../assets/s4.jpg'},
      { 'id':4,'name':'learn htmlcss','description':'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry hhhhhh ','image':'../../assets/s5.jpg'},
      
    ]
 

}
