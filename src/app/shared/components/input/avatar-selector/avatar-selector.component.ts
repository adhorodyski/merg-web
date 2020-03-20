import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ComponentsSizesEnum } from '@src/app/core/models/components-sizes.enum';
import { FormControlsEnum } from '@src/app/core/models/form-controls.enum';
import { ModesEnum } from '@src/app/core/models/modes.enum';
import { IUser } from '@src/app/core/models/user.model';

@Component({
    selector: 'app-avatar-selector',
    templateUrl: './avatar-selector.component.html',
    styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent {
    @Input() user: IUser;
    @Input() type: FormControlsEnum;
    @Output() clickMode: EventEmitter<ModesEnum> = new EventEmitter<ModesEnum>();

    @ViewChild('avatarInput', { static: false }) avatarInput: ElementRef;

    sizes = ComponentsSizesEnum;

    constructor() {}

    openFileBrowser(): void {
        this.avatarInput.nativeElement.click();
    }

    uploadAvatar($event): void {
        const files: FileList = $event.target.files;
        const reader = new FileReader();

        if (files && files.length) {
            const file: File = files[0];
            reader.readAsDataURL(file);

            reader.onloadend = () => {
                console.log(reader.result);
            };
        }
    }
}
