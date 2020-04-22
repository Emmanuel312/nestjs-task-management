import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';

@Injectable()
export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
  ];

  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(
        `Status not supported, some status allowed are: DONE,OPEN,IN_PROGRESS`,
      );
    }
    return value;
  }

  private isStatusValid(value: any): boolean {
    const idx = this.allowedStatuses.indexOf(value);

    return idx !== -1;
  }
}
