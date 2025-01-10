import React from "react";
import { motion } from "framer-motion";

const AbstractModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render modal if not open

  // Framer Motion Variants for Animation
  const backdropVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50"
      variants={backdropVariant}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose} 
    >
      <motion.div
        className="relative bg-white rounded-lg shadow-lg p-6 overflow-y-auto"
        style={{
          width: "70%",
          height: "70%",
        }}
        variants={modalVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >
       
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        <h2 className="text-lg  mb-4 text-darkText border-b border-gray-200 pb-2">
          <span className="font-bold">Title: </span> Variation on the soil
          thermal properties of different applications in greenhouse
          solarization
        </h2>
        <p className="text-gray-700 mb-6">
          <span className="font-bold">Abstract: </span> 
          Solarisation technology allows for improving soil quality as well as crop productivity. The efficiency of this technique is closely related with a number of factors such as feature of cover material, soil water and organic matter contents therefore, this paper presents the impacts it has on soil thermal physical properties (conductivity-K, diffusivity-D, soil volumetric heat capacity-Cv, and soil temperature-Ts) when combined with different solarization practices. In efficiency of solarization, soil thermal diffusivity (D) is most important heat transfer parameter expressing the temperature gradient depending on the amount of soil water content that also has an effect on soil temperature regime. D was derived from heat equation, by employing soil temperature at heat-amplitude equation. The effect of new treatments such as dry-ice application (CO2), basaltic tuff (BT), various colored PE (VCPE), organic matter (OM) on thermal diffusivity was investigated, especially. The study was carried out in greenhouses covered by three different plastic types (normal PE – Greenhouse 1; UV+IR stabilized PE – Greenhouse 2; UV stabilized PE – Greenhouse 3) at the experimental area of Çukurova region of Turkey in two years. In the first year, the means of the highest maximum soil temperatures at 5, 20 and 30 cm depths increased to 53.5 °C (OM – Greenhouse 1), 46.2 °C (VCPE – Greenhouse 2) and 43.6 °C (BP – Greenhouse 2), respectively. These values were 54.3 °C (VCPE – Greenhouse 1), 44.3 °C (CO2 – Greenhouse 1) and 41.5 °C (VCPE – Greenhouse 2) in the second year. While D values of each treatment changed according to greenhouse environment, depth and time, the highest average values of D ̅5-30cm was found to be 65 cm2 h-1 with CO2 application, followed by 47 cm2 h-1 with BT, and 39.8 cm2 h-1 under OM+CO2 application duration of solarization period. The D ̅20-30cm was higher than those of the upper layer. Especially, increase of heat emission towards the sub-soil layers under BT and OM application was significant (P ). The results showed that the heat could be managed better with mass flow (water) while OM, VCPE and BT treatments can be used successfully to increase the effectiveness of solarization. According to calculations, Cv values increased in a linear relationship with the increase of soil water content. The K value increased as the soil water content reached the field capacity level and decreased as the saturation level reached. The said approach revealed that the soil water content should not be kept at saturation level in solarization applications.
        </p>
        <div className="flex justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-900"
        >
          Close
        </button>
        </div>
       
      </motion.div>
    </motion.div>
  );
};

export default AbstractModal;
