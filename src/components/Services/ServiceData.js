import PlanningIcon from '../../assets/services/planning-icon.svg';
import DesignIcon from '../../assets/services/design-icon.svg';
import DevelopingIcon from '../../assets/services/developing-icon.svg';
import ConsultingIcon from '../../assets/services/consulting-icon.svg';

export const ServiceData = {
  Planning: {
    img: "planning-image.png",
    icon:PlanningIcon,
    title:"Planning",
    subtitle:"Strategic Blueprints for Digital Success",
    description:"Craft visionary roadmaps aligning business goals with innovative web strategies. Our planning ensures a robust foundation for your online presence.",
    direction: false,
    separation: false
  },

  Design: {
    img: "design-image.png",
    icon:DesignIcon,
    title:"Design",
    subtitle:"Elevate Your Brand through Stunning Design",
    description:"We weave aesthetics with functionality, creating captivating user experiences. Our designs reflect your brand identity, fostering lasting connections with your audience.",
    direction: true,
    separation: true
  },

  Developing: {
    img: "developing-image.png",
    icon:DevelopingIcon,
    title:"Developing",
    subtitle:"Code Craftsmanship for Seamless Functionality",
    description:"Transforming ideas into powerful digital solutions. Our expert developers bring concepts to life, delivering scalable, secure, and user-centric websites that exceed expectations.",
    direction: false,
    separation: false
  },

  Consulting: {
    img:"consulting-images.png",
    icon:ConsultingIcon,
    title:"Consulting",
    subtitle:"Strategic Guidance for Digital Excellence",
    description:"Navigate the complexities of the digital landscape with our tailored consulting services. From optimization to innovation, we empower your business to thrive in the online realm.",
    direction: true,
    separation: true
  }
};
