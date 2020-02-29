import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeComponent, StatusComponent, StoryComponent } from '@src/app/shared/components';

@NgModule({
    imports: [CommonModule],
    exports: [StoryComponent, BadgeComponent, StatusComponent],
    providers: [StoryComponent, BadgeComponent, StatusComponent],
    declarations: [StoryComponent, BadgeComponent, StatusComponent],
})
export class SharedModule {}
