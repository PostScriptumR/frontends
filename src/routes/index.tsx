import ArchiveTerms from "@/pages/archive/20230308/terms"
import Blog from "@/pages/blog"
import BlogDetail from "@/pages/blog/detail"
import BrandKit from "@/pages/brand-kit"
import Bridge from "@/pages/bridge"
import BridgeFAQ from "@/pages/bridge/FAQ"
import Career from "@/pages/career"
// import ComingSoon from "@/pages/developer-nft/coming-soon"
import DeveloperNFT from "@/pages/developer-nft/index"
import MintNFT from "@/pages/developer-nft/mint"
import Ecosystem from "@/pages/ecosystem"
import Home from "@/pages/landingpage"
import OurStory from "@/pages/ourStory"
import Portal from "@/pages/portal"
import PrivacyPolicy from "@/pages/privacyPolicy"
import RollupScanBatch from "@/pages/rollup/batch"
import RollupScanBlock from "@/pages/rollup/block"
import RollupScanChunk from "@/pages/rollup/chunk"
import RollupScanChunkDetail from "@/pages/rollup/chunk/detail"
import RollupScan from "@/pages/rollup/index"
import ScrollSkelly from "@/pages/skelly"
import SkellyBadge from "@/pages/skelly/badge"
import SkellyDashboard from "@/pages/skelly/dashboard"
import MintProfile from "@/pages/skelly/mint"
import Terms from "@/pages/terms"
import { isSepolia } from "@/utils"

const sepoliaRoutes = [
  {
    name: "Native zkEVM Layer 2 for Ethereum",
    path: "/",
    element: <Portal />,
  },
  {
    name: "Terms and Conditions[Archive]",
    path: "/archive/20230308/terms-and-conditions",
    element: <ArchiveTerms />,
  },
  {
    name: "Terms of Service",
    path: "/terms-of-service",
    element: <Terms />,
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    name: "Resources",
    path: "portal",
    fullPath: "/portal",
    element: <Portal />,
  },
  {
    name: "Bridge",
    path: "/bridge",
    fullPath: "/bridge",
    element: <Bridge />,
  },
  {
    name: "Bridge FAQ",
    path: "/bridge/faq",
    fullPath: "/bridge/faq",
    element: <BridgeFAQ />,
  },
  {
    name: "Join Us",
    path: "/join-us",
    element: <Career />,
  },
  {
    name: "Rollup Explorer",
    path: "/rollupscan",
    fullPath: "/rollupscan",
    element: <RollupScan />,
  },
  {
    name: "Rollup Explorer: Batch Details",
    path: "/rollupscan/batch/:batchIndex",
    fullPath: "/rollupscan/batch/:batchIndex",
    element: <RollupScanBatch />,
  },
  {
    name: "Rollup Explorer: Chunk List",
    path: "/rollupscan/batch/:batchIndex/chunks",
    fullPath: "/rollupscan/batch/:batchIndex/chunks",
    element: <RollupScanChunk />,
  },
  {
    name: "Rollup Explorer: Chunk Details",
    path: "/rollupscan/batch/:batchIndex/chunk/:chunkIndex",
    fullPath: "/rollupscan/batch/:batchIndex/chunk/:chunkIndex",
    element: <RollupScanChunkDetail />,
  },
  {
    name: "Rollup Explorer: Block Details",
    path: "/rollupscan/batch/:batchIndex/blocks",
    fullPath: "/rollupscan/batch/:batchIndex/blocks",
    element: <RollupScanBlock />,
  },
  {
    name: "Rollup Explorer: Block Details",
    path: "/rollupscan/batch/:batchIndex/chunk/:chunkIndex/blocks",
    fullPath: "/rollupscan/batch/:batchIndex/chunk/:chunkIndex/blocks",
    element: <RollupScanBlock />,
  },
]

