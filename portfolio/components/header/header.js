document.addEventListener('DOMContentLoaded', function() {
    const pageTitle = '[title]'
    //Pages
    const homePage = 'Ty Nova: Portfolio - Home';
    const contactPage = 'Ty Nova: Portfolio - Contact Me';
    const projectsPage = 'Ty Nova: Portfolio - Projects';
    //Get page title
    let urlPath = toString(window.location.pathname);
    if (urlPath.includes('contact')) {
        pageTitle = contactPage;
    } else if (urlPath.includes('projects')) {
        pageTitle = projectsPage;
    } else {pageTitle = homePage;}
});