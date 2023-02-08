import { getAllByText, render, screen } from '@testing-library/react';    
import userEvent  from '@testing-library/user-event';

import Todo from './Todo';

describe("Todo Testleri",() => {
    let button,input;

    beforeEach(() => {
        render(<Todo />);
        button = screen.getByText("Add");
        input = screen.getByLabelText("Text");
    });

    test("varsayılan olarak verilen 3 nesne render edilmeli", () => {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    });

    test("input ve button dökümanda bulunmalı", () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });
    test("inputa string girilip butona basılınca listeye eklenmeli", () => {
        //inputu dldur
        const name ="Mehmet";
        userEvent.type(input, name);

        //butona tıkla
        userEvent.click(button);

        //assertion
        expect(screen.getByText(name)).toBeInTheDocument();

    })

})