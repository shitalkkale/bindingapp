import { Component, OnInit } from '@angular/core';

//import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  name='';
  email='';
  info:string="It's Summer Season ";
  mg=''
  imageUrl="assets/imgs/mango.jpg";
  title = "Data binding using Property Binding";
showinfo()
{
  this.mg="A mango is a sweet tropical fruit, and it's also the name of the trees on which the fruit grows.";
}
  constructor() { }

  ngOnInit(): void {
  }

}
