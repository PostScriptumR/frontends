import { Contract, ethers } from "ethers"
import { createContext, useContext, useEffect, useState } from "react"

import ScrollOriginsNFTABI from "@/assets/abis/ScrollOriginsNFT.json"
import ScrollOriginsNFTV2ABI from "@/assets/abis/ScrollOriginsNFTV2.json"
import { BADGES_VISIBLE_TYPE, CHAIN_ID } from "@/constants"
import { useRainbowContext } from "@/contexts/RainbowProvider"
import { requireEnv } from "@/utils"

const SCROLL_ORIGINS_NFT_ADDRESS = requireEnv("REACT_APP_SCROLL_ORIGINS_NFT")
const SCROLL_ORIGINS_NFT_V2_ADDRESS = requireEnv("REACT_APP_SCROLL_ORIGINS_NFT_V2")

type SkellyContextProps = {
  NFTInstance: any
  NFTV2Instance: any
  unsignedNFTInstance: any
  unsignedNFTV2Instance: any
  profileInstance: any
  mintProfileNFT: (name: string, referralCode?: string) => void
  badgesInstance: any
  setBadgesInstance: any
}

const SkellyContext = createContext<SkellyContextProps | null>(null)

const SkellyContextProvider = ({ children }: any) => {
  const { provider, chainId, walletCurrentAddress } = useRainbowContext()

  const [NFTInstance, setNFTInstance] = useState<Contract>()
  const [NFTV2Instance, setNFTV2Instance] = useState<Contract>()
  const [unsignedNFTInstance, setUnsignedNFTInstance] = useState<Contract>()
  const [unsignedNFTV2Instance, setUnsignedNFTV2Instance] = useState<Contract>()
  const [profileInstance, setProfileInstance] = useState<any>()
  const [badgesInstance, setBadgesInstance] = useState<any>()

  useEffect(() => {
    if (provider && chainId === CHAIN_ID.L2) {
      initializeInstance(provider)
    }
  }, [provider, chainId])

  useEffect(() => {
    if (walletCurrentAddress === "0xCa266224613396A0e8D4C2497DBc4F33dD6CDEFf") {
      setProfileInstance({ name: "Vitalik", avatar: "https://avatars.dicebear.com/api/avataaars/1.svg" })
      setBadgesInstance({
        [BADGES_VISIBLE_TYPE.VISIBLE]: [
          "https://avatars.githubusercontent.com/u/1?s=200&v=4",
          "https://avatars.githubusercontent.com/u/2?s=200&v=4",
          "https://avatars.githubusercontent.com/u/3?s=200&v=4",
          "https://avatars.githubusercontent.com/u/4?s=200&v=4",
          "https://avatars.githubusercontent.com/u/5?s=200&v=4",
          "https://avatars.githubusercontent.com/u/6?s=200&v=4",
          "https://avatars.githubusercontent.com/u/7?s=200&v=4",
          "https://avatars.githubusercontent.com/u/8?s=200&v=4",
          "https://avatars.githubusercontent.com/u/9?s=200&v=4",
          "https://avatars.githubusercontent.com/u/10?s=200&v=4",
          "https://avatars.githubusercontent.com/u/11?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/12?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/13?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/14?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/15?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/16?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/17?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/18?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/19?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/20?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/21?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/22?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/23?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/24?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/25?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/26?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/27?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/28?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/29?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/30?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/31?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/32?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/33?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/34?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/35?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/36?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/37?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/38?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/39?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/40?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/41?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/42?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/43?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/44?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/45?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/46?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/47?s=200&v=4",
          // "https://avatars.githubusercontent.com/u/48?s=200&v=4",
        ],
        [BADGES_VISIBLE_TYPE.INVISIBLE]: [
          "https://avatars.githubusercontent.com/u/387782?s=200&v=4",
          "https://avatars.githubusercontent.com/u/387783?s=200&v=4",
          "https://avatars.githubusercontent.com/u/387784?s=200&v=4",
          "https://avatars.githubusercontent.com/u/387785?s=200&v=4",
          "https://avatars.githubusercontent.com/u/387786?s=200&v=4",
          "https://avatars.githubusercontent.com/u/387787?s=200&v=4",
          "https://avatars.githubusercontent.com/u/387788?s=200&v=4",
          "https://avatars.githubusercontent.com/u/387789?s=200&v=4",
          "https://avatars.githubusercontent.com/u/387790?s=200&v=4",
          "https://avatars.githubusercontent.com/u/387791?s=200&v=4",
        ],
      })
    } else {
      setProfileInstance(null)
    }
  }, [walletCurrentAddress])

  const initializeInstance = async provider => {
    const signer = await provider.getSigner(0)
    const instance = new ethers.Contract(SCROLL_ORIGINS_NFT_ADDRESS, ScrollOriginsNFTABI, signer)
    const instanceV2 = new ethers.Contract(SCROLL_ORIGINS_NFT_V2_ADDRESS, ScrollOriginsNFTV2ABI, signer)
    const unsignedInstance = new ethers.Contract(SCROLL_ORIGINS_NFT_ADDRESS, ScrollOriginsNFTABI, provider)
    const unsignedV2Instance = new ethers.Contract(SCROLL_ORIGINS_NFT_V2_ADDRESS, ScrollOriginsNFTV2ABI, provider)
    setNFTInstance(instance)
    setNFTV2Instance(instanceV2)
    setUnsignedNFTInstance(unsignedInstance)
    setUnsignedNFTV2Instance(unsignedV2Instance)
  }

  const mintProfileNFT = async (name: string, referralCode?: string) => {
    // setTimeout(() => {
    if (referralCode) {
      //   const tx = await NFTV2Instance.mintProfileNFT(name, avatar)
      //   await tx.wait()
      setProfileInstance({ name, avatar: "https://avatars.dicebear.com/api/avataaars/1.svg" })
    } else {
      //   const tx = await NFTInstance.mintProfileNFT(name, avatar)
      //   await tx.wait()
      setProfileInstance({ name, avatar: "https://avatars.dicebear.com/api/avataaars/1.svg" })
    }
    setBadgesInstance({
      [BADGES_VISIBLE_TYPE.VISIBLE]: [
        "https://avatars.githubusercontent.com/u/387772?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387773?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387774?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387775?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387776?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387777?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387778?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387779?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387780?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387771?s=200&v=4",
      ],
      [BADGES_VISIBLE_TYPE.INVISIBLE]: [
        "https://avatars.githubusercontent.com/u/387782?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387783?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387784?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387785?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387786?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387787?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387788?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387789?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387790?s=200&v=4",
        "https://avatars.githubusercontent.com/u/387791?s=200&v=4",
      ],
    })
    // }, 3000)
  }

  return (
    <SkellyContext.Provider
      value={{
        NFTInstance,
        NFTV2Instance,
        unsignedNFTInstance,
        unsignedNFTV2Instance,
        profileInstance,
        mintProfileNFT,
        badgesInstance,
        setBadgesInstance,
      }}
    >
      {children}
    </SkellyContext.Provider>
  )
}

export function useSkellyContext() {
  const ctx = useContext(SkellyContext)
  if (!ctx) {
    throw new Error("useSkellyContext must be used within SkellyContextProvider")
  }
  return ctx
}

export default SkellyContextProvider
