import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  emptyUsername = true;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  username = '';
  detailsDisplayed = false;
  timesPressed = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
    this.checkIsUsernameEmpty();
  }

  checkIsUsernameEmpty(){
    if(this.username === '') {
      this.emptyUsername = true;
      return true;
    }
    else {
      this.emptyUsername = false;
      return false;
    }
  }

  onResetUsername() {
    this.username = '';
    this.checkIsUsernameEmpty();
  }

  displayParagraph() {
    this.detailsDisplayed = !this.detailsDisplayed;
    this.timesPressed.push(this.timesPressed.length +  1);
  }
}
