// const arr = [100, [200,300],["javascript",'jquery']];

// console.log(arr[0]);
// console.log(arr[1][0]);
// console.log(arr[1][1]);
// console.log(arr[2][0]);
// console.log(arr[2][1]);

// console.log("-----")
// const obj = {a:100,b:200,c:"javascript"};

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);

// let a = 10;
// let b = 2;
// let c = "10";

// console.log(a>b);
// console.log(a!=b);
// console.log(a===c);
// console.log("-----")

// if (a>=5 && b ==22) {
//     document.write("두가지 조건을 모두 만족!");
// }else{
//     document.write("두가지 조건을 다 만족하지는 못합니다!");
// };

// const num = 100;
// if(num == 100){
//     document.write("실행되었습니다.(true)");
// }
// if(num == 100) document.write("실행되었습니다.(true)");

// if(num == 100) document.write("실행되었습니다.(true)");
// else document.write("실행되었습니다.(false)");

// //삼항
// (num == 100)? document.write("true"): document.write(false);

const num = 100;

switch(num){
    case 90:
        document.write("실행되었습니다.(90)");
        break;
        case 95:
        document.write("실행되었습니다.(95)");
        break;
        case 100:
        document.write("실행되었습니다.(95)");
        break;
        case 105:
        document.write("실행되었습니다.(95)");
        break;
    default:
        document.write("실행되었습니다");
}