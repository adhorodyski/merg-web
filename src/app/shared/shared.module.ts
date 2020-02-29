import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeComponent, StoryComponent } from '@src/app/shared/components';

@NgModule({
    imports: [CommonModule],
    exports: [StoryComponent, BadgeComponent],
    providers: [StoryComponent, BadgeComponent],
    declarations: [StoryComponent, BadgeComponent],
})
export class SharedModule {}
