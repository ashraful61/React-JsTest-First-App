import { act, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// describe('app component testing', () => {

//   test('first react app test case 1', () => {
//     render(<App />);
//     const text = screen.getByText("my test react app");
//     expect(text).toBeInTheDocument();
//     const imgTitle = screen.getByTitle("test image title");
//     expect(imgTitle).toBeInTheDocument();

//   });

//   test('input box testing test case 2', () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();

//     const getPlaceHolderText = screen.getByPlaceholderText("user name");
//     expect(getPlaceHolderText).toBeInTheDocument();

//     expect(checkInput).toHaveAttribute('name', 'user_name')
//   });

// })

// describe.skip('app component testing 2', () => {

//   test('description 2', () => {
//     render(<App />);
//     const text = screen.queryByText("aasdas as");
//     expect(text).not.toBeInTheDocument();
//   });

// })

// describe.only('app component testing 3', () => {

//   test('description 2', () => {
//     render(<App />);
//     const text = screen.queryByText("aasdas as");
//     expect(text).not.toBeInTheDocument();
//   });

// })



// describe('app component with Input change event', () => {

//   test('description 2', () => {
//     render(<App />);
//     const text = screen.queryByText("aasdas as");
//     expect(text).not.toBeInTheDocument();
//   });

// })

// test("On change event testing", () => {
//   render(<App />);

//   const input = screen.getByRole("textbox");

//   fireEvent.change(input, {target: {value: "a"}})
//   expect(input.value).toBe('a')

// })
test("click event testing", () => {
  render(<App />);

  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText('Updated data test')).toBeInTheDocument()

})


// Snapshot testing 


test('snapshot for app component', async () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });


