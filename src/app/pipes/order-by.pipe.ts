import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
  transform(array) {
    return [...array].sort((a, b) => {
      if (a.isDefault > b.isDefault) return 1;
      if (b.isDefault > a.isDefault) return -1;

      return 0;
    });
  }
}
