const array1 = [10, 20, 30, 40, 50, 60, 10];
const array2 = [10, 50, 10, 50];

const intersection = array1
                    .filter((item, index) => {return array1.indexOf(item) === index})
                    .filter(e => array2.includes(e));

console.log(intersection); 
