import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export default class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value);
    console.log(val);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }

    return val;
  }
}
