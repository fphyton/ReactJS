const Projects = () => {
    const projects = [
      {
        id: 1,
        title: "Application de Gestion de Tâches",
        description: "Une application React avec système d'authentification et base de données Firebase",
        link: "https://github.com/votreprojet1"
      },
      {
        id: 2,
        title: "Site E-commerce",
        description: "Plateforme de vente en ligne avec système de paiement intégré",
        link: "https://github.com/votreprojet2"
      },
      {
        id: 3,
        title: "Portfolio Personnel",
        description: "Ce site portfolio créé avec React et React Router",
        link: "https://github.com/votreprojet3"
      }
    ];
  
    return (
      <section className="projects">
        <h2>Mes Projets</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;