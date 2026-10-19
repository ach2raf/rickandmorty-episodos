import { Component } from '@angular/core';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EpisodeListComponent],
  template: `<app-episode-list />`,
})
export class AppComponent {}
