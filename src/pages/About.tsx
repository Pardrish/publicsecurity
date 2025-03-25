
import { motion } from "framer-motion";
import { Shield, Users, CheckCircle, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const About = () => {
  const teamMembers = [
    {
      name: "Amrit Auji",
      //role: "Founder & CEO",
      //bio: "Former police officer with 15 years of experience in community safety programs.",
      imageSrc: "/public/images/amrit2.jpeg",
    },
    {
      name: "Mohammad Fazal Attar",
      //role: "Chief Technology Officer",
      //bio: "Tech veteran with a passion for building tools that empower communities.",
      imageSrc: "",
    },
    {
      name: "Wani Tantarpale",
      //role: "Community Outreach Director",
      //bio: "Social worker with expertise in bringing diverse communities together.",
      imageSrc: "",
    },
    {
      name: "Sahil Chauhan",
      //role: "Head of Operations",
      //bio: "Former city planner with a focus on urban safety and infrastructure.",
      imageSrc: "",
    },
    {
      name: "Viresh Kamlapure",
      //role: "Head of Operations",
      //bio: "Former city planner with a focus on urban safety and infrastructure.",
      imageSrc: "",
    },
    {
      name: "Drishti Pardeshi",
      //role: "Head of Operations",
      //bio: "Former city planner with a focus on urban safety and infrastructure.",
      imageSrc: "",
    },
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Safety First",
      description: "We prioritize the safety and well-being of communities in everything we do."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Community-Driven",
      description: "We believe in the power of communities coming together to create positive change."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Transparency",
      description: "We operate with full transparency and accountability to the communities we serve."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description: "We strive for excellence in our platform, service, and community impact."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-blue-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About SafetyNet
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We're on a mission to create safer communities through technology, collaboration, and community engagement.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    SafetyNet was founded in 2025 by the students of MIT-ADT University with a simple but powerful vision: to leverage technology to create safer neighborhoods where everyone feels secure and connected.
                  </p>
                  <p>
                    What began as a small community initiative in one neighborhood has grown into a comprehensive platform serving communities across the country.
                  </p>
                  <p>
                    Our team combines expertise in law enforcement, technology, community organizing, and urban planning to create solutions that address real safety concerns while fostering stronger community bonds.
                  </p>
                  <p>
                    Today, SafetyNet is helping thousands of communities collaborate with local authorities, share important safety information, and take proactive steps toward creating safer environments for all.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide our work and define our approach to community safety.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm"
                  variants={itemVariants}
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-xl text-gray-600">
                Meet the dedicated professionals working to make communities safer.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm"
                  variants={itemVariants}
                >
                  <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                    <img
                      src={member.imageSrc }
                      alt={member.name}
                      className="w-full h-90 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to make your community safer?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of communities that are using SafetyNet to create safer neighborhoods through collaboration and technology.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50"
              asChild
            >
              <a href="/register">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
