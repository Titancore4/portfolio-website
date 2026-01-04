import "./portfolio.styles.scss"
import Project from "../../components/project/project.component";
import PROJECT_ITEMS from "../../project-items"

const Portfolio = () => {

    return (
        <div className="portfolio-page">

            <h1 className="heading">Welcome To My Portfolio</h1>

            {PROJECT_ITEMS.map(item => (
                <Project key={item.id} data={item} />
            ))}

        </div>
    )
}

export default Portfolio;