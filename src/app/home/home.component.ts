import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Address } from '../object/address';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit { 

	addressList: Address[] = [
	{
		id: '13',
		address: '13 Cau Giay - Quan Cau Giay - Ha Noi',
		capacity: 10,
		price: '50$'
	},
	{
		id: '234',
		address: '123 Ho Tung Mau - Quan Bac Tu Liem - Ha Noi',
		capacity: 15,
		price: '70$'
	},
	{	id: '102',
		address : '102 Linh Lang - Quan Ba Dinh - Ha Noi',
		capacity : 10,
		price : '50$'
	},
	{
		id: '16',
		address: '16B Hang Than - Quan Dong Da - Ha Noi',
		capacity : 30,
		price : '90$',
	},
	{
		id: '73',
		address: '73 Chua Lang - Quan Dong Da - Ha Noi'
		capacity : 25,
		price : '55$',
	},
	{
		id: '5-4A'
		address : '5-4A khu do thi Trung Yen - Quan Cau Giay - Ha Noi'
		capacity : 40,
		price : '100$'
	},
	{
		id : '125-127'
		address : '125/127 Nguyen Khang - Quan Cau Giay - Ha Noi'
		capacity : 35,
		price : '75$'
	}]
	;
	
  constructor() { }

  ngOnInit() {
  }

}
