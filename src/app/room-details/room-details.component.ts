import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id!: number;
  room!: Room;

  constructor(private route: ActivatedRoute,
              private router:Router,
              private roomService: RoomService) { }

  ngOnInit(){
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];

    this.roomService.getRoom(this.id).subscribe((data: Room) => {console.log(data), this.room = data;}, (err: any) => console.log(err));
  }
  list(){
    this.router.navigate(['rooms']);
  }

}
