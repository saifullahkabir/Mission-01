
// selection sort

const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        console.log("State of arr:", array);

        let minIndex = i;
        console.log('min index ->', minIndex);
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
            console.log("value", array[minIndex], "index", minIndex);
        }

        if (minIndex !== i) {
            // let temp = array[i];
            // array[i] = array[minIndex];
            // array[minIndex] = temp;
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }

    }
}

selectionSort([5, 3, 8, 4, 2]);