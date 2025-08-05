import type { Metadata } from "next"
import PrivacyPolicyClient from "./PrivacyPolicyClient"

export const metadata: Metadata = {
  title: "Privacy Policy | Enterprise AI Platform",
  description: "Our commitment to protecting your privacy and securing your data.",
}

export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />
}
