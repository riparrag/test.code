import React, { useEffect } from 'react'


export const Test = () => {
    useEffect(() => {        
        console.log('empieza el Test...');
      
        test();

        console.log('Fin Test.');
    });

    function test() {
        //-----------------------------------------------------------------------------
        let array = [5,3,4,2,1];
        console.log('test2', test2(array) );
        
        //-----------------------------------------------------------------------------
/*        array = [5,3,4,2,1];
        console.log('findMedian', findMedian(array) );

        //-----------------------------------------------------------------------------
        //processData
        //processData();
        
        //-----------------------------------------------------------------------------
        //countingSort
         array = [1,1,3,2,1];

        console.log('countingSort', countingSort(array));

        //-----------------------------------------------------------------------------
        //diagonalDifference
        array = Array(4);
        array[0] = [-1,1,-7,-8];
        array[1] = [-10,-8,-5,-28];
        array[2] = [0,9,7,-1];
        array[3] = [4,4,-2,1];
        console.log('diagonalDifference', diagonalDifference(array) );

        //-----------------------------------------------------------------------------
        //lonelyinteger
        let integers = [1,2,3,4,3,2,1];
        console.log('lonelyinteger', lonelyinteger( integers ));
        //-----------------------------------------------------------------------------
*/
    }

    function findMedian(arr) {
    
        arr.sort( (a,b) => a - b );
    
        return arr[ Math.floor(arr.length/2) ];
    }


    function countingSort(array) {
        let countingArray = Array(100).fill(0);
        for (let i=0; i<array.length; i++) {
            let number = array[i];
            if (number >= 0 || number <= 100) {
                countingArray[number]++;
            }
        }
        return countingArray;
    }
    

    function diagonalDifference(array) {
        let rightDiagonalSum = 0;
        let leftDiagonalSum = 0;
        
        for (let i=0; i < array.length; i++) {
            rightDiagonalSum += array[i][i];
            leftDiagonalSum  += array[i][array.length-1 - i];
        }

        return Math.abs( rightDiagonalSum - leftDiagonalSum );
    }

    function lonelyinteger(integers) {
        let map = new Map();

        integers.forEach(number => {
            let count = map.get(number);
            if (count) {
                count++;
            }
            else {
                count = 1;
            }
            map.set(number, count);
        });
        
        let mapIterator = map.entries();
        let found = undefined;
        let entry = mapIterator.next();
        
        while (entry && !found) {
            if (entry.value[1] === 1) {//ask for value is 1
                found = entry.value[0];//key
            }
            entry = mapIterator.next();
        }
        return found
    }

    return (
        <div>Test</div>
    )
}

export default Test;
