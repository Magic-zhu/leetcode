// * 区间列表的交集
/**
 *
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
 var intervalIntersection = function(firstList, secondList) {
    let m = 0
    let n = 0
    let r = []
    while(m<firstList.length && n<secondList.length){
        const mt = firstList[m]
        const nt = secondList[n]
        const mMin = mt[0]
        const mMax = mt[1]
        const nMin = nt[0]
        const nMax = nt[1]
        if(mMax<nMin){
            m++
        }else if(mMin>nMax){
            n++
        }else {
            r.push([Math.max(mMin,nMin),Math.min(mMax,nMax)])
            if(mMax<nMax){
                m++
            }else{
                n++
            }
        }
    }
    return r
};