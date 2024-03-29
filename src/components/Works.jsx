import { useContext } from "react"
import Context from "../context/context"
import PropTypes from "prop-types"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants/en"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({ index, name, description, tags, image, source_code_Link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div onClick={() => window.open(source_code_Link, '_blank')} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img 
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  description: PropTypes.string,
  image: PropTypes.any,
  index: PropTypes.number,
  name: PropTypes.string,
  source_code_Link: PropTypes.string,
  tags: PropTypes.shape({
    map: PropTypes.func
  })
}

const Works = () => {
  const { language } = useContext(Context);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{language === 'pt-br' ? "Meu trabalho" : "My work"}</p>
        <h2 className={styles.sectionHeadText}>{language === 'pt-br' ? "Projetos." : "Projects."}</h2>
      </motion.div>

      <div className="w-full flex flex-col">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        > 
          {language === 'pt-br' ? "Meus projetos demonstram minhas habilidades e experiência por meio de exemplos reais do meu trabalho. Cada projeto é brevemente descrito, com links para os repositórios no github e o site funcionando. Isso reflete minha capacidade de resolver problemas complexos e trabalhar com diferentes tecnologias.": "My projects showcase my skills and experience through real examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems and work with different technologies."}
           
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, '') 