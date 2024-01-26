function binarySearch(arr: [], target: number): string {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(target === arr[middleIndex]) {
            return 'The number is on position '+ middleIndex;
        }

        if(target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        }else {
            leftIndex = middleIndex + 1;
        }
    }

    return `Target ${target} not found`;
}


// let customList = 
