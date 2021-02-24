import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import getUser from './util/getUser'
import App from './App';

describe('App renders:', () => {
    it('Renders of app component', async () => {
        render(<App />);

        expect(screen.getByText(/search:/i)).toBeInTheDocument();
        expect(screen.getByAltText('alt text')).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText(/search for.../i),
        ).toBeInTheDocument();
    });

    it("Renders of app's changable parts", async () => {
        render(<App />);

        expect(screen.queryByText(/Logged in as/i)).toBeNull();
        expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
    });
});

// describe('User interacting in app component', () => {
//     it(`Input change`, () => {
//         render(<App />);

//         expect(screen.queryByText(/Searching for React/i)).toBeNull();
//         userEvent.type(screen.getByRole('textbox'), 'React');
//         expect(screen.queryByText(/Searching for React/i)).toBeInTheDocument();
//     });

//     it('Checkbox click', () => {
//         const checkboxClickHandler = jest.fn();
//         const { container } = render(
//             <input type="Checkbox" onClick={checkboxClickHandler} />,
//         );
//         const checkbox = container.firstChild;

//         expect(checkbox).not.toBeChecked();
//         userEvent.click(checkbox);
//         expect(checkbox).toBeChecked();
//     });

//     it('Input focus', () => {
//         const { getByTestId } = render(
//             <input type="text" data-testid="simple-input" />,
//         );
//         const input = getByTestId('simple-input');

//         expect(input).not.toHaveFocus();
//         input.focus();
//         expect(input).toHaveFocus();
//     });

//     it('Tab transitions between multiple elements', () => {
//         const { getByText, getByRole } = render(
//             <>
//                 {/* <select tabIndex="1" className="select">
//                     <option value="1">A</option>
//                     <option value="2">B</option>
//                     <option value="3">C</option>
//                 </select> */}
//                 <div tabIndex="1">lorem</div>
//                 <div tabIndex="2" className="text-box">
//                     some text
//                 </div>
//             </>,
//         );

//         // userEvent.selectOptions(getByRole('combobox'), '1');
//         // expect(getByText('A').selected).toBeTruthy();
//         // expect(getByText('B').selected).toBeFalsy();
//         // expect(getByText('C').selected).toBeFalsy();

//         userEvent.tab();
//         expect(getByText('lorem')).toHaveFocus();
//         expect(getByText('some text')).not.toHaveFocus();
//         userEvent.tab();
//         expect(getByText('lorem')).not.toHaveFocus();
//         expect(getByText('some text')).toHaveFocus();
//     });

//     it('Focusing on several inputs', () => {
//         const { getAllByTestId, getByRole } = render(
//             <>
//                 <input type="checkbox" data-testid="element" />
//                 <input type="text" data-testid="element" />
//                 <input type="radio" data-testid="element" />
//             </>,
//         );
//         const [checkbox, text, radio] = getAllByTestId('element');

//         userEvent.tab();
//         expect(checkbox).toHaveFocus();
//     });
// });
