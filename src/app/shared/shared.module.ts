import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// pipes
import { SafePipe } from '@src/app/core/pipes/safe.pipe';
// directives
import { ClickOutsideDirective } from '@src/app/core/directives/click-outside.directive';
// components

import { AvatarComponent } from '@src/app/shared/components/avatar/avatar.component';
import { AvatarSelectorComponent } from '@src/app/shared/components/input/avatar-selector/avatar-selector.component';
import { BadgeComponent } from '@src/app/shared/components/badge/badge.component';
import { ButtonComponent } from '@src/app/shared/components/button/button.component';
import { CountrySelectorComponent } from '@src/app/shared/components/input/country-selector/country-selector.component';
import { FooterComponent } from '@src/app/shared/components/footer/footer.component';
import { InputComponent } from '@src/app/shared/components/input/input.component';
import { ModeSelectorComponent } from '@src/app/shared/components/input/mode-selector/mode-selector.component';
import { PasswordComponent } from '@src/app/shared/components/input/password/password.component';
import { PostComponent } from '@src/app/shared/components/post/post.component';
import { SearchResultComponent } from '@src/app/shared/components/search-result/search-result.component';
import { SearchComponent } from '@src/app/shared/components/input/search/search.component';
import { SocialResultComponent } from '@src/app/shared/components/social-result/social-result.component';
import { StatusComponent } from '@src/app/shared/components/status/status.component';
import { StoryComponent } from '@src/app/shared/components/story/story.component';
import { TagComponent } from '@src/app/shared/components/input/tag/tag.component';
// features
import { PostsComponent } from '@src/app/shared/features/posts/posts.component';
import { StoriesComponent } from '@src/app/shared/features/stories/stories.component';

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
