/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// TODO not good
 var findAnagrams = function(s, p) {
  const chunkLen = p.length
  const len = s.length - p.length + 1
  const map = {}
  for(let i = 0;i < p.length;i++ ){
      if(!map[p[i]]) map[p[i]] = 1
      else map[p[i]] += 1
  }
  const compare = (p)=>{
      let map2 = {}
      for(let i = 0;i < p.length;i++ ){
          if(!map2[p[i]]) map2[p[i]] = 1
          else map2[p[i]] += 1
      }
      for(let key in map){
          if(map[key]!==map2[key]){
              return false
          }
      }
      return true
  }
  let r = []
  for(let i = 0;i < len;i++ ){
      if(compare(s.substring(i,i+chunkLen))){
          r.push(i)
      }
  }
  return r
};
