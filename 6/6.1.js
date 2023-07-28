let objects = [
{ name: 'Василий', surname: 'Васильев' },
{ name: 'Иван', surname: 'Иванов' },
{ name: 'Пётр', surname: 'Петров' }
]

function filterObject(objects, key, value){
  let mass=[];
  for(let k of objects){
    if(k.name==value){
      mass.push(k);
    }
  }
  return mass;
}
let result = filterObject(objects, 'name', 'Пётр');

console.log(result);