const mainnetRoutes = [
  {
    name: "Native zkEVM Layer 2 for Ethereum",
    path: "/",
    element: <Home />,
  },
  {
    name: "Our Story",
    path: "/story",
    element: <OurStory />,
  },
  { name: "Blog", path: "/blog", element: <Blog /> },
  {
    name: "Join Us",
    path: "/join-us",
    element: <Career />,
  },
  {
    name: "Brand Kit",
    path: "/brand-kit",
    element: <BrandKit />,
    description: "Explore and download Scroll brand assets and media kit, including logos, banners, and brand guidelines.",
  },
  {
    name: "Blog Detail",
    path: "/blog/:blogId",
    element: <BlogDetail />,
  },
  // Avoid references from other places and retain temporarily.
  {
    name: "Terms and Conditions",
    path: "/terms-and-conditions",
    element: <ArchiveTerms />,
  },
  {
    name: "Terms and Conditions[Archive]",
    path: "/archive/20230308/terms-and-conditions",
    element: <ArchiveTerms />,
  },
  {
    name: "Terms of Service",
    path: "/terms-of-service",
    element: <Terms />,
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    name: "Resources",
    path: "portal",
    fullPath: "/portal",
    element: <Portal />,
  },
  {
    name: "Bridge",
    path: "/bridge",
    fullPath: "/bridge",
    element: <Bridge />,
  },
  {
    name: "Bridge FAQ",
    path: "/bridge/faq",
    fullPath: "/bridge/faq",
    element: <BridgeFAQ />,
  },
  {
    name: "Ecosystem",
    path: "/ecosystem",
    fullPath: "/ecosystem",
    element: <Ecosystem />,
  },
  {
    name: "Rollup Explorer",
    path: "/rollupscan",
    fullPath: "/rollupscan",
    element: <RollupScan />,
  },
  {
    name: "Rollup Explorer: Batch Details",
    path: "/rollupscan/batch/:batchIndex",
    fullPath: "/rollupscan/batch/:batchIndex",
    element: <RollupScanBatch />,
  },
  {
    name: "Rollup Explorer: Chunk List",
    path: "/rollupscan/batch/:batchIndex/chunks",
    fullPath: "/rollupscan/batch/:batchIndex/chunks",
    element: <RollupScanChunk />,
  },
  {
    name: "Rollup Explorer: Chunk Details",
    path: "/rollupscan/batch/:batchIndex/chunk/:chunkIndex",
    fullPath: "/rollupscan/batch/:batchIndex/chunk/:chunkIndex",
    element: <RollupScanChunkDetail />,
  },
  {
    name: "Rollup Explorer: Block Details",
    path: "/rollupscan/batch/:batchIndex/blocks",
    fullPath: "/rollupscan/batch/:batchIndex/blocks",
    element: <RollupScanBlock />,
  },
  {
    name: "Rollup Explorer: Block Details",
    path: "/rollupscan/batch/:batchIndex/chunk/:chunkIndex/blocks",
    fullPath: "/rollupscan/batch/:batchIndex/chunk/:chunkIndex/blocks",
    element: <RollupScanBlock />,
  },
  {
    name: "Scroll Origins NFT",
    path: "/developer-nft",
    fullPath: "/developer-nft",
    element: <DeveloperNFT />,
  },
  {
    name: "Scroll Origins NFT",
    path: "/developer-nft/mint",
    fullPath: "/developer-nft/mint",
    element: <MintNFT />,
  },
  {
    name: "Scroll Skelly",
    path: "/scroll-skelly",
    element: <ScrollSkelly />,
    isHiddenFooter: true,
  },
  {
    name: "Scroll Skelly",
    path: "/scroll-skelly/mint",
    element: <MintProfile />,
    isHiddenFooter: true,
  },
  {
    name: "Scroll Skelly",
    path: "/scroll-skelly/dashboard",
    element: <SkellyDashboard />,
    isHiddenFooter: true,
  },
  {
    name: "Scroll Skelly",
    path: "/scroll-skelly/badge",
    element: <SkellyBadge />,
    isHiddenFooter: true,
  },
]

const routes = isSepolia ? sepoliaRoutes : mainnetRoutes

export default routes
