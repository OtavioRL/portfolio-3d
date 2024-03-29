import { useContext } from "react";
import Context from "../context/context";
import PropTypes from "prop-types"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff'}}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img 
            src={experience.icon} 
            alt={experience.company_name}
            className="w-[90%] h-[90%] rounded-full object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        { experience.points.map((point, index) =>(
          <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    company_name: PropTypes.string,
    date: PropTypes.string,
    icon: PropTypes.any,
    iconBg: PropTypes.any,
    points: PropTypes.shape({
      map: PropTypes.func
    }),
    title: PropTypes.any
  })
}

const Experience = () => {
  const { constants, language } = useContext(Context);
  const { experiences } = constants;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{language === 'pt-br' ? "O que eu fiz até agora": "What i have done so far"}</p>
        <h2 className={styles.sectionHeadText}>{language === 'pt-br' ? "Experiência.": "Experience."}</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences !== undefined ? experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          )): <p>loading</p>}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work"); 