import { motion } from "framer-motion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

// Partner logos - using public folder paths
const partnerLogos = [
  { name: "PDC Prosperity", img: "/logo/PDC_Prosperity.svg", imgClassName: "scale-125" },
  { name: "Henkel", img: "/logo/Henkel-Logo.svg" },
  { name: "3M", img: "/logo/3m-2.svg" },
  // Some SVGs have extra whitespace in their viewBox; apply a small scale bump so they visually match.
  { name: "Walsin", img: "/logo/Walsin.png", imgClassName: "scale-125" },
  { name: "Kamaya", img: "/logo/Kamaya_600x600_1.svg", imgClassName: "h-14 max-w-full scale-[1.9]" },
  { name: "Frontier", img: "/logo/Frontier_communications_logo_2023.svg", imgClassName: "h-14 max-w-full scale-[1.7]" },
  { name: "Nitsuku", img: "/logo/nisstuko1.svg", imgClassName: "scale-150" },
];

const PartnersCarousel = () => {
  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
            Associated with World-Class Manufacturers
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We partner with globally recognized manufacturers to deliver reliable, high-performance material solutions
          </p>
        </motion.div>
      </div>

      {/* Infinite Slider */}
      <InfiniteSlider gap={24} duration={20} durationOnHover={40}>
        {partnerLogos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center h-20 w-40 md:h-24 md:w-48 rounded-lg shadow-sm border border-border px-4 bg-background"
          >
            <img
              src={logo.img}
              alt={logo.name}
              className={`h-12 w-auto max-h-[60%] max-w-[90%] object-contain origin-center ${logo.imgClassName ?? ""}`}
            />
          </div>
        ))}
      </InfiniteSlider>
    </section>
  );
};

export default PartnersCarousel;
