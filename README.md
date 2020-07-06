# v20-geckos-team-03
Chingu Voyage 20 Team Project - [Chingu.io](https://chingu.io)

# Geckos 03 Team - e-Commerce App

For Chingu Voyage 20 the Geckos team 03 created a e-Commerce App for doughnuts based on Amazon. This was created over 6-weeks following the
Agile Scrum methodology.

Some of the features of this app are:

- Fetch the original product (doughnuts) information data from [Contentful](https://www.contentful.com/) and list it on landing page
- Find the each products' detailed information such as product description and similar products
- Add the products to the cart and go to checkout
- Checkout the products in your shopping cart (this checkout is fake obviously so your payment is not actually going to be processed!)

The app is deployed [here](https://v18toucans05.netlify.app/).

## Getting Started

This project is based on several packages including [React](https://reactjs.org/), [Redux](https://redux.js.org/),
[Contenful](https://www.contentful.com/) and [Stripe](https://stripe.com/).

### Running Locally

1. Fork or clone the project from this repo
2. `npm install` to download and install packages from `package.json`
3. `npm run develop` to run the app
4. Once the app has started open the browser using the URL `localhost:3000` to
use the app

**_That's all!_**

### Deploying the App

We have chosen to deploy to [Netlify.com](https://netlify.com). However, you
may prefer another hosting service. When choosing a site to deploy to make sure it supports React and Redux.

### Prerequisites

All dependencies are included in the `package.json` file.

The following environment variables are required to run the app. These should
be added to a `.env.development` file in your local repo for testing and to
the hosting service for your Production deployment.

| Variable Name       | Description |
|---------------------|-------------|
| SPACE_ID             | Space ID for the [contentful](https://www.contentful.com/) |
| CONTENT_DELIVERY_API | Contennt Delivery API key for the  [contentful](https://www.contentful.com/) |

## Authors

* **[Yuriko Darragh](https://github.com/yuriko-pixel)**
* **[Yusuke Yoshino](https://github.com/yusukeyoshino)**

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)