var myAtoi = function(str) {
    let t = '';
    let r = '';
    let reg = /[0-9]/;
    let mark = '';
    if (str == '') {
        return 0
    }
    if (str[0] === '-' || str[0] === '+') {
        mark = str[0];
    } else if (str[0] == ' ') {
        r = '';
    } else if (!reg.test(str[0])) {
        return 0
    } else {
        r = str[0]
    }
    for (let i = 1, l = str.length; i < l; i++) {
        if (str[i] == ' '&& mark=='') {
            if (r.length == 0) {
                continue
            } else {
                if (r.length > t.length) {
                    t = r;
                }
                r = '';
            }
        }
        if (reg.test(str[i])) {
            r = r + str[i];
        } else {
            if ((str[i] === '-' || str[i] === '+') && mark == ''&&r.length==0) {
                mark = str[i];
                continue
            }
            if (r.length > t.length) {
                t = r;
            }
            break
        }
    }
    if (r.length > t.length) t = r;
    if(t=='') return 0;
    let num = Number(mark + t);
    if (num > 2147483647) {
        return 2147483647
    }
    if (num < -2147483648) {
        return -2147483648
    }
    return num
};