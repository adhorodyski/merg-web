import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    AvatarComponent,
    BadgeComponent,
    ButtonComponent,
    CountrySelectorComponent,
    InputComponent,
    ModeComponent,
    PasswordComponent,
    SearchResultComponent,
    StatusComponent,
    StoryComponent,
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
        SearchResultComponent,
        StatusComponent,
        StoryComponent,
    ],
    providers: [
        AvatarComponent,
        BadgeComponent,
        ButtonComponent,
        CountrySelectorComponent,
        InputComponent,
        ModeComponent,
        PasswordComponent,
        SearchResultComponent,
        StatusComponent,
        StoryComponent,
    ],
    declarations: [
        AvatarComponent,
        BadgeComponent,
        ButtonComponent,
        CountrySelectorComponent,
        InputComponent,
        ModeComponent,
        PasswordComponent,
        SearchResultComponent,
        StatusComponent,
        StoryComponent,
    ],
})
export class SharedModule {}
