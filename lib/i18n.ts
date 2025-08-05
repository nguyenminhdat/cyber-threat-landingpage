// lib/i18n.ts
export const translations = {
  en: {
    navbar: {
      features: "Features",
      solution: "Solution", // New translation key
      benefits: "Benefits", // New translation key
      technology: "Technology", // New translation key
      aiArchitecture: "AI Architecture", // New translation key
      useCases: "Use Cases", // New translation key
      dashboard: "Dashboard",
      contact: "Contact",
      language: "Language",
      english: "English",
      vietnamese: "Vietnamese",
    },
    hero: {
      title: "FPT Cyber Threat Intelligence",
      description: ["Protect your business from all cyber threats", "Powered by advanced AI (Artificial Intelligence)"],
      requestDemoButton: "Request a Demo",
      viewDemoButton: "View Product", // New translation key
      watchTrailerButton: "Watch Trailer", // New translation key
    },
    featuresSection: {
      headingTag: "Key Features",
      heading: "Next-Generation Network Security Solutions",
      description: "Specifically designed to protect your organization from increasingly sophisticated cyber threats.",
      advancedThreatAnalysis: {
        title: "Advanced Threat Analysis",
        description: "Utilize AI to detect and predict complex cyber threats before they cause harm.",
      },
      automatedResponse: {
        title: "Automated Response",
        description: "Automate incident response processes, minimizing the time and impact of attacks.",
      },
      comprehensiveDataSecurity: {
        title: "Comprehensive Data Security",
        description: "Ensure the safety of your sensitive data with end-to-end encryption and strict access control.",
      },
    },
    allInOneSolution: {
      headingTag: "All-in-One Solution",
      heading: "Comprehensive Cyber Threat Intelligence",
      description: "Our platform provides a unified approach to cybersecurity, integrating multiple powerful features.",
      oneClickScan: {
        title: "One-Click Configuration Scan",
        description: "Detect security flaws in cloud configuration with a single touch.",
      },
      realtimeThreat: {
        title: "Real-time AI-Driven Threat Monitoring",
        description: "Monitor attacks in real-time with AI-powered insights.",
      },
      aiAdvisor: {
        title: "AI Advisor",
        description: "Get answers and guidance for all security situations.",
      },
      vmPatchPrioritization: {
        title: "VM Patch Prioritization",
        description:
          "Automatically detect unpatched virtual machines and suggest critical patches based on risk level.",
      },
    },
    benefitsSection: {
      headingTag: "Benefits",
      heading: "Tangible Results for Your Business",
      description: "Experience significant improvements in security posture and operational efficiency.",
      monitoring: {
        value: "24/7",
        label: "Monitoring",
      },
      accuracy: {
        value: "99%",
        label: "Accuracy",
      },
      costReduction: {
        value: "60%",
        label: "Operation Cost Reduction",
      },
      timeReduction: {
        value: "70%",
        label: "Troubleshooting Time Reduction",
      },
    },
    technologyStack: {
      headingTag: "Technology",
      heading: "AI-Powered Technology Stack",
      description: "Our robust technology stack leverages cutting-edge AI to deliver superior threat intelligence.",
      mlAnomalyDetection: {
        title: "Machine Learning (ML) & Large Language Models (LLM) for Anomaly Detection",
        description:
          "Advanced ML models identify unusual patterns, while LLMs analyze logs for deeper insights and predictive threat intelligence.",
      },
      nlpConversational: {
        title: "Natural Language Processing (NLP) & Generative AI for Conversational Security",
        description:
          "Leverage state-of-the-art NLP and Generative AI to enable intuitive, human-like interactions for security analysis and response.",
      },
      // Updated A2A Automation to MCP
      mcpCollaboration: {
        title: "MCP - Multi-Agent Collaboration Platform",
        description:
          "A platform where multiple AI agents collaborate, exchange information, and make real-time security decisions without human intervention.",
      },
      aiCodeGeneration: {
        title: "AI-Powered Code Generation & Vulnerability Patching",
        description:
          "Automate the generation of secure code, scripts, and rapid patching of vulnerabilities with advanced AI algorithms.",
      },
    },
    howItWorks: {
      heading: "How It Works",
      description: "Our platform seamlessly integrates with your existing workflows and systems.",
      step1: {
        title: "Connect Your Data",
        description: "Securely connect your organization's knowledge base, documents, and data sources.",
      },
      step2: {
        title: "Configure Your AI",
        description: "Choose LLMs, set up agents, and customize prompt templates to match your needs.",
      },
      step3: {
        title: "Deploy & Scale",
        description: "Roll out to your organization with enterprise-grade security and scale as needed.",
      },
    },
    useCases: {
      headingTag: "Use Cases",
      heading: "Transforming Industries",
      description: "Our AI platform is designed to meet the unique challenges of various sectors.",
      enterpriseKnowledgeManagement: {
        title: "Enterprise Knowledge Management",
        description:
          "Centralize organizational knowledge and enable AI-powered search and retrieval across all your data sources.",
      },
      governmentOperations: {
        title: "Government Operations",
        description:
          "Streamline processes, enhance citizen services, and improve decision-making with secure AI solutions.",
      },
      financialServices: {
        title: "Financial Services",
        description:
          "Enhance compliance, risk assessment, and customer service with AI that respects strict data security requirements.",
      },
      healthcare: {
        title: "Healthcare",
        description:
          "Improve patient care and operational efficiency while maintaining HIPAA compliance and data privacy.",
      },
      legal: {
        title: "Legal",
        description:
          "Accelerate legal research, contract analysis, and case preparation with secure, accurate AI assistance.",
      },
      education: {
        title: "Education",
        description: "Transform learning experiences and administrative processes with customizable AI solutions.",
      },
      configScan: {
        title: "System Configuration Scan for Security Check",
        description:
          "Automatically scan system configurations to identify security vulnerabilities and misconfigurations.",
      },
      logMonitoring: {
        title: "Automated Log Monitoring & Analysis",
        description: "Monitor and analyze logs automatically to provide statistics and real-time security alerts.",
      },
      aiChatbot: {
        title: "Security Knowledge Q&A via AI Chatbot",
        description: "Get instant answers and guidance on security knowledge through an intelligent AI chatbot.",
      },
      attackForecasting: {
        title: "Future Attack Prediction from Past Log Analysis",
        description: "Predict future cyber attacks by analyzing historical log data with advanced AI algorithms.",
      },
      cloudConfigFix: {
        title: "Cloud Misconfiguration Analysis & Auto-Fix",
        description:
          "Analyze cloud configurations for vulnerabilities and automatically apply fixes to enhance security.",
      },
      insiderThreatDetection: {
        title: "Detect DevOps Impersonation via Behavior Analysis",
        description: "Detect insider threats and impersonation attempts by analyzing user behavior patterns with AI.",
      },
      killChainDetection: {
        title: "AI-Powered Kill Chain Attack Detection",
        description: "Identify and track multi-stage cyber attacks using the Kill Chain model powered by AI.",
      },
      vmPatchManagement: {
        title: "Patch Management Suggestion System (for VMs)",
        description: "Detect unpatched virtual machines and suggest appropriate patches to maintain system integrity.",
      },
      toBeDeveloped: "To be developed", // New translation key
    },
    ourPartners: {
      // Renamed from ourCustomers
      headingTag: "Our Partners", // Updated text
      heading: "Trusted by Industry Leaders",
      description: "We are proud to partner with leading organizations to enhance their cybersecurity posture.", // Updated text
      partners: [
        // Renamed from clients
        {
          name: "FPT Shop",
          logo: "/logos/FPT_Shop_logo.png",
          description: "Leading retail chain for technology products in Vietnam.",
          features: ["Real-time Threat Detection", "Automated Vulnerability Management", "AI-Powered Fraud Prevention"],
        },
        {
          name: "Long Châu Pharmacy Chain",
          logo: "/logos/Long_Chau_Pharmacy_logo.png",
          description: "One of Vietnam's largest and fastest-growing pharmacy networks.",
          features: ["Secure Patient Data Management", "Compliance Monitoring", "Supply Chain Security Analytics"],
        },
        {
          name: "Long Châu Vaccination System",
          logo: "/logos/Long_Chau_Vaccination_logo.png",
          description: "Comprehensive vaccination management system.",
          features: [
            "Data Integrity & Privacy",
            "Scalable Security Infrastructure",
            "Threat Intelligence for Healthcare",
          ],
        },
      ],
      ctaHeading: "Ready to Secure Your Enterprise?",
      ctaDescription: "Join our growing list of satisfied partners. Request a personalized demo today.", // Updated text
      ctaButton: "Request a Demo",
    },
    testimonials: {
      headingTag: "Testimonials",
      heading: "Trusted by Leading Organizations",
      description: "See what our enterprise and government clients have to say about our AI platform.",
      quote1:
        "This AI platform has transformed how our organization handles knowledge management and customer support. The security features give us peace of mind when dealing with sensitive data.",
      quote2:
        "The ability to customize agents and integrate with our existing systems has made this platform invaluable for our government operations. The ROI has been substantial.",
      quote3:
        "We've seen a 40% increase in productivity since implementing this solution. The knowledge base integration and custom prompt templates have been game-changers.",
    },
    dashboardSimulation: {
      headingTag: "Dashboard Simulation",
      heading: "Real-time Threat Detection",
      description: "Monitor and respond to cyber threats instantly with an intuitive interface.",
      threatOverview: "Threat Overview",
      criticalThreats: "Critical Threats",
      recentActivities: "Recent Activities",
      ddosDetected: "DDoS attack detected - IP: 192.168.1.1",
      vulnerabilityScan: "Vulnerability scan completed - Server A",
      malwareAlert: "Malware alert - User: John Doe",
      signatureUpdate: "Signature update successful",
      statistics: "Statistics",
      totalThreats: "Total threats: ",
      attacksBlocked: "Attacks blocked: ",
      avgResponseTime: "Average response time: ",
      provider: "Provider",
      fptSmartCloud: "FPT Smart Cloud",
      clearAllFilters: "Clear all filters",
      realtimeThreatDetectionStatus: "Real-time Threat Detection",
      active: "Active",
      lastUpdated: "Last updated:",
      threatsDetected: "threats detected",
      realtimeThreatRadar: "REAL-TIME THREAT RADAR",
      liveThreatDetectionTracking: "Live threat detection & tracking",
      critical: "Critical",
      high: "High",
      medium: "Medium",
      low: "Low",
      latestDetection: "Latest Detection",
      multipleNetworkScansDetected: "Multiple Network Scans Detected",
      multipleFailedLoginAttemptsDetected: "Multiple Failed Login Attempts Detected",
    },
    requestDemoSection: {
      headingTag: "Contact",
      heading: "Request a Demo",
      description: "Contact our expert team to learn how FPT Cyber Threat Intelligence can protect your business.",
      customSolutions: "Custom solutions for businesses of all sizes",
      support: "24/7 Technical Support",
      seamlessIntegration: "Seamless integration with existing systems",
      formTitle: "Fill in your information",
      formDescription: "We will contact you to advise on the most suitable solution.",
      firstName: "First Name",
      lastName: "Last Name",
      workEmail: "Work Email",
      companyName: "Company/Organization Name",
      yourRole: "Your Role",
      rolePlaceholder: "IT Director, Security Manager...",
      organizationSize: "Organization Size",
      selectSize: "Select size",
      employees1_50: "1-50 employees",
      employees51_200: "51-200 employees",
      employees201_500: "201-500 employees",
      employees501_1000: "501-1000 employees",
      employees1001Plus: "1001+ employees",
      governmentAgency: "Government Agency",
      howCanWeHelp: "How can we help?",
      messagePlaceholder: "Describe your specific requirements...",
      submitRequest: "Submit Request",
      submitting: "Submitting...",
      agreement: "By submitting this form, you agree to our privacy policy and terms of service.",
      thankYou: "Thank You!",
      inquiryReceived: "Your request has been sent. Our expert team will contact you shortly.",
      submitAnother: "Submit another request",
      scanQrButton: "Scan QR to open demo site", // New translation key
      scanQrTitle: "Scan QR Code", // New translation key
      scanQrDescription: "Scan this QR code with your mobile device to open the demo site.", // New translation key
    },
    contactPricing: {
      heading: "Custom Enterprise Pricing",
      description:
        "We offer tailored pricing packages for enterprises and government agencies based on your specific needs and scale.",
      unlimitedUsers: "Unlimited users with role-based access control",
      customizableKnowledgeBase: "Customizable knowledge base size",
      accessToLLM: "Access to all LLM models",
      enterpriseSecurity: "Enterprise-grade security and compliance",
      contactForQuote: "Contact us for a personalized quote and to discuss your specific requirements.",
    },
    footer: {
      allRightsReserved: "All rights reserved.",
    },
    privacyPolicy: {
      title: "Privacy Policy",
      description: "Our commitment to protecting your privacy and securing your data.",
      lastUpdated: "Last Updated:",
      infoCollection: "Information We Collect",
      infoUsage: "How We Use Your Information",
      dataStorage: "Data Storage and Security",
      dataRetention: "Data Retention",
      infoSharing: "Sharing Your Information",
      thirdPartyServices: "Third-Party Services",
      cookies: "Cookies and Tracking Technologies",
      analytics: "Analytics",
      privacyRights: "Your Privacy Rights",
      gdprRights: "GDPR Privacy Rights (For European Economic Area Residents)",
      ccpaRights: "CCPA Privacy Rights (For California Residents)",
      childrensPrivacy: "Children's Privacy",
      internationalTransfers: "International Data Transfers",
      changesToPolicy: "Changes to This Privacy Policy",
      contactUs: "Contact Us",
      backToHome: "Back to Home",
      collectionExplanation: "We collect various types of information to provide and improve our services:",
      personalIdentifiers: "Personal Identifiers (e.g., name, email address, phone number)",
      accountCredentials: "Account Credentials (e.g., usernames, passwords)",
      billingInformation: "Billing Information (e.g., payment card details, billing address)",
      companyInformation: "Company Information (e.g., company name, industry, size)",
      userGeneratedContent: "User-Generated Content (e.g., prompts, queries, feedback)",
      usageData: "Usage Data (e.g., IP address, browser type, pages visited, time spent)",
      usageExplanation: "We use the information we collect for various purposes, including:",
      provideServices: "To provide, operate, and maintain our services",
      processTransactions: "To process your transactions and manage your orders",
      sendMessages: "To send you technical notices, updates, security alerts, and support messages",
      respondToRequests: "To respond to your comments, questions, and customer service requests",
      personalizeExperience: "To personalize and improve your experience on our website",
      monitorTrends: "To monitor and analyze trends, usage, and activities in connection with our services",
      detectFraud: "To detect, investigate, and prevent fraudulent transactions and other illegal activities",
      complyWithLaw: "To comply with our legal obligations",
      storageExplanation:
        "We implement a variety of security measures to maintain the safety of your personal information.",
      storageDetails:
        "Your personal data is stored on secure servers and protected by industry-standard encryption technologies.",
      retentionExplanation:
        "We retain personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by law.",
      sharingExplanation: "We may share your information with third parties in the following situations:",
      serviceProviders: "Service Providers",
      shareWithProviders:
        "We may share your information with third-party vendors, consultants, and other service providers who perform services on our behalf.",
      businessTransfers: "Business Transfers",
      shareInTransfers:
        "In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.",
      yourConsent: "With Your Consent",
      shareWithConsent: "We may share your information when you give us explicit consent to do so.",
      legalRequirements: "Legal Requirements",
      shareForLegal:
        "We may disclose your information if required to do so by law or in response to valid requests by public authorities.",
      useThirdPartyServices: "We use the following third-party services that may collect information about you:",
      cookiesExplanation:
        "Cookies are small data files stored on your device that help us improve our services and your experience.",
      cookiesUsage: "We use cookies to:",
      maintainSession: "Maintain your session and preferences",
      understandUsage: "Understand how you use our website",
      enhanceSecurity: "Enhance security",
      analyzeMarketing: "Analyze marketing campaign performance",
      cookieInstructions:
        "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.",
      analyticsExplanation:
        "We use analytics services to collect information about your use of our website and services. This helps us understand how users interact with our platform and improve our offerings.",
      rightsExplanation: "You have certain rights regarding your personal data:",
      rightToAccess: "Right to Access: You have the right to request copies of your personal data.",
      rightToCorrect:
        "Right to Rectification: You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.",
      rightToDelete:
        "Right to Erasure: You have the right to request that we erase your personal data, under certain conditions.",
      rightToObject:
        "Right to Object to Processing: You have the right to object to our processing of your personal data, under certain conditions.",
      rightToPortability:
        "Right to Data Portability: You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
      rightToWithdraw:
        "Right to Withdraw Consent: You have the right to withdraw your consent at any time where we rely on consent to process your personal information.",
      gdprExplanation:
        "If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR).",
      gdprSpecificRights: "These rights include:",
      accessUpdateDelete: "The right to access, update or to delete the information we have on you.",
      rightOfRectification:
        "The right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete.",
      rightToObjectProcessing:
        "The right to object. You have the right to object to our processing of your Personal Data.",
      rightOfRestriction:
        "The right to restriction. You have the right to request that we restrict the processing of your personal information.",
      rightToDataPortability:
        "The right to data portability. You have the right to be provided with a copy of the Personal Data in a structured, machine-readable and commonly used format.",
      rightToWithdrawConsent:
        "The right to withdraw consent. You also have the right to withdraw your consent at any time where we relied on your consent to process your personal information.",
      exerciseGdprRights:
        "Please note that we may ask you to verify your identity before responding to such requests. You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data.",
      ccpaExplanation:
        "If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with specific rights regarding your personal information.",
      ccpaSpecificRights: "These rights include:",
      rightToKnow: "The right to know what personal information is being collected about them.",
      rightToDelete: "The right to delete their personal information.",
      rightToOptOut: "The right to opt-out of the sale of their personal information.",
      rightToNonDiscrimination: "The right to non-discrimination for exercising their CCPA rights.",
      exerciseCcpaRights: "To exercise any of these rights, please contact us using the details below.",
      childrenExplanation:
        "Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.",
      transferExplanation:
        "Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.",
      transferToUS:
        "If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.",
      updateExplanation:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
      reviewAdvice:
        "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
      contactExplanation: "If you have any questions about this Privacy Policy, please contact us by email at",
      orByMail: "or by mail at",
    },
    aiArchitecture: {
      headingTag: "AI Architecture",
      heading: "AI-Powered Threat Intelligence Flow",
      description:
        "Understand how our platform processes data in a continuous loop to deliver real-time insights and alerts.", // Updated description
      logIngestion: "Log Ingestion", // New key
      aiMlAnalysis: "AI/ML Analysis", // New key
      realtimeAlerting: "Real-time Alerting", // New key
      feedbackLoop: "Feedback Loop to Improve Model", // New key
    },
    threatLandscapeSection: {
      heading: "Escalating Threat Landscape",
      description:
        "In the past decade, cyberattacks have evolved from isolated incidents to sophisticated campaigns, causing billions in damages. Many major enterprise collapses were not due to zero-day exploits, but rather overlooked basic security vulnerabilities.",
      cloudMisconfig: {
        title: "Vulnerabilities from Cloud Misconfiguration",
        label1: "Misconfiguration",
        label2: "Other causes",
        description:
          "Nearly 70% of cloud-based security incidents stem from simple misconfigurations. This is an open door for attackers to infiltrate your systems.",
      },
      unpatchedSystems: {
        title: "Risk from Unpatched Systems",
        label1: "Unpatched vulnerability",
        label2: "Other causes",
        description:
          "60% of enterprises admit the root cause of attacks came from a known vulnerability that was not patched in time, a typical case being the Equifax breach.",
      },
    },
    costOfInactionSection: {
      heading: "The Cost of Indifference",
      description:
        "Inaction is not an option. The figures below represent just a fraction of the immense damage leading enterprises have had to bear.",
      usersAffected: {
        value: "148M",
        title: "Users Affected",
        description: "Equifax (2017) data breach due to unpatched vulnerability.",
      },
      globalAverageCost: {
        value: "$4.88M",
        title: "Global Average Cost",
        description: "For a single data breach in 2024 (IBM).",
      },
      healthcareCost: {
        value: "$10.1M",
        title: "Cost in Healthcare Industry",
        description: "The industry bearing the heaviest damage for a single breach.",
      },
      industryThreat: {
        value: "92%",
        title: "Industry Threatened",
        description: "Primarily threatened by Ransomware.",
      },
    },
  },
  vi: {
    navbar: {
      features: "Tính năng",
      solution: "Giải pháp", // New translation key
      benefits: "Lợi ích", // New translation key
      technology: "Công nghệ", // New translation key
      aiArchitecture: "Kiến trúc AI", // New translation key
      useCases: "Trường hợp sử dụng", // New translation key
      dashboard: "Dashboard",
      contact: "Liên hệ",
      language: "Ngôn ngữ",
      english: "Tiếng Anh",
      vietnamese: "Tiếng Việt",
    },
    hero: {
      title: "FPT Cyber Threat Intelligence",
      description: [
        "Bảo vệ doanh nghiệp của bạn khỏi mọi mối đe dọa mạng",
        "Được hỗ trợ bởi trí tuệ nhân tạo tiên tiến.",
      ],
      requestDemoButton: "Yêu cầu bản dùng thử",
      viewDemoButton: "Xem sản phẩm", // New translation key
      watchTrailerButton: "Xem Trailer", // New translation key
    },
    featuresSection: {
      headingTag: "Tính năng chính",
      heading: "Giải pháp bảo mật mạng thế hệ mới",
      description: "Được thiết kế đặc biệt để bảo vệ tổ chức của bạn khỏi các mối đe dọa mạng ngày càng tinh vi.",
      advancedThreatAnalysis: {
        title: "Phân tích mối đe dọa nâng cao",
        description: "Sử dụng AI để phát hiện và dự đoán các mối đe dọa mạng phức tạp trước khi chúng gây hại.",
      },
      automatedResponse: {
        title: "Phản ứng tự động",
        description: "Tự động hoá quy trình phản ứng sự cố, giảm thiểu thời gian và tác động của các cuộc tấn công.",
      },
      comprehensiveDataSecurity: {
        title: "Bảo mật dữ liệu toàn diện",
        description:
          "Đảm bảo an toàn cho dữ liệu nhạy cảm của bạn với mã hoá đầu-cuối và kiểm soát truy cập nghiêm ngặt.",
      },
    },
    allInOneSolution: {
      headingTag: "Giải pháp toàn diện",
      heading: "Thông tin tình báo mối đe dọa mạng toàn diện",
      description:
        "Nền tảng của chúng tôi cung cấp một cách tiếp cận thống nhất về an ninh mạng, tích hợp nhiều tính năng mạnh mẽ.",
      oneClickScan: {
        title: "Quét cấu hình một chạm",
        description: "Phát hiện lỗi bảo mật trong cấu hình đám mây chỉ với một cú chạm.",
      },
      realtimeThreat: {
        title: "Giám sát mối đe dọa thời gian thực do AI điều khiển",
        description: "Theo dõi các cuộc tấn công trong thời gian thực với thông tin chi tiết do AI cung cấp.",
      },
      aiAdvisor: {
        title: "Cố vấn AI",
        description: "Nhận câu trả lời và hướng dẫn cho mọi tình huống bảo mật.",
      },
      vmPatchPrioritization: {
        title: "Ưu tiên vá lỗi máy ảo (VM)",
        description:
          "Tự động phát hiện các máy ảo chưa được vá lỗi và đề xuất các bản vá quan trọng dựa trên mức độ rủi ro.",
      },
    },
    benefitsSection: {
      headingTag: "Lợi ích",
      heading: "Kết quả hữu hình cho doanh nghiệp của bạn",
      description: "Trải nghiệm những cải thiện đáng kể về tình hình bảo mật và hiệu quả hoạt động.",
      monitoring: {
        value: "24/7",
        label: "Giám sát",
      },
      accuracy: {
        value: "99%",
        label: "Độ chính xác",
      },
      costReduction: {
        value: "60%",
        label: "Giảm chi phí vận hành",
      },
      timeReduction: {
        value: "70%",
        label: "Giảm thời gian khắc phục sự cố",
      },
    },
    technologyStack: {
      headingTag: "Công nghệ",
      heading: "Ngăn xếp công nghệ được hỗ trợ bởi AI",
      description:
        "Ngăn xếp công nghệ mạnh mẽ của chúng tôi tận dụng AI tiên tiến để cung cấp thông tin tình báo mối đe dọa vượt trội.",
      mlAnomalyDetection: {
        title: "Học máy (ML) & Mô hình ngôn ngữ lớn (LLM) để phát hiện bất thường",
        description:
          "Các mô hình ML tiên tiến xác định các mẫu bất thường, trong khi LLM phân tích nhật ký để có được thông tin chi tiết hơn và thông tin tình báo mối đe dọa dự đoán.",
      },
      nlpConversational: {
        title: "Xử lý ngôn ngữ tự nhiên (NLP) & AI tạo sinh cho bảo mật hội thoại",
        description:
          "Tận dụng NLP và AI tạo sinh tiên tiến để cho phép tương tác trực quan, giống con người để phân tích và phản ứng bảo mật.",
      },
      // Updated A2A Automation to MCP
      mcpCollaboration: {
        title: "MCP - Nền tảng cộng tác đa tác nhân",
        description:
          "Một nền tảng nơi nhiều tác nhân AI cộng tác, trao đổi thông tin và đưa ra quyết định bảo mật theo thời gian thực mà không cần sự can thiệp của con người.",
      },
      aiCodeGeneration: {
        title: "Tạo mã & vá lỗi lỗ hổng bằng AI",
        description:
          "Tự động hóa việc tạo mã an toàn, tập lệnh và vá lỗi lỗ hổng nhanh chóng bằng các thuật toán AI tiên tiến.",
      },
    },
    howItWorks: {
      heading: "Cách thức hoạt động",
      description: "Nền tảng của chúng tôi tích hợp liền mạch với các quy trình và hệ thống hiện có của bạn.",
      step1: {
        title: "Kết nối dữ liệu của bạn",
        description: "Kết nối an toàn cơ sở tri thức, tài liệu và nguồn dữ liệu của tổ chức bạn.",
      },
      step2: {
        title: "Cấu hình AI của bạn",
        description: "Chọn LLM, thiết lập tác nhân và tùy chỉnh các mẫu lời nhắc để phù hợp với nhu cầu của bạn.",
      },
      step3: {
        title: "Triển khai & Mở rộng",
        description: "Triển khai cho tổ chức của bạn với bảo mật cấp doanh nghiệp và mở rộng khi cần.",
      },
    },
    useCases: {
      headingTag: "Trường hợp sử dụng",
      heading: "Chuyển đổi các ngành công nghiệp",
      description:
        "Nền tảng AI của chúng tôi được thiết kế để đáp ứng những thách thức riêng của các lĩnh vực khác nhau.",
      enterpriseKnowledgeManagement: {
        title: "Quản lý tri thức doanh nghiệp",
        description:
          "Tập trung hóa tri thức tổ chức và cho phép tìm kiếm, truy xuất bằng AI trên tất cả các nguồn dữ liệu của bạn.",
      },
      governmentOperations: {
        title: "Hoạt động chính phủ",
        description:
          "Hợp lý hóa quy trình, nâng cao dịch vụ công dân và cải thiện việc ra quyết định với các giải pháp AI an toàn.",
      },
      financialServices: {
        title: "Dịch vụ tài chính",
        description:
          "Nâng cao tuân thủ, đánh giá rủi ro và dịch vụ khách hàng với AI tuân thủ các yêu cầu bảo mật dữ liệu nghiêm ngặt.",
      },
      healthcare: {
        title: "Chăm sóc sức khỏe",
        description:
          "Cải thiện chăm sóc bệnh nhân và hiệu quả hoạt động trong khi vẫn duy trì tuân thủ HIPAA và quyền riêng tư dữ liệu.",
      },
      legal: {
        title: "Pháp lý",
        description:
          "Tăng tốc nghiên cứu pháp lý, phân tích hợp đồng và chuẩn bị hồ sơ với sự hỗ trợ AI an toàn, chính xác.",
      },
      education: {
        title: "Giáo dục",
        description: "Chuyển đổi trải nghiệm học tập và quy trình hành chính với các giải pháp AI tùy chỉnh.",
      },
      configScan: {
        title: "Quét cấu hình hệ thống để kiểm tra bảo mật",
        description: "Tự động quét cấu hình hệ thống để xác định các lỗ hổng bảo mật và cấu hình sai.",
      },
      logMonitoring: {
        title: "Giám sát và phân tích log tự động",
        description: "Tự động giám sát và phân tích log để cung cấp thống kê và cảnh báo bảo mật theo thời gian thực.",
      },
      aiChatbot: {
        title: "Hỏi đáp kiến thức bảo mật qua AI Chatbot",
        description: "Nhận câu trả lời và hướng dẫn tức thì về kiến thức bảo mật thông qua chatbot AI thông minh.",
      },
      attackForecasting: {
        title: "Dự đoán tấn công tương lai từ phân tích log quá khứ",
        description:
          "Dự đoán các cuộc tấn công mạng trong tương lai bằng cách phân tích dữ liệu log lịch sử với các thuật toán AI tiên tiến.",
      },
      cloudConfigFix: {
        title: "Phân tích và tự động sửa lỗi cấu hình trên Cloud",
        description:
          "Phân tích cấu hình đám mây để tìm lỗ hổng và tự động áp dụng các bản sửa lỗi để tăng cường bảo mật.",
      },
      insiderThreatDetection: {
        title: "Phát hiện truy cập giả danh DevOps qua phân tích hành vi",
        description:
          "Phát hiện các mối đe dọa nội bộ và các nỗ lực giả mạo bằng cách phân tích các mẫu hành vi người dùng bằng AI.",
      },
      killChainDetection: {
        title: "Phát hiện tấn công theo mô hình Kill Chain bằng AI",
        description:
          "Xác định và theo dõi các cuộc tấn công mạng đa giai đoạn bằng cách sử dụng mô hình Kill Chain được hỗ trợ bởi AI.",
      },
      vmPatchManagement: {
        title: "Hệ thống đề xuất quản lý bản vá VM",
        description:
          "Phát hiện các máy ảo chưa được vá và đề xuất các bản vá phù hợp để duy trì tính toàn vẹn của hệ thống.",
      },
      toBeDeveloped: "Sẽ được phát triển", // New translation key
    },
    ourPartners: {
      // Renamed from ourCustomers
      headingTag: "Đối tác của chúng tôi", // Updated text
      heading: "Được tin cậy bởi các nhà lãnh đạo ngành",
      description: "Chúng tôi tự hào hợp tác với các tổ chức hàng đầu để nâng cao tình hình an ninh mạng của họ.", // Updated text
      partners: [
        // Renamed from clients
        {
          name: "FPT Shop",
          logo: "/logos/FPT_Shop_logo.png",
          description: "Chuỗi bán lẻ hàng đầu về sản phẩm công nghệ tại Việt Nam.",
          features: ["Phát hiện mối đe dọa thời gian thực", "Quản lý lỗ hổng tự động", "Phòng chống gian lận bằng AI"],
        },
        {
          name: "Chuỗi nhà thuốc Long Châu",
          logo: "/logos/Long_Chau_Pharmacy_logo.png",
          description: "Một trong những chuỗi nhà thuốc lớn nhất và phát triển nhanh nhất Việt Nam.",
          features: ["Quản lý dữ liệu bệnh nhân an toàn", "Giám sát tuân thủ", "Phân tích bảo mật chuỗi cung ứng"],
        },
        {
          name: "Hệ thống tiêm chủng Long Châu",
          logo: "/logos/Long_Chau_Vaccination_logo.png",
          description: "Hệ thống quản lý tiêm chủng toàn diện.",
          features: [
            "Bảo mật & quyền riêng tư dữ liệu",
            "Cơ sở hạ tầng bảo mật có khả năng mở rộng",
            "Thông tin tình báo mối đe dọa cho ngành y tế",
          ],
        },
      ],
      ctaHeading: "Sẵn sàng bảo mật doanh nghiệp của bạn?",
      ctaDescription:
        "Hãy tham gia danh sách đối tác hài lòng của chúng tôi. Yêu cầu bản demo cá nhân hóa ngay hôm nay.", // Updated text
      ctaButton: "Yêu cầu bản dùng thử",
    },
    testimonials: {
      headingTag: "Lời chứng thực",
      heading: "Được tin cậy bởi các tổ chức hàng đầu",
      description: "Xem những gì khách hàng doanh nghiệp và chính phủ của chúng tôi nói về nền tảng AI của chúng tôi.",
    },
    dashboardSimulation: {
      headingTag: "Mô phỏng Dashboard",
      heading: "Phát hiện mối đe dọa thời gian thực",
      description: "Theo dõi và phản ứng với các mối đe dọa mạng ngay lập tức với giao diện trực quan.",
      threatOverview: "Tổng quan mối đe dọa",
      criticalThreats: "Mối đe dọa nghiêm trọng",
      recentActivities: "Hoạt động gần đây",
      ddosDetected: "Phát hiện tấn công DDoS - IP: 192.168.1.1",
      vulnerabilityScan: "Quét lỗ hổng hoàn tất - Server A",
      malwareAlert: "Cảnh báo mã độc - User: John Doe",
      signatureUpdate: "Cập nhật chữ ký thành công",
      statistics: "Thống kê",
      totalThreats: "Tổng số mối đe dọa: ",
      attacksBlocked: "Tấn công bị chặn: ",
      avgResponseTime: "Thời gian phản ứng trung bình: ",
      provider: "Nhà cung cấp",
      fptSmartCloud: "FPT Smart Cloud",
      clearAllFilters: "Xóa tất cả bộ lọc",
      realtimeThreatDetectionStatus: "Phát hiện mối đe dọa thời gian thực",
      active: "Hoạt động",
      lastUpdated: "Cập nhật lần cuối:",
      threatsDetected: "mối đe dọa được phát hiện",
      realtimeThreatRadar: "RADAR MỐI ĐE DỌA THỜI GIAN THỰC",
      liveThreatDetectionTracking: "Phát hiện & theo dõi mối đe dọa trực tiếp",
      critical: "Nghiêm trọng",
      high: "Cao",
      medium: "Trung bình",
      low: "Thấp",
      latestDetection: "Phát hiện mới nhất",
      multipleNetworkScansDetected: "Phát hiện nhiều lần quét mạng",
      multipleFailedLoginAttemptsDetected: "Phát hiện nhiều lần đăng nhập thất bại",
    },
    requestDemoSection: {
      headingTag: "Liên hệ",
      heading: "Yêu cầu bản dùng thử",
      description:
        "Liên hệ với đội ngũ chuyên gia của chúng tôi để tìm hiểu cách FPT Cyber Threat Intelligence có thể bảo vệ doanh nghiệp của bạn.",
      customSolutions: "Giải pháp tùy chỉnh cho mọi quy mô doanh nghiệp",
      support: "Hỗ trợ kỹ thuật 24/7",
      seamlessIntegration: "Tích hợp liền mạch với hệ thống hiện có",
      formTitle: "Điền thông tin của bạn",
      formDescription: "Chúng tôi sẽ liên hệ lại để tư vấn giải pháp phù hợp nhất.",
      firstName: "Họ",
      lastName: "Tên",
      workEmail: "Email công việc",
      companyName: "Tên công ty/tổ chức",
      yourRole: "Chức vụ",
      rolePlaceholder: "Giám đốc IT, Trưởng phòng An ninh...",
      organizationSize: "Quy mô tổ chức",
      selectSize: "Chọn quy mô",
      employees1_50: "1-50 nhân viên",
      employees51_200: "51-200 nhân viên",
      employees201_500: "201-500 nhân viên",
      employees501_1000: "501-1000 nhân viên",
      employees1001Plus: "Hơn 1000 nhân viên",
      governmentAgency: "Cơ quan chính phủ",
      howCanWeHelp: "Bạn cần chúng tôi giúp gì?",
      messagePlaceholder: "Mô tả yêu cầu cụ thể của bạn...",
      submitRequest: "Gửi yêu cầu",
      submitting: "Đang gửi...",
      agreement: "Bằng cách gửi biểu mẫu này, bạn đồng ý với chính sách bảo mật và điều khoản dịch vụ của chúng tôi.",
      thankYou: "Cảm ơn bạn!",
      inquiryReceived:
        "Yêu cầu của bạn đã được gửi. Đội ngũ chuyên gia của chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      submitAnother: "Gửi yêu cầu khác",
      scanQrButton: "Quét QR để mở trang demo", // New translation key
      scanQrTitle: "Quét mã QR", // New translation key
      scanQrDescription: "Quét mã QR này bằng thiết bị di động của bạn để mở trang demo.", // New translation key
    },
    contactPricing: {
      heading: "Giá tùy chỉnh cho doanh nghiệp",
      description:
        "Chúng tôi cung cấp các gói giá tùy chỉnh cho các doanh nghiệp và cơ quan chính phủ dựa trên nhu cầu và quy mô cụ thể của bạn.",
      unlimitedUsers: "Không giới hạn người dùng với kiểm soát truy cập dựa trên vai trò",
      customizableKnowledgeBase: "Kích thước cơ sở tri thức có thể tùy chỉnh",
      accessToLLM: "Truy cập tất cả các mô hình LLM",
      enterpriseSecurity: "Bảo mật và tuân thủ cấp doanh nghiệp",
      contactForQuote: "Liên hệ với chúng tôi để nhận báo giá cá nhân hóa và thảo luận về các yêu cầu cụ thể của bạn.",
    },
    footer: {
      allRightsReserved: "Mọi quyền được bảo vệ.",
    },
    privacyPolicy: {
      title: "Chính sách bảo mật",
      description: "Cam kết của chúng tôi về việc bảo vệ quyền riêng tư và bảo mật dữ liệu của bạn.",
      lastUpdated: "Cập nhật lần cuối:",
      infoCollection: "Thông tin chúng tôi thu thập",
      infoUsage: "Cách chúng tôi sử dụng thông tin của bạn",
      dataStorage: "Lưu trữ và bảo mật dữ liệu",
      dataRetention: "Thời gian lưu giữ dữ liệu",
      infoSharing: "Chia sẻ thông tin của bạn",
      thirdPartyServices: "Dịch vụ của bên thứ ba",
      cookies: "Cookie và công nghệ theo dõi",
      analytics: "Phân tích",
      privacyRights: "Quyền riêng tư của bạn",
      gdprRights: "Quyền riêng tư GDPR (Đối với cư dân Khu vực kinh tế Châu Âu)",
      ccpaRights: "Quyền riêng tư CCPA (Đối với cư dân California)",
      childrensPrivacy: "Quyền riêng tư của trẻ em",
      internationalTransfers: "Chuyển dữ liệu quốc tế",
      changesToPolicy: "Thay đổi đối với Chính sách bảo mật này",
      contactUs: "Liên hệ với chúng tôi",
      backToHome: "Quay lại trang chủ",
      collectionExplanation: "Chúng tôi thu thập nhiều loại thông tin để cung cấp và cải thiện dịch vụ của mình:",
      personalIdentifiers: "Thông tin nhận dạng cá nhân (ví dụ: tên, địa chỉ email, số điện thoại)",
      accountCredentials: "Thông tin đăng nhập tài khoản (ví dụ: tên người dùng, mật khẩu)",
      billingInformation: "Thông tin thanh toán (ví dụ: chi tiết thẻ thanh toán, địa chỉ thanh toán)",
      companyInformation: "Thông tin công ty (ví dụ: tên công ty, ngành, quy mô)",
      userGeneratedContent: "Nội dung do người dùng tạo (ví dụ: lời nhắc, truy vấn, phản hồi)",
      usageData: "Dữ liệu sử dụng (ví dụ: địa chỉ IP, loại trình duyệt, các trang đã truy cập, thời gian sử dụng)",
      usageExplanation: "Chúng tôi sử dụng thông tin thu thập được cho nhiều mục đích khác nhau, bao gồm:",
      provideServices: "Để cung cấp, vận hành và duy trì dịch vụ của chúng tôi",
      processTransactions: "Để xử lý các giao dịch của bạn và quản lý đơn đặt hàng của bạn",
      sendMessages: "Để gửi cho bạn các thông báo kỹ thuật, cập nhật, cảnh báo bảo mật và tin nhắn hỗ trợ",
      respondToRequests: "Để phản hồi các bình luận, câu hỏi và yêu cầu dịch vụ khách hàng của bạn",
      personalizeExperience: "Để cá nhân hóa và cải thiện trải nghiệm của bạn trên trang web của chúng tôi",
      monitorTrends:
        "Để giám sát và phân tích xu hướng, cách sử dụng và các hoạt động liên quan đến dịch vụ của chúng tôi",
      detectFraud: "Để phát hiện, điều tra và ngăn chặn các giao dịch gian lừa đảo và các hoạt động bất hợp pháp khác",
      complyWithLaw: "Để tuân thủ các nghĩa vụ pháp lý của chúng tôi",
      storageExplanation:
        "Chúng tôi thực hiện nhiều biện pháp bảo mật khác nhau để duy trì sự an toàn cho thông tin cá nhân của bạn.",
      storageDetails:
        "Dữ liệu cá nhân của bạn được lưu trữ trên các máy chủ an toàn và được bảo vệ bằng các công nghệ mã hóa tiêu chuẩn ngành.",
      retentionExplanation:
        "Chúng tôi lưu giữ thông tin cá nhân miễn là cần thiết để thực hiện các mục đích mà nó được thu thập, hoặc theo yêu cầu của pháp luật.",
      sharingExplanation: "Chúng tôi có thể chia sẻ thông tin của bạn với bên thứ ba trong các trường hợp sau:",
      serviceProviders: "Nhà cung cấp dịch vụ",
      shareWithProviders:
        "Chúng tôi có thể chia sẻ thông tin của bạn với các nhà cung cấp, tư vấn và các nhà cung cấp dịch vụ bên thứ ba khác thực hiện dịch vụ thay mặt chúng tôi.",
      businessTransfers: "Chuyển giao kinh doanh",
      shareInTransfers:
        "Liên quan đến bất kỳ sự sáp nhập, bán tài sản công ty, tài trợ hoặc mua lại toàn bộ hoặc một phần doanh nghiệp của chúng tôi bởi một công ty khác.",
      yourConsent: "Với sự đồng ý của bạn",
      shareWithConsent: "Chúng tôi có thể chia sẻ thông tin của bạn khi bạn cho phép rõ ràng để làm như vậy.",
      legalRequirements: "Yêu cầu pháp lý",
      shareForLegal:
        "Chúng tôi có thể tiết lộ thông tin của bạn nếu được yêu cầu bởi luật pháp hoặc để đáp ứng các yêu cầu hợp lệ của các cơ quan công quyền.",
      useThirdPartyServices: "Chúng tôi sử dụng các dịch vụ của bên thứ ba sau đây có thể thu thập thông tin về bạn:",
      cookiesExplanation:
        "Cookie là các tệp dữ liệu nhỏ được lưu trữ trên thiết bị của bạn giúp chúng tôi cải thiện dịch vụ và trải nghiệm của bạn.",
      cookiesUsage: "Chúng tôi sử dụng cookie để:",
      maintainSession: "Duy trì phiên và tùy chọn của bạn",
      understandUsage: "Hiểu cách bạn sử dụng trang web của chúng tôi",
      enhanceSecurity: "Nâng cao bảo mật",
      analyzeMarketing: "Phân tích hiệu suất chiến dịch tiếp tác",
      cookieInstructions:
        "Bạn có thể hướng dẫn trình duyệt của mình từ chối tất cả cookie hoặc cho biết khi nào cookie đang được gửi. Tuy nhiên, nếu bạn không chấp nhận cookie, bạn có thể không sử dụng được một số phần dịch vụ của chúng tôi.",
      analyticsExplanation:
        "Chúng tôi sử dụng các dịch vụ phân tích để thu thập thông tin về việc bạn sử dụng trang web và dịch vụ của chúng tôi. Điều này giúp chúng tôi hiểu cách người dùng tương tác với nền tảng của chúng tôi và cải thiện các dịch vụ của chúng tôi.",
      rightsExplanation: "Bạn có một số quyền nhất định liên quan đến dữ liệu cá nhân của mình:",
      rightToAccess: "Quyền truy cập: Bạn có quyền yêu cầu bản sao dữ liệu cá nhân của mình.",
      rightToCorrect:
        "Quyền chỉnh sửa: Bạn có quyền yêu cầu chúng tôi chỉnh sửa bất kỳ thông tin nào bạn cho là không chính xác hoặc hoàn thành thông tin bạn cho là thiếu.",
      rightToDelete:
        "Quyền xóa: Bạn có quyền yêu cầu chúng tôi xóa dữ liệu cá nhân của bạn, trong một số điều kiện nhất định.",
      rightToObject:
        "Quyền phản đối xử lý: Bạn có quyền phản đối việc chúng tôi xử lý dữ liệu cá nhân của bạn, trong một số điều kiện nhất định.",
      rightToPortability:
        "Quyền di chuyển dữ liệu: Bạn có quyền yêu cầu chúng tôi chuyển dữ liệu mà chúng tôi đã thu thập cho một tổ chức khác hoặc trực tiếp cho bạn, trong một số điều kiện nhất định.",
      rightToWithdraw:
        "Quyền rút lại sự đồng ý: Bạn có quyền rút lại sự đồng ý của mình bất cứ lúc nào khi chúng tôi dựa vào sự đồng ý để xử lý thông tin cá nhân của bạn.",
      gdprExplanation:
        "Nếu bạn là cư dân của Khu vực Kinh tế Châu Âu (EEA), bạn có một số quyền bảo vệ dữ liệu nhất định theo Quy định chung về bảo vệ dữ liệu (GDPR).",
      gdprSpecificRights: "Các quyền này bao gồm:",
      accessUpdateDelete: "Quyền truy cập, cập nhật hoặc xóa thông tin chúng tôi có về bạn.",
      rightOfRectification:
        "Quyền chỉnh sửa. Bạn có quyền yêu cầu thông tin của bạn được chỉnh sửa nếu thông tin đó không chính xác hoặc không đầy đủ.",
      rightToObjectProcessing: "Quyền phản đối. Bạn có quyền phản đối việc chúng tôi xử lý Dữ liệu cá nhân của bạn.",
      rightOfRestriction: "Quyền hạn chế. Bạn có quyền yêu cầu chúng tôi hạn chế xử lý thông tin cá nhân của bạn.",
      rightToDataPortability:
        "Quyền di chuyển dữ liệu. Bạn có quyền được cung cấp một bản sao Dữ liệu cá nhân ở định dạng có cấu trúc, có thể đọc được bằng máy và thường được sử dụng.",
      rightToWithdrawConsent:
        "Quyền rút lại sự đồng ý. Bạn cũng có quyền rút lại sự đồng ý của mình bất cứ lúc nào khi chúng tôi dựa vào sự đồng ý của bạn để xử lý thông tin cá nhân của bạn.",
      exerciseGdprRights:
        "Xin lưu ý rằng chúng tôi có thể yêu cầu bạn xác minh danh tính của mình trước khi phản hồi các yêu cầu đó. Bạn có quyền khiếu nại với Cơ quan bảo vệ dữ liệu về việc chúng tôi thu thập và sử dụng Dữ liệu cá nhân của bạn.",
      ccpaExplanation:
        "Nếu bạn là cư dân California, Đạo luật quyền riêng tư của người tiêu dùng California (CCPA) cung cấp cho bạn các quyền cụ thể liên quan đến thông tin cá nhân của bạn.",
      ccpaSpecificRights: "Các quyền này bao gồm:",
      rightToKnow: "Quyền được biết thông tin cá nhân nào đang được thu thập về họ.",
      rightToDelete: "Quyền xóa thông tin cá nhân của họ.",
      rightToOptOut: "Quyền từ chối bán thông tin cá nhân của họ.",
      rightToNonDiscrimination: "Quyền không bị phân biệt đối xử khi thực hiện các quyền CCPA của họ.",
      exerciseCcpaRights:
        "Để thực hiện bất kỳ quyền nào trong số này, vui lòng liên hệ với chúng tôi bằng cách sử dụng các chi tiết dưới đây.",
      childrenExplanation:
        "Dịch vụ của chúng tôi không dành cho bất kỳ ai dưới 13 tuổi. Chúng tôi không cố ý thu thập thông tin nhận dạng cá nhân từ bất kỳ ai dưới 13 tuổi. Nếu bạn là cha mẹ hoặc người giám hộ và bạn biết rằng con bạn đã cung cấp Dữ liệu cá nhân cho chúng tôi, vui lòng liên hệ với chúng tôi. Nếu chúng tôi biết rằng chúng tôi đã thu thập Dữ liệu cá nhân từ trẻ em mà không có sự xác minh của cha mẹ, chúng tôi sẽ thực hiện các bước để xóa thông tin đó khỏi máy chủ của chúng tôi.",
      transferExplanation:
        "Thông tin của bạn, bao gồm Dữ liệu cá nhân, có thể được chuyển đến — và duy trì trên — các máy tính nằm ngoài tiểu bang, tỉnh, quốc gia hoặc khu vực tài phán của chính phủ của bạn, nơi luật bảo vệ dữ liệu có thể khác với luật của khu vực tài phán của bạn.",
      transferToUS:
        "Nếu bạn ở ngoài Hoa Kỳ và chọn cung cấp thông tin cho chúng tôi, xin lưu ý rằng chúng tôi chuyển dữ liệu, bao gồm Dữ liệu cá nhân, đến Hoa Kỳ và xử lý tại đó.",
      updateExplanation:
        "Chúng tôi có thể cập nhật Chính sách bảo mật của mình theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách đăng Chính sách bảo mật mới trên trang này.",
      reviewAdvice:
        "Bạn nên xem lại Chính sách bảo mật này định kỳ để biết bất kỳ thay đổi nào. Các thay đổi đối với Chính sách bảo mật này có hiệu lực khi chúng được đăng trên trang này.",
      contactExplanation:
        "Nếu bạn có bất kỳ câu hỏi nào về Chính sách bảo mật này, vui lòng liên hệ với chúng tôi qua email tại",
      orByMail: "hoặc qua thư tại",
    },
    aiArchitecture: {
      headingTag: "Kiến trúc AI",
      heading: "Luồng thông tin tình báo mối đe dọa được hỗ trợ bởi AI",
      description:
        "Hiểu cách nền tảng của chúng tôi xử lý dữ liệu trong một vòng lặp liên tục để cung cấp thông tin chi tiết và cảnh báo theo thời gian thực.",
      logIngestion: "Thu thập dữ liệu Log",
      aiMlAnalysis: "Công cụ phân tích AI/ML",
      realtimeAlerting: "Cảnh báo & Dashboard thời gian thực",
      feedbackLoop: "Vòng phản hồi để cải thiện mô hình",
    },
    threatLandscapeSection: {
      heading: "Bối Cảnh Mối Đe Dọa Leo Thang",
      description:
        "Trong thập kỷ qua, các cuộc tấn công mạng đã phát triển từ những sự cố đơn lẻ thành các chiến dịch tinh vi, gây thiệt hại hàng tỷ đô la. Nhiều doanh nghiệp lớn đã sụp đổ không phải vì các cuộc tấn công zero-day bí ẩn, mà vì bỏ qua các lỗ hổng bảo mật cơ bản.",
      cloudMisconfig: {
        title: "Lỗ Hổng Từ Cấu Hình Sai Trên Cloud",
        label1: "Cấu hình sai",
        label2: "Nguyên nhân khác",
        description:
          "Gần 70% các sự cố bảo mật trên nền tảng đám mây bắt nguồn từ những lỗi cấu hình đơn giản. Đây là cửa ngõ bị bỏ ngỏ cho tin tặc xâm nhập vào hệ thống của bạn.",
      },
      unpatchedSystems: {
        title: "Nguy Cơ Từ Các Hệ Thống Chưa Vá Lỗi",
        label1: "Lỗ hổng chưa vá",
        label2: "Nguyên nhân khác",
        description:
          "60% các doanh nghiệp bị tấn công thừa nhận nguyên nhân đến từ một lỗ hổng đã được biết đến nhưng chưa được vá kịp thời, điển hình là vụ tấn công Equifax.",
      },
    },
    costOfInactionSection: {
      heading: "Cái Giá Của Sự Thờ Ơ",
      description:
        "Không hành động không phải là một lựa chọn. Những con số dưới đây chỉ là một phần nhỏ của thiệt hại khổng lồ mà các doanh nghiệp hàng đầu đã phải gánh chịu.",
      usersAffected: {
        value: "148M",
        title: "Người Dùng Bị Ảnh Hưởng",
        description: "Vụ rò rỉ dữ liệu Equifax (2017) do lỗ hổng chưa được vá.",
      },
      globalAverageCost: {
        value: "$4.88M",
        title: "Chi Phí Trung Bình Toàn Cầu",
        description: "Cho một vụ vi phạm dữ liệu vào năm 2024 (IBM).",
      },
      healthcareCost: {
        value: "$10.1M",
        title: "Chi Phí Trong Ngành Y Tế",
        description: "Là ngành chịu thiệt hại nặng nề nhất cho mỗi vụ vi phạm.",
      },
      industryThreat: {
        value: "92%",
        title: "Ngành Công Nghiệp",
        description: "Bị đe dọa hàng đầu bởi Ransomware.",
      },
    },
  },
}

export type Locale = keyof typeof translations
export type Dictionary = (typeof translations)["en"]

export const getDictionary = (locale: Locale): Dictionary => {
  return translations[locale] || translations["en"] // Fallback to English
}
