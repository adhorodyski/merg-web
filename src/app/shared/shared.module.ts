import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideDirective } from '@src/app/core';
// pipes
import { SafePipe } from '@src/app/core/pipes';
// components
import {
    AvatarComponent,
    AvatarSelectorComponent,
    BadgeComponent,
    ButtonComponent,
    CountrySelectorComponent,
    FooterComponent,
    InputComponent,
    ModeSelectorComponent,
    PasswordComponent,
    PostComponent,
    SearchResultComponent,
    SearchComponent,
    SocialResultComponent,
    StatusComponent,
    StoryComponent,
    TagComponent,
} from '@src/app/shared/components';
// features
import { PostsComponent, StoriesComponent } from '@src/app/shared/features';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild([])],
    exports: [
        AvatarComponent,
        AvatarSelectorComponent,
        BadgeComponent,
        ButtonComponent,
        CountrySelectorComponent,
        FooterComponent,
        InputComponent,
        ModeSelectorComponent,
        PasswordComponent,
        PostComponent,
        PostsComponent,
        SearchResultComponent,
        SearchComponent,
        SocialResultComponent,
        StatusComponent,
        StoryComponent,
        StoriesComponent,
        TagComponent,
        ClickOutsideDirective,
    ],
    providers: [
        AvatarComponent,
        AvatarSelectorComponent,
        BadgeComponent,
        ButtonComponent,
        CountrySelectorComponent,
        FooterComponent,
        InputComponent,
        ModeSelectorComponent,
        PasswordComponent,
        PostComponent,
        PostsComponent,
        SearchResultComponent,
        SearchComponent,
        SocialResultComponent,
        StatusComponent,
        StoryComponent,
        StoriesComponent,
        TagComponent,
    ],
    declarations: [
        AvatarComponent,
        AvatarSelectorComponent,
        BadgeComponent,
        ButtonComponent,
        CountrySelectorComponent,
        FooterComponent,
        InputComponent,
        ModeSelectorComponent,
        PasswordComponent,
        PostComponent,
        PostsComponent,
        SearchResultComponent,
        SearchComponent,
        SocialResultComponent,
        StatusComponent,
        StoryComponent,
        StoriesComponent,
        TagComponent,
        SafePipe,
        ClickOutsideDirective,
    ],
})
export class SharedModule {}
