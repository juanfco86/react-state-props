
import Author from './Author'



const Article = ({ title, subtitle, paragraph, name, img }) => {
    console.log();
    title = "Me encanta React"
    subtitle = "Me gusta React"
    paragraph = "React me ama"
    name = "Juan Francisco Solano"
    
  return (
    <>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{paragraph}</p>
        <Author name={name} />
    </>
  )
}

export default Article