import { GlassElement } from "../Components/LiquidGlass/GlassElement";

/**
 * /!\ You need a chromium-based browser to see the effect /!\
 */

export default function Test() {
  return (
    <>
      <div className="overlay">
        {/* Glass elements in fixed position + animated translation for better visualization */}
        <GlassElement
          width={500}
          height={500}
          radius={50}
          depth={100}
          blur={10}
          chromaticAberration={30}
          debug={false}
        />
      </div>

      <img src="/CompanyFam/WebDev.webp" alt="" />
      <img src="/CompanyFam/WebDev.webp" alt="" />
      <img src="/CompanyFam/WebDev.webp" alt="" />
      <img src="/CompanyFam/WebDev.webp" alt="" />

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        ullam, saepe eos maiores, et recusandae quis incidunt, corrupti atque
        eum ab fugiat? Recusandae illum iure, voluptate accusamus minus maxime
        rem? Doloremque sint repudiandae unde quos ipsa alias, repellat nulla
        recusandae quisquam commodi aliquid iusto, suscipit quidem et ratione
        deleniti nisi nemo deserunt!
      </p>
    </>
  );
}
