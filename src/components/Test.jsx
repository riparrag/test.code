import React, { useEffect } from 'react'


export const Test = () => {
    useEffect(() => {        
        console.log('empieza el Test...');
      
        test();

        console.log('Fin Test.');
    });

    function examen(array) {
        console.log('examen');
        const initialTeamList = [
            { name: 'Team1',
              channels: [
                { name: 'Channel1',
                  id: 1
                },
                { name: 'Channel2',
                  id: 2
                }
              ]
            },
            { name: 'Team2',
              channels: [
                { name: 'Channel1',
                  id: 1
                },
                { name: 'Channel2',
                  id: 2
                }
              ]
            }
          ];
          let channelList = initialTeamList[0].channels;
          var channelFounded = channelList.find((channel) => {
            return channel.id === id
        });
        if (channelFounded) {
          channelList.indexOf(channelFounded);
        }
    }

    function test() {
        let array = Array(4);
        examen(array);

        //-----------------------------------------------------------------------------
        array = Array(4);
        array[0] = [112, 42, 83, 119];
        array[1] = [56, 125, 56, 49];
        array[2] = [15, 78, 101, 43];
        array[3] = [62, 98, 114, 108];
        console.log('test2', flippingMatrix(array) );
        
        array = Array(4);
        array[0] = [107, 54, 128, 15];
        array[1] = [12, 75, 110, 138];
        array[2] = [100, 96, 34, 85];
        array[3] = [75, 15, 28, 112];
        console.log('test2', flippingMatrix(array) );

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
/*--------------------------------------------------------------------------*/
    function flippingMatrix(matrix) {
        //reverse col 2
        for (let i=0; i < matrix.length/2; i++) {
            let aux = matrix[i][2];
            matrix[i][2] = matrix[matrix.length-1-i][2];
            matrix[matrix.length-1-i][2] = aux; 
        }
        //reverse row 0
        for (let i=0; i < matrix.length/2; i++) {
            let aux = matrix[0][i];
            matrix[0][i] = matrix[0][matrix.length-1-i];
            matrix[0][matrix.length-1-i] = aux;
        }
        let sum = 0;
        for (let i=0; i<matrix.length/2; i++) {
            for (let j=0; j<matrix.length/2; j++) {
                sum += matrix[i][j];
            }
        }
        return sum;
    }
/*--------------------------------------------------------------------------*/
    function findMedian(arr) {
    
        arr.sort( (a,b) => a - b );
    
        return arr[ Math.floor(arr.length/2) ];
    }
/*--------------------------------------------------------------------------*/
    function fizzBuzz(n) {
        for (let i=1; i<=n; i++) {
            let isMultipleOf3 = i % 3 == 0;
            let isMultipleOf5 = i % 5 == 0;
            if (isMultipleOf3) {
                if (isMultipleOf5) {
                    console.log('FizzBuzz');
                }
                else {
                    console.log('Fizz');
                }
            }
            else {
                if (isMultipleOf5) {
                    console.log('Buzz');
                }
            }
            if (!isMultipleOf3 && !isMultipleOf5) {
                console.log(i);
            }
        }
    }
/*--------------------------------------------------------------------------*/
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
/*--------------------------------------------------------------------------*/
    function diagonalDifference(array) {
        let rightDiagonalSum = 0;
        let leftDiagonalSum = 0;
        
        for (let i=0; i < array.length; i++) {
            rightDiagonalSum += array[i][i];
            leftDiagonalSum  += array[i][array.length-1 - i];
        }

        return Math.abs( rightDiagonalSum - leftDiagonalSum );
    }
/*--------------------------------------------------------------------------*/
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
/*--------------------------------------------------------------------------*/
    /*
    * Complete the 'timeConversion' function below.
    * The function is expected to return a STRING.
    * The function accepts STRING s as parameter.
    */
    function timeConversion(time) {
        const AM = 'AM';
        const PM = 'PM';

        if (time.length != 10) {
            throw new Error(`time string must have 10 digits like 07:05:45PM`);
        }
        if (![AM,PM].includes(time.substring(8,10))) {
            throw new Error(`time string must ends with ${AM} or ${PM}`);
        }
        let amPmFormat = time.substring(8,10);
        time = time.substring(0,8);
        let timeArray = time.split(':')
        if (timeArray.length != 3) {
            throw new Error(`time string must have format HH:mm:ssAA`);
        }
        let hour = parseInt(timeArray[0]);

        if (hour > 12) {
            throw new Error('hour must be in AM between 0 and 12')
        }

        switch (amPmFormat) {
            case AM:
                if (hour == 12) hour = 0;
                break;

            case PM:
                hour += 12;
                if (hour == 24) hour = 12;
                break;
        }
        return `${hour.toString().padStart(2,'0')}:${timeArray[1]}:${timeArray[2]}`;
    }
/*--------------------------------------------------------------------------*/
    /*
    * Complete the 'miniMaxSum' function below
    * The function accepts INTEGER_ARRAY arr as parameter.
    */
    function miniMaxSum(array) {
        let maxMinSum = {
            maxSum: null,
            minSum: null
        }
        for (let i=0; i<array.length; i++) {  
            let sum = sumOthers(array,i);//sum others but this element
            if (maxMinSum.maxSum == null || sum > maxMinSum.maxSum) {
                maxMinSum.maxSum = sum;
            }
            if (maxMinSum.minSum == null || sum < maxMinSum.minSum) {
                maxMinSum.minSum = sum;
            }
        }
        console.log(`${maxMinSum.minSum} ${maxMinSum.maxSum}`);
    }

    function sumOthers(array, index) {
        let sum = 0;
        array.forEach(function(number, i) {
            if (i != index) {
            sum += number;
            }
        })
        return sum;
    }
/*--------------------------------------------------------------------------*/
    /*
    * Complete the 'plusMinus' function below.
    * The function accepts INTEGER_ARRAY arr as parameter.
    */
    function plusMinus(array) {
        if (array.length <= 0) {
            throw new Error("array must have elements");
        }
        if (array.length > 100) {
            throw new Error("array cannot have more than 100 elements");
        }
        let plusMinusRatios = {
            positives: 0,
            negatives: 0,
            zeros: 0,
            positivesRatio:0,
            negativesRatio:0,
            zerosRatio:0
        }
        for (let i=0; i<array.length; i++) {
            detectRightRatio(array[i], plusMinusRatios);
        }
        plusMinusRatios.positivesRatio = plusMinusRatios.positives/array.length;
        plusMinusRatios.negativesRatio = plusMinusRatios.negatives/array.length;
        plusMinusRatios.zerosRatio = plusMinusRatios.zeros/array.length;
        console.log( plusMinusRatios.positivesRatio.toFixed(6) );
        console.log( plusMinusRatios.negativesRatio.toFixed(6) );
        console.log( plusMinusRatios.zerosRatio.toFixed(6) );
    }

    function detectRightRatio(number, plusMinusRatios) {
        if (number > 0) {
        plusMinusRatios.positives++;
        }
        if (number < 0) {
        plusMinusRatios.negatives++;
        }
        if (number == 0) {
        plusMinusRatios.zeros++;
        }
    }
/*--------------------------------------------------------------------------*/

    return (
        <div>Test</div>
    )
}

export default Test;
