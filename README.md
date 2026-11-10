# Taste House 🍽️
## Restaurant Ordering System

Taste House is a React-based restaurant ordering website developed for **CSCI426 – Advanced Web Programming** at Lebanese International University.

The application demonstrates a front-end restaurant ordering flow: visitors can browse menu items, add products to a cart, update quantities, enter customer details at checkout, and view an order confirmation.

## Features

- Home page introducing the restaurant.
- Menu page with food categories and product cards.
- Add products to the cart.
- Increase, decrease, and remove cart items.
- Cart total calculation.
- Checkout form for customer name, phone number, and delivery address.
- Order confirmation with customer and order details.
- About and Contact pages.
- Responsive layout for desktop and mobile screens.

## Pages

- Home
- Menu
- Cart
- Checkout
- Confirmation
- About
- Contact

## Technologies

- React
- JavaScript
- Vite
- CSS
- React Router DOM
- Git and GitHub

## Run the project locally

**Requirements:** Node.js (version 20.19+ or 22.12+) and npm.

1. Clone the repository:

   `git clone https://github.com/hayattlayss70-maker/Taste-House.git`

2. Open the project folder:

   `cd Taste-House`

3. Install dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. Open the local address printed in the terminal.

## Build

To create a production build, run:

`npm run build`

## Deployment

The project is configured for GitHub Pages deployment using GitHub Actions.

After enabling **Settings → Pages → Build and deployment → Source: GitHub Actions**, each push to the `main` branch can publish the website.

Website URL (available after the first successful deployment):

https://hayattlayss70-maker.github.io/Taste-House/

## Screenshots

Add real screenshots of the running application to a folder named `screenshots` in the repository. Suggested files:

- `screenshots/home.png`
- `screenshots/menu.png`
- `screenshots/cart.png`
- `screenshots/checkout.png`
- `screenshots/confirmation.png`

The screenshots must show the actual project interface.

## Project information

- **Course:** CSCI426 – Advanced Web Programming
- **University:** Lebanese International University
- **Developer:** Hayat Tlayss
- **Project:** Individual project

## Current limitations

This is a front-end demonstration. It does not currently use a connected back-end database, persist orders on a server, or process real online payments. The Contact form displays a local thank-you alert; it does not send messages to a server.
