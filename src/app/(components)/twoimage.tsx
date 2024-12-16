import React from "react";
import Image from "next/image";

const TwoImages: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-4 p-8">
      {/* Image 1 */}
      <div className="relative w-1/2 h-auto">
        <Image
          src="/Ads.png" // Path to your image in the public folder
          alt="Car Ad 1"
          layout="responsive" // Makes the image responsive
          width={500} // Base width for aspect ratio
          height={300} // Base height for aspect ratio
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Image 2 */}
      <div className="relative w-1/2 h-auto">
        <Image
          src="/Ads.png" // Path to your image in the public folder
          alt="Car Ad 2"
          layout="responsive" // Makes the image responsive
          width={500} // Base width for aspect ratio
          height={300} // Base height for aspect ratio
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default TwoImages;
