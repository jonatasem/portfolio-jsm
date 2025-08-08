//imagens dos projetos
import imgGraphic from "/images/projects/web-graphic.jpg";
import imgRestaurant from "/images/projects/web-ecommerce.png";
import imgAutomec from "/images/projects/web-dashboard.png";
import imgMovies from "/images/projects/web-movies.png";
import imgHeadset from "/images/projects/web-headset.png";

//imagens das skills
import imgReact from '/images/api/react.svg'

//api skills
export const skillsData = [
    {
        title: "Frontend",
        info: [
            "User research",
            "Wireframing",
            "Prototyping",
            "Interaction Design"
        ],
        skills: [
            {
                name: "React.js",
                image: imgReact
            }
        ]
    },
    {
        title: "Backend",
        info: [
            "User research",
            "Wireframing",
            "Prototyping",
            "Interaction Design"
        ],
        skills: [
            {
                name: "React.js",
                image: imgReact
            }
        ]
    },
    {
        title: "DevOps",
        info: [
            "User research",
            "Wireframing",
            "Prototyping",
            "Interaction Design"
        ],
        skills: [
            {
                name: "React.js",
                image: imgReact
            }
        ]
    }
];

//api projects
export const projectsData = [
    {
        title: "Dashboard",
        subTitle: "Data Visualization Platform",
        details: [
            "Interactive charts and graphs for data analysis.",
            "Real-time updates and customizable widgets."
        ],
        image: imgAutomec
    },
    {
        title: "Headset",
        subTitle: "E-commerce Product Page",
        details: [
            "Detailed product specifications and images.",
            "User reviews and rating system."
        ],
        image: imgHeadset
    },
    {
        title: "Filmes",
        subTitle: "Movie Recommendation App",
        details: [
            "Search and filter movies by genre and year.",
            "User-specific recommendations based on viewing history."
        ],
        image: imgMovies
    },
    {
        title: "Restaurante",
        subTitle: "Restaurant Landing Page",
        details: [
            "Online menu with high-quality images.",
            "Reservation system and contact information."
        ],
        image: imgRestaurant
    },
    {
        title: "Grafico de Avaliações",
        subTitle: "Review Analytics Chart",
        details: [
            "Visual representation of user feedback.",
            "Filter reviews by date and star rating."
        ],
        image: imgGraphic
    }
];