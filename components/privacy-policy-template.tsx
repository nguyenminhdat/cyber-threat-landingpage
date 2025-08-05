import type { Dictionary } from "@/lib/i18n"

interface PrivacyPolicyTemplateProps {
  companyName: string
  websiteUrl: string
  contactEmail: string
  contactAddress: string
  lastUpdated: string
  includeGDPR?: boolean
  includeCCPA?: boolean
  includeCookies?: boolean
  includeAnalytics?: boolean
  includeThirdPartyServices?: string[]
  dictionary: Dictionary["privacyPolicy"] // Add dictionary prop
}

export default function PrivacyPolicyTemplate({
  companyName,
  websiteUrl,
  contactEmail,
  contactAddress,
  lastUpdated,
  includeGDPR = true,
  includeCCPA = true,
  includeCookies = true,
  includeAnalytics = true,
  includeThirdPartyServices = [],
  dictionary, // Destructure dictionary
}: PrivacyPolicyTemplateProps) {
  return (
    <div className="prose prose-blue max-w-none dark:prose-invert">
      <h1>{dictionary.title}</h1>
      <p>
        {dictionary.lastUpdated}: {lastUpdated}
      </p>

      <p>
        At {companyName}, we take your privacy seriously. {dictionary.description} Please read this privacy policy
        carefully. If you do not agree with the terms of this privacy policy, please do not access our website or use
        our services.
      </p>

      <h2>{dictionary.infoCollection}</h2>
      <p>{dictionary.collectionExplanation}</p>
      <ul>
        <li>{dictionary.personalIdentifiers}</li>
        <li>{dictionary.accountCredentials}</li>
        <li>{dictionary.billingInformation}</li>
        <li>{dictionary.companyInformation}</li>
        <li>{dictionary.userGeneratedContent}</li>
        <li>{dictionary.usageData}</li>
      </ul>

      <h2>{dictionary.infoUsage}</h2>
      <p>{dictionary.usageExplanation}</p>
      <ul>
        <li>{dictionary.provideServices}</li>
        <li>{dictionary.processTransactions}</li>
        <li>{dictionary.sendMessages}</li>
        <li>{dictionary.respondToRequests}</li>
        <li>{dictionary.personalizeExperience}</li>
        <li>{dictionary.monitorTrends}</li>
        <li>{dictionary.detectFraud}</li>
        <li>{dictionary.complyWithLaw}</li>
      </ul>

      <h2>{dictionary.dataStorage}</h2>
      <p>{dictionary.storageExplanation}</p>
      <p>{dictionary.storageDetails}</p>

      <h2>{dictionary.dataRetention}</h2>
      <p>{dictionary.retentionExplanation}</p>

      <h2>{dictionary.infoSharing}</h2>
      <p>{dictionary.sharingExplanation}</p>
      <ul>
        <li>
          <strong>{dictionary.serviceProviders}</strong>: {dictionary.shareWithProviders}
        </li>
        <li>
          <strong>{dictionary.businessTransfers}</strong>: {dictionary.shareInTransfers}
        </li>
        <li>
          <strong>{dictionary.yourConsent}</strong>: {dictionary.shareWithConsent}
        </li>
        <li>
          <strong>{dictionary.legalRequirements}</strong>: {dictionary.shareForLegal}
        </li>
      </ul>

      {includeThirdPartyServices.length > 0 && (
        <>
          <h2>{dictionary.thirdPartyServices}</h2>
          <p>{dictionary.useThirdPartyServices}</p>
          <ul>
            {includeThirdPartyServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </>
      )}

      {includeCookies && (
        <>
          <h2>{dictionary.cookies}</h2>
          <p>{dictionary.cookiesExplanation}</p>
          <p>{dictionary.cookiesUsage}</p>
          <ul>
            <li>{dictionary.maintainSession}</li>
            <li>{dictionary.understandUsage}</li>
            <li>{dictionary.enhanceSecurity}</li>
            <li>{dictionary.personalizeExperience}</li>
            <li>{dictionary.analyzeMarketing}</li>
          </ul>
          <p>{dictionary.cookieInstructions}</p>
        </>
      )}

      {includeAnalytics && (
        <>
          <h2>{dictionary.analytics}</h2>
          <p>{dictionary.analyticsExplanation}</p>
        </>
      )}

      <h2>{dictionary.privacyRights}</h2>
      <p>{dictionary.rightsExplanation}</p>
      <ul>
        <li>{dictionary.rightToAccess}</li>
        <li>{dictionary.rightToCorrect}</li>
        <li>{dictionary.rightToDelete}</li>
        <li>{dictionary.rightToObject}</li>
        <li>{dictionary.rightToPortability}</li>
        <li>{dictionary.rightToWithdraw}</li>
      </ul>

      {includeGDPR && (
        <>
          <h3>{dictionary.gdprRights}</h3>
          <p>{dictionary.gdprExplanation}</p>
          <p>{dictionary.gdprSpecificRights}</p>
          <ul>
            <li>{dictionary.accessUpdateDelete}</li>
            <li>{dictionary.rightOfRectification}</li>
            <li>{dictionary.rightToObjectProcessing}</li>
            <li>{dictionary.rightOfRestriction}</li>
            <li>{dictionary.rightToDataPortability}</li>
            <li>{dictionary.rightToWithdrawConsent}</li>
          </ul>
          <p>{dictionary.exerciseGdprRights}</p>
        </>
      )}

      {includeCCPA && (
        <>
          <h3>{dictionary.ccpaRights}</h3>
          <p>{dictionary.ccpaExplanation}</p>
          <p>{dictionary.ccpaSpecificRights}</p>
          <ul>
            <li>{dictionary.rightToKnow}</li>
            <li>{dictionary.rightToDelete}</li>
            <li>{dictionary.rightToOptOut}</li>
            <li>{dictionary.rightToNonDiscrimination}</li>
          </ul>
          <p>{dictionary.exerciseCcpaRights}</p>
        </>
      )}

      <h2>{dictionary.childrensPrivacy}</h2>
      <p>{dictionary.childrenExplanation}</p>

      <h2>{dictionary.internationalTransfers}</h2>
      <p>{dictionary.transferExplanation}</p>
      <p>{dictionary.transferToUS}</p>

      <h2>{dictionary.changesToPolicy}</h2>
      <p>{dictionary.updateExplanation}</p>
      <p>{dictionary.reviewAdvice}</p>

      <h2>{dictionary.contactUs}</h2>
      <p>
        {dictionary.contactExplanation} <a href={`mailto:${contactEmail}`}>{contactEmail}</a> {dictionary.orByMail}:
      </p>
      <address>{contactAddress}</address>
    </div>
  )
}
