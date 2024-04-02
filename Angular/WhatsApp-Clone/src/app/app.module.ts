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
import { SettingBodyComponent } from './inbox/setting/setting-body/setting-body.component';
import { ThemeModeComponent } from './inbox/setting/setting-body/theme-mode/theme-mode.component';
import { FormsModule } from '@angular/forms';

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
    SettingTopComponent,
    SettingBodyComponent,
    ThemeModeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }