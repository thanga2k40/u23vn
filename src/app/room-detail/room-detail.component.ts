import { Component, OnInit } from '@angular/core';
import { Address } from '../object/address';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
	
	addressList: Address[] = [
	{
		id: '13',
		address: '13 Cau giay - Quan Cau Giay - Ha Noi',
		capacity: 10,
		price: '50$'
	},
	{
		id: '234',
		address: '234 Ho Tung Mau - Quan Bac Tu Liem - Ha Noi',
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
	
	private currentRoom: Address;
	private roomId: string;
	
  constructor(
	private route: ActivatedRoute,
	private location: Location
	) {
		this.roomId = this.route.snapshot.paramMap.get('id');
		this.currentRoom = this.getRoomById(this.roomId, this.addressList);
	}

  ngOnInit() {
  }
  
  getRoomById(id: string, list: Address[]): Address {
	var length = list.length >>> 0;
	for (var i = 0; i < length; i++) {
		if (list[i].id == id) {
			return list[i];
		}
	}
	return null;
  }
  
}
