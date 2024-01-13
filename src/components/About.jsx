/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types"
import { SectionWrapper } from '../hoc';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from "../constants/en"

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  ); 
};

ServiceCard.propTypes = {
  icon: PropTypes.any,
  index: PropTypes.any,
  title: PropTypes.string
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Hi, my name is Otavio and I'm a Brazilian fullstack web developer. I always loved computers and technology, so I decided to pursue a web developer career and I love what I do. I had the opportunity to study at Trybe where I acquired a solid foundation in various technologies, including React and Node. Over 12 months and approximately 1500 hours of study and practice, I developed a passion for creating efficient and attractive front-end solutions. I'm looking for a job in any English-speaking country.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');