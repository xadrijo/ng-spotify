import { Component } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from '../model/artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchStr: string;
  searchRes: Artist[];

  constructor(private _spotifyService:SpotifyService) {

  }

  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes = res.artists.items;
    });
  }

}
