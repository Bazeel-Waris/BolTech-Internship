import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { TopMenuComponent } from './inbox/top-menu/top-menu.component';
import { SearchComponent } from './inbox/search/search.component';
import { ChatListComponent } from './inbox/chat-list/chat-list.component';
import { ChatCardComponent } from './inbox/chat-list/chat-card/chat-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    ChatScreenComponent,
    TopMenuComponent,
    SearchComponent,
    ChatListComponent,
    ChatCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }