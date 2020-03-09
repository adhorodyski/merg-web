import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafePipe } from '@src/app/core';

import {
    AvatarComponent,
    BadgeComponent,
    ButtonComponent,
    CountrySelectorComponent,
    InputComponent,
    ModeComponent,
    PasswordComponent,
    PostComponent,
    SearchResultComponent,
    SocialResultComponent,
    StatusComponent,
    StoryComponent,
    TagComponent,
} from '@src/app/shared/components';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [
        AvatarComponent,
        BadgeComponent,
        ButtonComponent,
        CountrySelectorComponent,
        InputComponent,
        ModeComponent,
        PasswordComponent,
        PostComponent,
        SearchResultComponent,
        SocialResultComponent,
        StatusComponent,
        StoryComponent,
        TagComponent,
    ],
    providers: [
        AvatarComponent,
        BadgeComponent,
        ButtonComponent,
        CountrySelectorComponent,
        InputComponent,
        ModeComponent,
        PasswordComponent,
        PostComponent,
        SearchResultComponent,
        SocialResultComponent,
        StatusComponent,
        StoryComponent,
        TagComponent,
    ],
    declarations: [
        AvatarComponent,
        BadgeComponent,
        ButtonComponent,
        CountrySelectorComponent,
        InputComponent,
        ModeComponent,
        PasswordComponent,
        PostComponent,
        SearchResultComponent,
        SocialResultComponent,
        StatusComponent,
        StoryComponent,
        TagComponent,
        SafePipe,
    ],
})
export class SharedModule {}
