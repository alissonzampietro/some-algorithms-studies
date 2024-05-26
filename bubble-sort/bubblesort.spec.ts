import { sorting } from ".";

describe('Bubble sort', () => {
    it("should sort the list", () => {
        let inputList = [34,19,6,1,28];
        let expectedList = [1,6,19,28,34];
        expect(sorting(inputList)).toEqual(expectedList); 
    })
})