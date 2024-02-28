# CartPage Project Using Redux

This project is a simple e-commerce application called CartPage, developed using React and Redux. The main feature of this application is the cart functionality, where users can add, remove, and update items in their shopping cart. The project utilizes Redux for state management, enabling efficient handling of complex application states.

## Features
- **Cart Functionality**: Users can add products to their cart, remove them, and update the quantity of items.
- **Redux Integration**: The project is implemented using Redux for state management, allowing for centralized control of application state.

## How it's done using Redux
In this project, Redux is used to manage the application's state, particularly for the cart functionality. The state related to the cart, such as the list of items, their quantities, and other relevant data, is stored in the Redux store. Actions are dispatched to add, remove, or update items in the cart, and corresponding reducers handle these actions to update the state in the Redux store. Components can access the cart state and dispatch actions using Redux hooks like `useSelector` and `useDispatch`, allowing for seamless integration of Redux with React components. This approach ensures a single source of truth for the application's state, making it easier to manage and maintain, especially as the project scales.
