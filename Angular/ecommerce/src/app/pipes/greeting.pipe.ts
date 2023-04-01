import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'
})
export class GreetingPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return args[0] + value + args[0];
  }

}
