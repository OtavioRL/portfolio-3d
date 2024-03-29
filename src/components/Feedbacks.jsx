import { useContext } from "react";
import Context from "../context/context";
import PropTypes from "prop-types"
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({ index, testimonial, name, image, linkedIn}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">&quot;</p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[14px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <a target="_blank" href={linkedIn} className="text-white font-medium text-[16px]" rel="noreferrer">
            <span className="blue-text-gradient">@</span> {name}
          </a>
        </div>
        <img 
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
    
  </motion.div>
);

FeedbackCard.propTypes = {
  image: PropTypes.string,
  index: PropTypes.number,
  linkedIn: PropTypes.string,
  name: PropTypes.string,
  testimonial: PropTypes.string
}

const Feedbacks = () => {
  const { constants, language } = useContext(Context);
  const { testimonials } = constants;

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl min-h-[300px] ${styles.padding}`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{language === 'pt-br' ? "O que os outros dizem": "What others say"}</p>
          <h2 className={styles.sectionHeadText}>Feedback.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials !== undefined ? testimonials.map((testimonial, index) => (
          <FeedbackCard 
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        )): <p>loading</p>}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '');