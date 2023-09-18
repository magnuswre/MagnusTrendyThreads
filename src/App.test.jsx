/* 

step 1 describe the test
step 2 render functions
step 3  test event  
step 4 the testresult should be as expected 

*/

import { it, expect } from 'vitest'

const func = () => {
    return true
}

it('should return true', () =>{
   const result = func()
  expect(result).toBe(true)
})