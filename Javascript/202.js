// 快乐数

/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    const appeared = {};
    const numToStringArray = (num) =>{
        let s = num.toString()
        let s_arr = []
        for(let i = 0;i<s.length;i++){
            s_arr.push(s[i])
        }
        return s_arr
    }
    let r = false
    const calculate = (num) =>{
      let sArr = numToStringArray(num)
      let newNum = 0
      sArr.forEach((t)=>{
        newNum += Math.pow(+t,2)
      })
      if(newNum===1){
          r = true
      } else {
        // 判断是否存在循环
        if(!appeared[newNum]){
          appeared[newNum] = 1
          calculate(newNum)
        }
      }
    }
    calculate(n)
    return r
};