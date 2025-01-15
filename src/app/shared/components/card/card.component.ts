import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  currencyData: any = null;

  constructor(
    private sharedService: SharedService 
    ){}

  ngOnInit(): void {
   this.getCurrencyIndicator()
  }

  getCurrencyIndicator(){
    this.sharedService.getCurrencyIndicator().subscribe((data) => {
      this.currencyData = data;
      // console.log(this.currencyData)
    });
  }
}



