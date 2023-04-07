import React from 'react';
import {Text} from '@chakra-ui/react';

class Point {
    x!: number;
    y!: number;
  }
   
  const pt = new Point();
  pt.x = 0;
  pt.y = 0;

  class GoodGreeter {
    name;
   
    constructor() {
      this.name = "hello";
    }
  }
interface Employee {
    empId:number,
    empName:string,
    empRole:string
}

enum CheckConstants  {
    North=1,
    South,
    West,
    East

}

let emp:Employee = {
    empId: null,
    empName:'Karthik',
    empRole:'SDE'
}

const EmployeeFunction = (hello?:number,world='') => {

    console.log(hello,world)


}

function demo1<T,S>(param: T,params:S): [T,S] {
    return [param,params];
    }


    function loggingIdentity<Type>(arg: Type[]): Type[] {
        console.log(arg.length);
        return arg;
      }

   

const TypesCheck = () => {


    

    console.log("enums", CheckConstants.North,CheckConstants);
    return (
        <>
<Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
  textAlign={[ 'left','center' ]}
>
{`The nmber Return is ${EmployeeFunction(34,"string")} ${CheckConstants.West}`}
</Text>
        </>
    )



}

export default TypesCheck