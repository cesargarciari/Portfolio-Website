import Card from "@/components/Card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const Projects = () => {
  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-32 max-w-5xl mx-auto mt-12 sm:mt-16 w-full flex flex-col gap-4">
        <h1>Projects</h1>
        <h4 className="text-slate-400">These are my projects on which I try to work actively.</h4>


    <div className="flex flex-col gap-10 mt-4">
         <Card 
    title={  
    
        <div> 
        <h2> NBA MVP Ranking Model </h2>
        <p className="text-gray-400 text-sm sm:text-base font-light">
        Python (Modules: Pandas, Scikit-Learn)
        </p>
        </div>}     
    description= {
    <>
    <p className="text-white">
    This project is a machine learning-based predictor that determines the Most Valuable Player (MVP) for the NBA based on historical player statistics and performance metrics.
    
    <br></br>
    <br></br>
    <span className="font-bold">Features</span>
    <br></br>
    • Predicts MVP candidates using various machine learning models (Regression and Random Forest currently)
    <br></br>
    • Supports classification and ranking of players
    <br></br>
    • Includes data preprocessing, feature engineering, and model evaluation
    </p>
    <div className="mt-4">

    <a href="https://github.com/cesargarciari/NBA-MVP-Predictor" target="_blank" rel="noopener noreferrer">
        <Button variant="secondary" className="home-button"><Github color="#000000" /></Button>
        </a>
    </div>

                </>}>
    </Card> 
    
    <Card 
    title={  
    
        <div> 
        <h2> Movie Theatre Reservation Application: </h2>
        <p className="text-gray-400 text-sm sm:text-base font-light">
        Java (Libraries: mysql-connector) | MySQL
        </p>
        </div>}     
    description= {
    <>
    <p className="text-white">
        Description
    </p>
    <div className="mt-4">
    <a href="https://github.com/cesargarciari/Movie-Management-System" target="_blank" rel="noopener noreferrer">
        <Button variant="secondary" className="home-button"><Github color="#000000" /></Button>
        </a>
    </div>

                </>}>
    </Card> 

    <Card 
    title={  
    
        <div> 
        <h2> Website </h2>
        <p className="text-gray-400 text-sm sm:text-base font-light">
        Vite | React | Tailwind CSS | TypeScript
        </p>
        </div>}     
    description= {
    <>
    <p className="text-white">
        Description
    </p>
    <div className="mt-4">
    <a href="https://github.com/cesargarciari/PortfolioWebsite" target="_blank" rel="noopener noreferrer">
        <Button variant="secondary" className="home-button"><Github color="#000000" /></Button>
        </a>
    </div>

                </>}>
    </Card> 
    </div>
    </div>
  )
}

export default Projects