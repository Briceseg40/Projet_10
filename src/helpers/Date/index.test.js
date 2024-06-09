import { fireEvent, render, screen } from "@testing-library/react";
/**
 * 
 */

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            render(<Date />);
            expect( screen.getByTestId("event_month")).toBeInTheDocument();  
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            // to implement
        });
    });
})

