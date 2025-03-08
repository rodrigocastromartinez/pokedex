import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`The id ${id} is not a valid mongo id`);
    }
    return id;
  }
}
