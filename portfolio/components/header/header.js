import catImage from '/portfolio/assets/cat.png';

const LABEL_HOME = 'Ty Nova: Portfolio - Home';
const LABEL_ABOUT = 'Ty Nova: Portfolio - About Me'
const LABEL_CONTACT = 'Ty Nova: Portfolio - Contact Me';
const LABEL_PROJECTS = 'Ty Nova: Portfolio - Projects';

class header {
    constructor() {
        let pageTitle = this.getPageTitle();
    }
    getPageTitle() {
        let pageUrl = window.location.href;
        if (pageUrl.includes("about")) {
            this.pageTitle = LABEL_ABOUT;
        } else if (pageUrl.includes("contact")) {
            this.pageTitle = LABEL_CONTACT;
        } else if (pageUrl.includes("projects")) {
            this.pageTitle = LABEL_PROJECTS;
        } else { this.pageTitle = LABEL_HOME;}
    }
    getLogo() {
        return catImage;
    }
}