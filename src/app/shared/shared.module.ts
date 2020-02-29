import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeComponent, ButtonComponent, StatusComponent, StoryComponent } from '@src/app/shared/components';

@NgModule({
    imports: [CommonModule],
    exports: [BadgeComponent, ButtonComponent, StatusComponent, StoryComponent],
    providers: [BadgeComponent, ButtonComponent, StatusComponent, StoryComponent],
    declarations: [BadgeComponent, ButtonComponent, StatusComponent, StoryComponent],
})
export class SharedModule {}
