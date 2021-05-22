let checkboxs = $$('.box label input[type=checkbox]') //复选框
let haizi = $$('.box .checkbox label input[type=checkbox]') //复选框
let haizishuxing = $$('.box .checkbox label input[type=checkbox].checked') //获得checked属性
let btnS = $$('.box .bottom input[type=checkbox]') //按钮

//封装函数
function getAll(num) {
    for (let i = 0; i < checkboxs.length; i++) {
        if(num === 0) {
            checkboxs[i].checked = true
        }else if (num === 1) {
            checkboxs[i].checked = false
        }else {
            checkboxs[i].checked = !checkboxs[i].checked
        }
    }
}
let count = 0;
for (let i = 0; i < haizi.length; i++) {
    //孩子
    haizi[i].onclick = function () {
        //  第二种办法
        count += 1
        //所有的孩子选中的时候让父亲选中
        btnS[0].checked = (count === haizi.length);
        console.log(btnS[0].checked)
        console.log(count)
        console.log(haizi.length)
        // debugger 第一种办法
        // btnS[0].checked = true
        // console.log(haizi[i])
        // if (haizi[i].checked) {
        //     btnS[0].checked = false
        // }
    }

}
btnS[0].onclick = function () {
    getAll(0)
}
btnS[1].onclick = function () {
    getAll(1)
}
btnS[2].onclick = function () {
    getAll(2)
}

//
// //全选
// btnS[0].onclick = function () {
//     for (let i = 0; i < checkboxs.length; i++) {
//         checkboxs[i].checked = true
//         console.log( checkboxs[i])
//     }
// }
//
// //全不选
// btnS[1].onclick = function () {
//     for (let i = 0; i < checkboxs.length; i++) {
//         checkboxs[i].checked = false
//     }
// }
//
// //反选
// btnS[2].onclick = function () {
//     for (let i = 0; i < checkboxs.length; i++) {
//         checkboxs[i].checked = !checkboxs[i].checked
//     }
// }
//
//
