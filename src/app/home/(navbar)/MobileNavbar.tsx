
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import HeroButton from "@/components/global/HeroButton";

interface MobileNavLinkProps {
  title: string;
  link: string;
}

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Investor Psychology", link: "/investor-psychology" },
  { title: "Cognitive Bias", link: "/cognitive-bias" },
  { title: "Emotional Factors", link: "/emotional-factors" },
  { title: "Resources", link: "/resources" },
];
const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <div className="flex justify-between items-center px-[4vw] mx-auto py-4 backdrop-blur-md border-b-2 border-[#F1ECE0] fixed top-0 w-full z-50">
        <Link to="/">
          <img src='/Logo.svg' className='w-6 hover:upper-card-shadow cursor-pointer'/>
        </Link>
        <div
          className="cursor-pointer lg:hidden text-[#1E1B13]"
          onClick={toggleMenu}
        >
          <Menu className="w-6"/>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-[#FBF6EA]/30 backdrop-blur-lg text-[#1E1B13] p-10 z-50 overflow-hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <img src="/Logo.svg" alt="logo" className="w-5 h-5 my-auto" />
                  <h1 className="text-base font-medium text-[#1E1B13] font-dynalight">Investor Psyche Evaluation</h1>
                </div>
                <p
                  className="cursor-pointer text-[#1E1B13] my-auto"
                  onClick={toggleMenu}
                >
                  <X className="w-5"/>
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-5"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div key={index}>
                      <div className="overflow-hidden">
                        <MobileNavLink
                          key={index}
                          title={link.title}
                          link={link.link}
                        />
                      </div>
                      <hr className="rounded-full border-[#1E1B13]/20"/>
                    </div>
                  );
                })}
              </motion.div>
              <div className='flex mx-auto gap-4'>
                <HeroButton />
              </div>
            </div>
          </motion.div>

        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink: React.FC<MobileNavLinkProps> = ({ title, link }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-lg font-satoshi-medium text-black tracking-tight"
    >
      <Link to={link}>{title}</Link>
    </motion.div>
  );
};
