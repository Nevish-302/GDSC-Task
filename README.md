<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">E-commerce Api</h3>

  <p align="center">
    This is an e-commerce api based on the outline provided in gdsc task
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Deployed Backend Server Here »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


This project is an API that is divided into two levels - user and admin. The user level APIs provide authentication, profile viewing and updating, cart and wishlist management, search, and filtering based on price. The admin level APIs provide authentication, creation, update and deletion of products, and user account suspension.
The dbms used here is mongodb via mongoose module.
<p align="right">(<a href="#top">back to top</a>)</p>

## Testing

This project can be tested by using postman

### Built With

* [Node.js](https://nodejs.org/)
 
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your mongodb uri details in `.env`
   ```js
   URI = 'ENTER YOUR URI';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### USER level Api  : 
 1. Authentication
 -  POST signin - ``` /auth/signin ```
 -  POST signup - ``` /auth/signup ```
 2. Profile view
 -  get - ``` user/get ```
 3. Profile update
 -  update - ``` user/update ```
 4. Cart
 - - Note - it may be hard to test this without a reactjs or any other framework frontend as the data to be provided is an object or an array
 -  POST get - ``` /user/cart/get ```
 -  POST add - ``` /user/cart/add ```
 -  POST remove - ``` /user/cart/cancel ```
 5. Wishlist
 - - Note - it may be hard to test this without a reactjs or any other framework frontend as the data to be provided is an object or an array
 -  POST get - ``` /user/wishlist/get ```
 -  POST add - ``` /user/wishlist/add ```
 -  POST remove - ``` /user/wishlist/cancel ```
 6. Orders
 - - Note - it may be hard to test this without a reactjs or any other framework frontend as the data to be provided is an object or an array
 -  POST get - ``` /user/orders/get ```
 -  POST add - ``` /user/orders/add ```
 -  POST remove - ``` /user/orders/cancel ```
 8. Search without filter
 -  GET get - ``` /search/item1 ```
 -  GET get2 - ``` /search/q1/:value ``` 
 9. Filter(By-price) along with other options
 -  GET get - ``` /search/qf ```
  
### ADMIN level Api’s : 
1. Authentication
 -  POST signin - ``` /admin/signin ```
 -  POST signup - ``` /admin/signup ```
2. Create , Update and Delete Product
 - -  Note - it may be hard to test this without a reactjs or any other framework frontend as the details of the product are not fixed or some maybe missing
 -  POST create - ``` /admin/products/create ```
 -  POST update - ``` /admin/products/update ```
 -  POST delete - ``` /admin/products/delete ```
3. User account Suspend
 -  POST suspend ``` /user/admin/suspend ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- Api’s are created in two separate level (a. user side , b. admin side)
1. In USER level Api there is  : 
 - Authentication
 - Profile view
 - Profile update
 - Add to cart
 - Add to wishlist
 - Search
 - Filter(By-price) along with other options

2.   In ADMIN level Api’s : 
- Authentication
- Create , Update and Delete Product
- User account Suspend


See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
