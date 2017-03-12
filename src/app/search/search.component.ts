import { Component } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchStr: string;

  constructor(private _spotifyService:SpotifyService) {

  }

  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
      console.log(res);
    });
  }

}
