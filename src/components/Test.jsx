import React, { useEffect } from 'react'


export const Test = () => {
    useEffect(() => {        
        console.log('empieza el Test...');
      
        test();

        console.log('Fin Test.');
    }, [])

    function test() {
        let integers = [1,2,3,4,3,2,1];
        console.log('lonelyinteger', lonelyinteger( integers ));
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
