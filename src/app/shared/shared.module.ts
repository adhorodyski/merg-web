import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryComponent } from '@src/app/shared/components';

@NgModule({
    imports: [CommonModule],
    exports: [StoryComponent],
    providers: [StoryComponent],
    declarations: [StoryComponent],
})
export class SharedModule {}
