import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id='er'>Hello {{filteredUsers.join(', ')}}</div>
    <form name='input' (submit)='addUser($event)'>
      <input id='nimi' [value]='newUser' (input)="onInput($event)">
      <input type='button' id='add' value='Добавить' (click)="addUser($event)">
      <input type='button' id='remove' value='Удалить' (click)='deleteUser(newUser)'>
    </form>

    <input id='search' placeholder='Поиск' (input)="onSearch($event)">
  `,
})
export class App {
  users = ['Anna', 'Boris', 'Viktor']
  newUser: string = ''
  searchTerm: string = ''

  get filteredUsers(): string[] {
    return this.users.filter(user => 
      user.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement
    this.newUser = input.value
  }

  addUser(event: Event) {
    this.users.push(this.newUser)
    console.log(this.newUser)
  }

  deleteUser(user: string): void {
    this.users.splice(this.users.indexOf(user), 1)
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement
    this.searchTerm = input.value
  }
}
