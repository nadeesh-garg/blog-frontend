import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'filter'
  //pure: false
})
 export class FilterPipe implements PipeTransform {
  //TODO: Edit for Tag support
 transform(items: any[], term: string): any {
    if (term === undefined || term === '') return items;
    return items.filter(function(item) {
      //console.log(term);
      for(let property in item){
        if (item[property] === null){
          continue;
        }
        if(item[property].toString().toLowerCase().includes(term.toLowerCase())){
          return true;
        }
         if(property =='tags' || property =='genre'){
           if(item[property].some(e => e.name.toString().toLowerCase().includes(term.toLowerCase()))){
           //console.log(item[property]);
          return true;
         }

        }
         if(property='title'){
           if(item[property].toString().toLowerCase().includes(term.toLowerCase())){
          return true;
            }
         }
       }
      return false;
    });
  }
}
