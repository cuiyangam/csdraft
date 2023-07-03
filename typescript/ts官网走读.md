基础
    静态类型检查提前发现错误
    npm install -g typescript
    编译时候类型擦除

日常类型
    原始类型 string number boolean
    数组类型 number[] Array<number>
    any类型
    类型自动推断 const let var可以声明变量
    对象类型
        可选属性 ?:
    联合类型 string | number
    类型别名 type UserInputSanitizedString = string;
    接口 interface A {}
    类型断言 as Type  <>
    字面量类型 let x: "hello" = "hello"; -1 | 0 | 1
    将字面量对象断言为字面量类型 as const 
    null undefined
    非空断言 x!.toFixed()
    枚举类型
    其他原始类型 bigint symbol 

类型缩小
    typeof  typeof null === 'object'
    in 对象或其原​​型链是否具有带名称的属性 "swim" in animal
    instanceof 有一个运算符来检查一个值是否是另一个值的“实例”