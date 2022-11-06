import {Component} from '@angular/core';
import {Resident, responseGet} from './resident'
import {ResidentService} from './residentService'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test?: responseGet
  residents?: Resident[]

  constructor(private residentService: ResidentService) {
  }

  ngOnInit() {
    this.residentService.getResidents().subscribe(data => {
      this.test = data
      console.log(this.test.data)
      this.residents = this.test.data
      console.log(this.residents)
    })
  }

}
