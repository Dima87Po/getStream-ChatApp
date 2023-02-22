import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPageComponent } from '../chat/chat-page/chat-page.component';
import { ChatRoutingModule } from '../chat/chat-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ChannelsModule } from '../channels/channels.module';
import { StreamChatModule, StreamAutocompleteTextareaModule } from 'stream-chat-angular';


@NgModule({
    declarations: [
        ChatPageComponent
    ],
    imports: [
        CommonModule,
        ChatRoutingModule,
        TranslateModule.forChild(),
        ChannelsModule,
        StreamChatModule,
        StreamAutocompleteTextareaModule
    ]

})

export class ChatModule { }
