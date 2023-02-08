import { render, screen } from '@testing-library/react';    
import userEvent  from '@testing-library/user-event';
import Counter from './Counter';


describe("Counter Tests",() =>{
    let increaseBtn,decreaseBtn,count
    beforeEach(() => {
        console.log("her testten önce çalişacam");
        render(<Counter />);
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
        count = screen.getByText("0");
    });
    beforeAll(() => {
        console.log("ilk başta birkere çalışacam");
    });
    afterAll(() => {
        console.log("en son bir kere çalişacam");
    });
    afterEach(() => {
        console.log("her testten sonra çalişacam");
    });
    //test ile it aynı işi yapar
    it("increase btn", () =>{
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1")
    });

    it("decrease btn", () =>{
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1")
    });
});


