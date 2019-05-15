import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbyfirstname'
})
export class SearchbyfirstnamePipe implements PipeTransform {

  transform(value: any, searchText: string): any {
   //  if(!searchText) return value;
  if(searchText === undefined) return value;


        return value.filter(it => {
        return it.firstName.toLowerCase().includes(searchText);
    //     return it.hospital_city.toLowerCase().includes(searchCity);

     });
  //  return null;
  }

}
