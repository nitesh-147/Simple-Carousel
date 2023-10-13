import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'caraousel';
  index: number = 0;
  image: Array<string> = [
    "https://images.unsplash.com/photo-1696986293936-d8d080a88f50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1696827926099-c4eab4331e51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1696543710864-fecad4bfbf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1696280292021-76c29fb11f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1696330538810-6c1215ad4f02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
  ];

  src=this.image[this.index];

  next = () => {
    this.index = (this.index + 1);
    if (this.index === this.image.length) this.index = 0;
    this.updateSrc();
  };

  prev = () => {
    this.index = (this.index - 1);
    if (this.index === -1) this.index = this.image.length - 1;
    this.updateSrc();

  }
  
  set=(n:number)=>{
    this.index=n;
    this.updateSrc();
  }


  updateSrc=()=>{
    this.src=this.image[this.index];
  };

}
