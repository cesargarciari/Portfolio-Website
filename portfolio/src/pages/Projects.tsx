import Card from "@/components/Card"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"

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
        <div className="flex flex-row justify-between">
        <p className="text-gray-400 text-sm sm:text-base font-light">
        Python (Modules: Pandas, Scikit-Learn)  
        </p>
        <p className=" text-gray-400 text-sm sm:text-base font-light mr-15">March-April 2025</p>
        </div>
        </div>}     
    description= {
    <>
    <p className="text-white mr-10">
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
        <Button variant="secondary" className="home-button"><FaGithub color="#000000" /></Button>
        </a>
    </div>

                </>}>
    </Card> 
    
    <Card 
    title={  
    
        <div> 
        <h2> Movie Theatre Reservation Application: </h2>
        <div className="flex flex-row justify-between">
        <p className="text-gray-400 text-sm sm:text-base font-light">
        Java (Libraries: mysql-connector) | MySQL
        </p>
        <p className=" text-gray-400 text-sm sm:text-base font-light mr-15">October-Novemer 2024</p>
        </div>
        </div>}     
    description= {
    <>
    <p className="text-white mr-10">
    A Java-based desktop application with a graphical user interface for managing a personal movie database. 
    Designed to reinforce Object-Oriented Programming (OOP) principles.
    <br></br>
    <br></br>
    <span className="font-bold">Features</span>
    <br></br>
    • GUI developed in Java 
    <br></br>
    • Add, update, search, and delete reservations
    <br></br>
    • Follows OOP principles: encapsulation, inheritance, polymorphism
    <br></br>
    • Connects to a SQL database for persistent storage
    </p>
    <div className="mt-4">
    <a href="https://github.com/cesargarciari/Movie-Management-System" target="_blank" rel="noopener noreferrer">
        <Button variant="secondary" className="home-button"><FaGithub color="#000000" /></Button>
        </a>
    </div>

                </>}>
    </Card> 

    <Card 
    title={  
    
        <div> 
        <h2> Website </h2>
        <div className="flex flex-row justify-between">
        <p className="text-gray-400 text-sm sm:text-base font-light">
        Vite | React | Tailwind CSS | TypeScript
        </p>
        <p  className="text-gray-400 text-sm sm:text-base font-light mr-15">
            April-May 2025
        </p>
        </div>
        </div>}     
    description= {
    <>
    <p className="text-white mr-10">
    A responsive, minimalistic web portfolio designed to showcase my software development projects, 
    skills, and experience. The site focuses on performance, accessibility, and clean design. It includes 
    minimalist animations, organized project cards, and a dynamic layout optimized for all devices.
    <br></br>
    <br></br>
    <span className="font-bold">Features</span>
    <br></br>
    • Developed from scratch using modern frontend tools
    <br></br>
    • Fully responsive and optimized for performance
    <br></br>
    • Built with reusable, scalable components in TypeScript
    <br></br>
    • Emphasizes clean UI/UX and minimalistic design principles

    </p>
    <div className="mt-4">
    <a href="https://github.com/cesargarciari/PortfolioWebsite" target="_blank" rel="noopener noreferrer">
        <Button variant="secondary" className="home-button"><FaGithub color="#000000" /></Button>
        </a>
    </div>

                </>}>
    </Card> 
    </div>
    </div>
  )
}

export default Projects