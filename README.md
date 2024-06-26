# Chinese Restaurant Web Application

This project is a web application for a Chinese restaurant created using HTML, CSS, JavaScript, Bootstrap, and Vue.js. The goal of this project is to provide a user-friendly interface for the restaurant's customers to view and order food, as well as to manage their orders and profile. The application also includes a dynamic menu and a gallery section to showcase the restaurant's offerings.

## Project Requirements

### General Requirements
- Uniform look and feel across the presentation
- Minimal recommended resolution: 800x600px
- Pages should display correctly on various devices (monitor, tablet, mobile phone) using responsive web design
- Latest versions of HTML and CSS should be used (HTML5, CSS3)

### Navigation
- The navigation menu includes main categories, subcategories, links, and content.
- Clear structure of the presentation, ensuring users know which page they are on.
- Use of breadcrumbs to show the path from the home page to the current page.
- Support for multi-language view (currently Serbian and English).
- Clearly marked active menu items.

### Pages
1. **Home Page**
   - Displays current promotions and events.
   - Shows the top 3 rated dishes dynamically.

2. **Gallery**
   - Displays a video gallery and a photo gallery of the restaurant.

3. **Menu**
   - Divided into categories: Appetizers, Main Courses, and Desserts.
   - Allows sorting and searching by name and price.
   - Shows dish details including name, description, small and large portion prices, and an image.
   - Users can rate dishes and view the average rating.
   - Users can add dishes to their cart by selecting the quantity and portion size.
   - Includes a button to download the entire menu as a PDF.

4. **My Account**
   - Shows the user's cart and order history.
   - Allows users to manipulate the cart (change quantity or remove items).
   - Users can finalize orders, transferring items from the cart to the order history.

5. **About Us**
   - Displays information about the restaurant, including images, text, awards, location map, and contact phone.

### Additional Features
- Support for multi-language using Google Translate widget.
- Responsive design to ensure the website looks good on all devices.
- Banners with links to relevant websites.
- Space for ads and other significant links.

## Project Structure

The project structure includes:

- `public/`: Contains static assets and the `index.html` file.
- `src/`: Contains the source code of the application.
  - `assets/`: Images and other assets used in the project.
  - `components/`: Vue components for different parts of the application.
  - `router/`: Vue Router setup for navigation.
  - `store/`: Vuex store for managing application state.
  - `views/`: Main views for different pages of the application.
  - `App.vue`: Main application component.
  - `main.js`: Entry point of the application.

## Installation and Setup

1. Clone the repository:
     ```
     git clone https://github.com/username/chinese-restaurant.git
    ```
2. Navigate to the project directory:
   ```
   cd chinese-restaurant
   ```
3. Install dependencies:
    ```
      npm install
    ```
4.Start the development server:
```
npm run serve

```
The application will be available at `http://localhost:8080`.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Bootstrap
- Vue.js
- Vue Router
- Vuex

##Contributing

If you wish to contribute to this project, please follow these steps:

1.Fork the repository.
2.Create a new branch (git checkout -b feature-branch).
3.Make your changes and commit them (git commit -m 'Add new feature').
4.Push to the branch (git push origin feature-branch).
5.Open a pull request.



