# My Website

This project is a responsive web application built with Next.js and Tailwind CSS. It features a dynamic product filtering system, a responsive navigation menu, lazy loading for performance optimization, SEO enhancements including Open Graph tags, and breadcrumb navigation for improved user experience.

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install Dependencies:**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   Start the Next.js development server:
   ```bash
   npm run dev
   ```

4. **Open the Application:**
   Open your browser and navigate to `http://localhost:3000` to view the application.

## Technical Decisions

- **Next.js**: Chosen for its server-side rendering capabilities, which enhance SEO by pre-rendering pages on the server.
- **Tailwind CSS**: Used for styling due to its utility-first approach, which allows for rapid and responsive design development.
- **React Hooks**: Utilized `useState` and `useEffect` for managing component state and side effects, providing a clean and functional approach to component logic.
- **Lazy Loading**: Implemented for images and components to improve performance by loading content only when it is needed.
- **SEO Optimization**: Utilized Next.js's `Head` component to include meta tags for SEO, such as title, description, and Open Graph tags for better social media integration.
- **Breadcrumb Navigation**: Implemented to enhance user navigation and provide a clear path of the user's location within the site.

## Assumptions Made

- **Product Data**: Assumed to be passed as props to components. The filtering logic assumes products have `title` and `price` properties.
- **Responsive Design**: Assumed that the application should be fully responsive, with a focus on mobile-first design principles.
- **Navigation**: Assumed that the navigation should be simple and intuitive, with a hamburger menu for mobile devices.
- **SEO Tags**: Assumed that basic SEO tags are sufficient for initial setup, with the potential to expand based on specific content needs.
- **Breadcrumbs**: Assumed to be beneficial for both user experience and SEO, providing structured data for search engines.

## SEO and Open Graph Tags

- **Meta Tags**: Included in the `<Head>` component to improve search engine visibility and provide essential information about the page.
- **Open Graph Tags**: Added to enhance link previews on social media platforms, including `og:title`, `og:description`, and `og:image`.
- **Lazy Loading**: Used for images to defer loading until they are in the viewport, improving page load times and user experience.

## Breadcrumb Navigation

- **User Experience**: Breadcrumbs provide users with a clear path of navigation, making it easier to backtrack or understand their current location within the site.
- **SEO Benefits**: Breadcrumbs can enhance SEO by providing structured data that search engines can use to better understand the site's hierarchy and content relationships.

## Docker Setup for macOS
Go to project root directory & run this command to build docker image "docker build . -t image_name". Replace "image_name" according to your preference.
After image is built, run this command to create a container from the previously built image "docker run -d -p 3000:3000 image_name"

## Breadcrumb Navigation

- **Initial Setup and Configuration**: 0.5 hour
- **Implementing Responsive Navigation**: 1 hours
- **Developing Product Filtering Logic**: 1 hours
- **SEO and Lazy Loading Implementation**: 1 hour
- **Breadcrumb Implementation**: 0.5 hours
- **Testing and Debugging**: 0.5 hour
- **Documentation and Cleanup**: 0.2 hours

Total time spent: **4.7 hours**

---

This `README.md` provides a comprehensive overview of the setup process, technical decisions, assumptions, and time spent on the task, with additional details on SEO, performance optimizations, and breadcrumb navigation.