import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const regex = new RegExp('^[0-9]+$');
    if (!regex.test(value)) {
      throw new BadRequestException(`${value} is not number`);
    }

    return parseInt(value, 10);
  }
}
