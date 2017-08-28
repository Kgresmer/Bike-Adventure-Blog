import {Component, Pipe, PipeTransform} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Pipe({name: 'newLine', pure: false})
export class NewlinePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }
}

export class AppComponent {
  constructor(private authService: AuthService) {}

  title = 'Adventure Blog';

}
