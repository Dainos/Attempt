attempt = (available, allowed, preferred) => {
  let result = [],      
  prefered_result = [],
  preferedAny = 0     // кiлькiсть 'any'
  allowed.forEach(element => {      //перевiрка дозволенного
    if (element === 'any') { 
    result = available
    return
  }
    let e = available.find(item => item === element)
    e === undefined ? null : result.push(e)
  })


  preferred.forEach(element => {      //перевiрка бажаного
    if (element === 'any') {
      preferedAny++      
      return
    }
    let e = result.find(item => item === element)
    if (e != undefined) prefered_result.push(element)
    
  })

  for (let i = 0; i < preferedAny; i++) {   //використання найбiльш пiыдходящого значення замiсть 'any'
    let res = result.sort((a,b) => b - a)
    res.forEach(element => {
      if (!prefered_result.includes(element) && 
          prefered_result.length < preferred.length) prefered_result.push(element)
      return
    });
    
  }
  
  
  prefered_result.sort() 
  

  if (prefered_result.length != 0 && result.length != preferred.length) result = prefered_result
  
  result.sort( (a, b) => a - b );
  return result.length === 0 ? 'error' : result
}

//-------------------------------------------------------

// let available = [240, 360, 720]
// let allowed = [240, 360, 720, 1080] 
// let preferred = [240, 360]

console.log(attempt(available, allowed, preferred));