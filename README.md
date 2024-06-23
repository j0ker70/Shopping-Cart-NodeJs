# Green Day Store

A simple e-commerce web application for the band Green Day. Users can browse items, add them to a cart, and purchase using Stripe for payment processing.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Installation

To get started with the project, clone the repository and install the necessary dependencies.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or later)
- [npm](https://www.npmjs.com/)

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/green-day-store.git
   cd green-day-store
   ```

## Install Dependencies

To get started with the project, install the necessary dependencies.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/)

### Steps

1. **Install dependencies:**

   ```sh
   npm install
   ```

## Configuration

### Environment Variables

Create a `.env` file in the root of your project directory and add your Stripe API keys:

```makefile
 STRIPE_SECRET_KEY=your_stripe_secret_key
 STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## Running the Project

To run the project, make sure you have Node.js installed on your machine.

### Start the Server

```sh
npm start
```

The application will be available at **http://localhost:3000**.

## Usage

- **Browsing Items**: Users can browse music and merchandise items.
- **Adding to Cart**: Click "ADD TO CART" to add items to the shopping cart.
- **Purchasing Items**: Click "PURCHASE" to initiate the Stripe checkout process.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **Stripe**: Payment processing platform.
- **EJS**: Templating language for generating HTML.

## Contributing

If you would like to contribute to the project, please fork the repository and create a pull request. We welcome all contributions.
