import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { TopMenuComponent } from './inbox/top-menu/top-menu.component';
import { SearchComponent } from './inbox/search/search.component';
import { ChatListComponent } from './inbox/chat-list/chat-list.component';
import { ChatCardComponent } from './inbox/chat-list/chat-card/chat-card.component';
import { HeaderComponent } from './chat-screen/header/header.component';
import { ChatBoardComponent } from './chat-screen/chat-board/chat-board.component';
import { TextFieldComponent } from './chat-screen/text-field/text-field.component';
import { MessageCardComponent } from './chat-screen/chat-board/message-card/message-card.component';
import { SettingComponent } from './inbox/setting/setting.component';
import { SettingTopComponent } from './inbox/setting/setting-top/setting-top.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    ChatScreenComponent,
    TopMenuComponent,
    SearchComponent,
    ChatListComponent,
    ChatCardComponent,
    HeaderComponent,
    ChatBoardComponent,
    TextFieldComponent,
    MessageCardComponent,
    SettingComponent,
    SettingTopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }