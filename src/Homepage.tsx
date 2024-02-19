import { Helmet } from "react-helmet-async"
import { Route, Routes } from "react-router-dom"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import RainbowProvider from "@/contexts/RainbowProvider"
import SkellyContextProvider from "@/contexts/SkellyContextProvider"
import ScrollToTop from "@/hooks/useScrollToTop"
import NotFound from "@/pages/404"
import { isSepolia, requireEnv } from "@/utils"

import useMatchedRoute from "./hooks/useMatchedRoute"
import routes from "./routes"

interface RouteItem {
  name: string
  path: string
  fullPath?: string
  element: JSX.Element
  description?: string
  isHiddenFooter?: boolean
}

const baseUrl = requireEnv("REACT_APP_API_BASE_URI")
function Homepage() {
  const route = useMatchedRoute() as RouteItem
  const getUrl = () => {
    return window.location.href
  }

  const getImageUrl = (type = "") => {
    if (window.location.pathname.startsWith("/developer-nft")) {
      return window.location.origin + `/${type || "og"}_scroll_origins_nft.png`
    } else if (window.location.pathname.startsWith("/brand-kit")) {
      return window.location.origin + `/og_scroll_brand.png`
    }
    return window.location.origin + "/og_scroll.png"
  }

  return (
    <div className="App min-h-[100vh] bg-[#FFF8F3]">
      <Helmet>
        <title>Scroll{route ? " – " + route.name : null}</title>
        <meta name="description" content={route.description || "Native zkEVM Layer 2 for Ethereum"} />
        <meta property="og:url" content={getUrl()} />
        <meta property="og:title" content={`Scroll ${route?.name ? "- " + route.name : ""}`} />
        <meta property="og:description" content={route.description || "Native zkEVM Layer 2 for Ethereum"} />
        <meta property="og:image" content={getImageUrl()} />
        <link rel="preconnect" href={baseUrl} crossOrigin="anonymous" />
        <link rel="dns-prefetch" href={baseUrl} crossOrigin="anonymous" />
        <meta name="twitter:title" content={`Scroll ${route?.name ? "- " + route.name : ""}`} />
        <meta name="twitter:description" content={route.description || "Native zkEVM Layer 2 for Ethereum"} />
        <meta name="twitter:image" content={getImageUrl("twitter")} />
      </Helmet>
      <RainbowProvider>
        <SkellyContextProvider>
          <ScrollToTop>
            <Header />
            <Routes>
              {routes.map((route, key) => (
                <Route key={key} path={route.path} element={route.element} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
            {isSepolia || route.isHiddenFooter ? null : <Footer />}
          </ScrollToTop>
        </SkellyContextProvider>
      </RainbowProvider>
    </div>
  )
}

export default Homepage
