import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
    BadgeComponent,
    ButtonComponent,
    CountrySelectorComponent,
    PasswordComponent,
    InputComponent,
    StatusComponent,
    StoryComponent,
} from '@src/app/shared/components';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [
        BadgeComponent,
        ButtonComponent,
        CountrySelectorComponent,
        PasswordComponent,
        InputComponent,
        StatusComponent,
        StoryComponent,
    ],
    providers: [
        BadgeComponent,
        ButtonComponent,
        CountrySelectorComponent,
        PasswordComponent,
        InputComponent,
        StatusComponent,
        StoryComponent,
    ],
    declarations: [
        BadgeComponent,
        ButtonComponent,
        CountrySelectorComponent,
        PasswordComponent,
        InputComponent,
        StatusComponent,
        StoryComponent,
    ],
})
export class SharedModule {}
