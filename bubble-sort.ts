console.log('--------------------------------Bubble sort--------------------------------');
function bubbleSort(list: number[]): void {
    for(let i = 0;i<list.length;++i) {
        for(let j = 0;j<list.length - 1 - i;++j) {
            if(list[j] > list[j + 1]) {
                const temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    console.log(list);
}


bubbleSort([4,3,56,34,645,45,66,123,164,236,745,678,3444]);