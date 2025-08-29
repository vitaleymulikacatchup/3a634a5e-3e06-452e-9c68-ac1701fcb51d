"use client";
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';
import ButtonHoverBubble from '@/components/buttons/ButtonHoverBubble';

export default function Home() {
  return (
    <>
      <NavbarLayoutSplitBottom
        logoSrc="/images/logo.svg"
        logoWidth={60}
        logoHeight={60}
        buttonText="Join Now"
      />

      <BillboardHero
        title="MemeMint — The Fun Memecoin That Spreads Smiles"
        subtitle="A lighthearted crypto experiment with a growing community. No gates, just good vibes."
      />

      <SplitAbout
        description="MemeMint is a community-driven cryptocurrency focused on spreading positivity. We prioritize transparency and risk awareness, ensuring a safer experience for all."
      />

      <HowToBuy3D
        title="How to Buy MemeMint"
        steps={[
          { title: "Step 1", description: "Create or connect a cryptocurrency wallet with a light, beginner-friendly setup", image: "/images/placeholder1.avif", position: "left", isCenter: false },
          { title: "Step 2", description: "Obtain MemeMint tokens from a supported exchange or swap", image: "/images/placeholder2.avif", position: "center", isCenter: true },
          { title: "Step 3", description: "Add MemeMint to your wallet and join the community", image: "/images/placeholder3.avif", position: "right", isCenter: false },
        ]}
      />

      <ExpandingGridTokenomics
        title="MemeMint Tokenomics"
        description="MemeMint is designed for community participation and transparency with a focus on fair distribution."
        cardItems={[
          { id: 1, title: "Total Supply", description: "1,000,000,000 XMNT" },
          { id: 2, title: "Circulating Supply", description: "700,000,000 XMNT" },
          { id: 3, title: "Community Treasury", description: "100,000,000 XMNT" },
          { id: 4, title: "Allocation/Distribution", description: "200,000,000 XMNT" },
        ]}
      />

      <FooterLogoEmphasisBackgroundGradient
        logoSrc="/images/logo.svg"
        logoAlt="MemeMint Logo"
        logoText="MemeMint"
        items={[
          { label: "About MemeMint", onClick: () => {} },
          { label: "Tokenomics", onClick: () => {} },
          { label: "How to Buy", onClick: () => {} },
          { label: "Privacy Policy", onClick: () => {} },
          { label: "Terms of Use", onClick: () => {} }
        ]}
      />
    </>
  );
}