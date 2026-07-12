import React, { useState, useEffect } from 'react';

const FileTextIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

const UploadIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
  </svg>
);

const CheckCircleIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const AlertTriangleIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" x2="12" y1="9" y2="13" />
    <line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
);

const ShieldIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 19.5 4 17 4 13V6a1 1 0 0 1 .76-.97l8.24-2a1 1 0 0 1 .5 0l8.24 2A1 1 0 0 1 20 6v7z" />
  </svg>
);

const InfoIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="16" y2="12" />
    <line x1="12" x2="12.01" y1="8" y2="8" />
  </svg>
);

const XIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" x2="6" y1="6" y2="18" />
    <line x1="6" x2="18" y1="6" y2="18" />
  </svg>
);

const Loader2Icon = ({ className = "w-4 h-4 animate-spin" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="12" x2="12" y1="2" y2="6" />
    <line x1="12" x2="12" y1="18" y2="22" />
    <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
    <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
    <line x1="2" x2="6" y1="12" y2="12" />
    <line x1="18" x2="22" y1="12" y2="12" />
    <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
    <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
  </svg>
);

const DownloadIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const LayersIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const ChevronRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const HistoryIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <polyline points="3 3 3 8 8 8" />
    <line x1="12" x2="12" y1="7" y2="12" />
    <line x1="12" x2="16" y1="12" y2="14" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" x2="19" y1="12" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const LogOutIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </svg>
);

const UserIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const SparklesIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} xmlns="http://www.w3.org/2005/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z" />
    <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" />
  </svg>
);

const CHAPTERS_LIST = [
  { id: 1, name: "Section III: Risk Factors", code: "RF" },
  { id: 2, name: "Section IV: Introduction", code: "IN" },
  { id: 3, name: "Section V: Objects of the Issue", code: "OBJ" },
  { id: 4, name: "Section VI: Our Business", code: "BUS" }
];

const CLAIMS_DATABASE = {
  claim1: {
    text: "projected at ₹24.50 Crores",
    doc: "Capital_Expenditure_Plan_FY26.xlsx",
    loc: "Sheet: CapEx_Summary, Cell: D14",
    val: "Total Fresh Issue Fund Requirement: INR 245,000,000"
  },
  claim2: {
    text: "top 3 clients account for 42.1% of our revenue",
    doc: "Audited_Financials_FY25.pdf",
    loc: "Page 18, Note 2(b) - Revenue Concentration",
    val: "Cumulative Revenue Top 3 Clients: 42.127%"
  }
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("DRHP Copilot Render Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-slate-300">
          <div className="max-w-md w-full bg-slate-900 border border-red-500/20 p-6 rounded-2xl text-center shadow-2xl">
            <AlertTriangleIcon className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-lg font-bold text-white mb-2">Something went wrong</h2>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              React crashed due to a rendering exception. You can reset the interface to recover.
            </p>
            <div className="bg-black/40 text-left p-3 rounded font-mono text-[10px] text-red-300 overflow-x-auto mb-4 max-h-32">
              {this.state.error?.toString()}
            </div>
            <button 
              onClick={() => window.location.reload()} 
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs py-2 rounded-lg transition-colors"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function LoginGate({ onLogin }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Brand Header */}
        <div className="text-center mb-12 animate-in fade-in duration-700">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_0_25px_rgba(99,102,241,0.25)] mb-5">
            <LayersIcon className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">DRHP Copilot</h1>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            SME IPO Drafting & Compliance Validation Environment
          </p>
        </div>

        {/* Portals Split Layout */}
        <div className="grid md:grid-cols-2 gap-6 animate-in slide-in-from-bottom-6 duration-700 delay-150">
          
          {/* Card A: SME Workspace */}
          <button 
            onClick={() => onLogin('promoter')}
            className="group relative bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 p-8 rounded-2xl text-left transition-all duration-300 shadow-xl overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
              <UserIcon className="w-36 h-36 text-white" />
            </div>
            <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20">
              <UserIcon className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-white transition-colors">SME Promoter Workspace</h2>
            <p className="text-slate-400 text-xs leading-relaxed mb-6 h-12">
              Ingest raw data assets, compile ICDR-aligned prospectus drafts, and test statutory parameters in real-time.
            </p>
            <div className="inline-flex items-center gap-1.5 text-indigo-400 font-semibold text-xs group-hover:gap-2.5 transition-all">
              Initialize Workspace <ArrowRightIcon className="w-4 h-4" />
            </div>
          </button>

          {/* Card B: Reviewer Console */}
          <button 
            onClick={() => onLogin('reviewer')}
            className="group relative bg-slate-900/40 border border-slate-800 hover:border-purple-500/50 p-8 rounded-2xl text-left transition-all duration-300 shadow-xl overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
              <FileTextIcon className="w-36 h-36 text-white" />
            </div>
            <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-6 border border-purple-500/20">
              <FileTextIcon className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-white transition-colors">Reviewer & Banker Console</h2>
            <p className="text-slate-400 text-xs leading-relaxed mb-6 h-12">
              Audit generated claim lineages, review pre-verified guardrails, and execute formal sign-offs for regulatory submission.
            </p>
            <div className="inline-flex items-center gap-1.5 text-purple-400 font-semibold text-xs group-hover:gap-2.5 transition-all">
              Launch Review Console <ArrowRightIcon className="w-4 h-4" />
            </div>
          </button>

        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [role, setRole] = useState(null); // 'promoter' | 'reviewer' | null

  return (
    <ErrorBoundary>
      {!role ? (
        <LoginGate onLogin={(selectedRole) => setRole(selectedRole)} />
      ) : (
        <CopilotWorkspace role={role} onLogout={() => setRole(null)} />
      )}
    </ErrorBoundary>
  );
}

function CopilotWorkspace({ role, onLogout }) {
  // App Stages: 0: Not Started, 1: Parsing, 2: Compiling/Indexing, 3: Highlighting, 4: Fully Rendered Draft
  const [appStage, setAppStage] = useState(role === 'reviewer' ? 4 : 0); 
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [expandedGuardrail, setExpandedGuardrail] = useState(null);
  const [exportState, setExportState] = useState('idle');
  const [toastMsg, setToastMsg] = useState(null);

  // Reviewer Specific Action States
  const [isAuditExpanded, setIsAuditExpanded] = useState(true);
  const [showConfirmButtons, setShowConfirmButtons] = useState(false);
  const [confirmedClaims, setConfirmedClaims] = useState({});
  const [approveStage, setApproveStage] = useState(0); 
  const [chapterFlash, setChapterFlash] = useState(false);
  const [auditLogs, setAuditLogs] = useState([
    { id: 1, text: "Automated extraction and ICDR comparison compiled", time: "2 hours ago", author: "Copilot Engine", type: "system" }
  ]);

  // Promoter Sandbox Sliders
  const [postIssueCapital, setPostIssueCapital] = useState(24.5);
  const [promoterPrompt, setPromoterPrompt] = useState("Draft Objects of the issue explaining that our Company aggregate fund requirement matches our dynamic parameters, and our top 3 clients represent 42.1% of overall revenue structures.");
  const [isGenerating, setIsGenerating] = useState(false);

  // Dynamic Content States from API
  const [draftCol1, setDraftCol1] = useState("Our Company was originally incorporated as 'TechFlow Solutions Private Limited' on May 12, 2018, under the provisions of the Companies Act, 2013. The Promoters and Promoter Group currently hold 100% of the pre-issue paid-up equity share capital. The aggregate fund requirement for the Objects of the Issue is projected at ₹24.50 Crores, of which ₹18.00 Crores is specifically allocated towards capital expenditure for the establishment of our manufacturing plant in Pune, Maharashtra.");
  const [draftCol2, setDraftCol2] = useState("The balance of the Net Proceeds will be deployed for general corporate purposes, subject to such deployment not exceeding 25% of the total issue size as prescribed under Chapter IX of the SEBI ICDR Regulations. We operate in a competitive market environment where our top 3 clients account for 42.1% of our revenue based on the Restated Financial Statements for the fiscal year ended March 31, 2025. Any termination of relations with these key enterprise clients may adversely affect our operational viability.");

  // Demo Simulation States
  const [tickerIndex, setTickerIndex] = useState(0);
  const [stats, setStats] = useState(role === 'reviewer' ? { complete: 98, hours: 24 } : { complete: 0, hours: 0 });
  const [guardrailsVisible, setGuardrailsVisible] = useState(role === 'reviewer' ? 3 : 0);
  const [showHintBar, setShowHintBar] = useState(true);
  const [claimsPulsing, setClaimsPulsing] = useState(false);

  const tickerSteps = [
    "Ingesting financial ledgers...",
    "Cross-referencing SEBI ICDR Chapter IX...",
    "Extracting Objects of the Issue...",
    "Drafting DRHP Risk Factors..."
  ];

  useEffect(() => {
    if (appStage === 1) {
      const timer = setTimeout(() => setAppStage(2), 1500);
      return () => clearTimeout(timer);
    }
    
    if (appStage === 2) {
      const tickerInterval = setInterval(() => {
        setTickerIndex(prev => {
          if (prev < tickerSteps.length - 1) return prev + 1;
          clearInterval(tickerInterval);
          setTimeout(() => setAppStage(3), 800);
          return prev;
        });
      }, 1200);

      const statInterval = setInterval(() => {
        setStats(prev => ({
          complete: Math.min(prev.complete + 30, 98),
          hours: Math.min(prev.hours + 2, 24)
        }));
      }, 100);

      const guardrailInterval = setInterval(() => {
        setGuardrailsVisible(prev => Math.min(prev + 1, 3));
      }, 800);

      return () => {
        clearInterval(tickerInterval);
        clearInterval(statInterval);
        clearInterval(guardrailInterval);
      };
    }

    if (appStage === 3) {
      setClaimsPulsing(true);
      const pulseTimer = setTimeout(() => {
        setClaimsPulsing(false);
        setAppStage(4);
      }, 2000);
      return () => clearTimeout(pulseTimer);
    }
  }, [appStage]);

  // Delayed Confirm/Flag buttons in Reviewer view
  useEffect(() => {
    if (selectedClaim && role === 'reviewer' && !confirmedClaims[selectedClaim]) {
      setShowConfirmButtons(false);
      const timer = setTimeout(() => setShowConfirmButtons(true), 150);
      return () => clearTimeout(timer);
    }
  }, [selectedClaim, role, confirmedClaims]);

  const handleUpload = () => {
    if (appStage === 0) setAppStage(1);
  };

  const handleClaimClick = (claimId) => {
    if (appStage < 3) return;
    setShowHintBar(false);
    setSelectedClaim(claimId);
  };

  const handleExport = () => {
    setExportState('loading');
    setTimeout(() => {
      setExportState('success');
      setTimeout(() => setExportState('idle'), 4000);
    }, 1800);
  };

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 4000);
  };

  const handleApproveChapter = () => {
    if (approveStage > 0) return;
    setApproveStage(1);
    setTimeout(() => setApproveStage(2), 150);
    setTimeout(() => {
      setApproveStage(3);
      setChapterFlash(true);
      setTimeout(() => setChapterFlash(false), 1000);
    }, 300);
    setTimeout(() => {
      setAuditLogs(prev => [
        { id: Date.now(), text: "Draft approved — cleared for SEBI submission", time: "just now", author: "Lead Banker", type: "approved" },
        ...prev
      ]);
    }, 450);
    setTimeout(() => {
      setApproveStage(4);
      triggerToast("Section approved for filing package.");
    }, 600);
  };

  const handleGeminiDraft = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("http://localhost:5000/api/draft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: promoterPrompt,
          objectsCapital: postIssueCapital
        })
      });

      if (!response.ok) throw new Error("Backend server unreached.");

      const data = await response.json();
      setDraftCol1(data.col1);
      setDraftCol2(data.col2);
      
      setAuditLogs(prev => [
        { id: Date.now(), text: `Gemini compiled workspace draft via server.`, time: "just now", author: "Backend Service", type: "system" },
        ...prev
      ]);
      triggerToast("AI Draft compiled successfully via server!");
    } catch (err) {
      console.warn("Express server offline. Using fallback generation.");
      
      // Fallback with user custom capital input dynamic value
      setDraftCol1(`Our Company was originally incorporated as 'TechFlow Solutions Private Limited' on May 12, 2018, under the provisions of the Companies Act, 2013. The Promoters and Promoter Group currently hold 100% of the pre-issue paid-up equity share capital. The aggregate fund requirement for the Objects of the Issue is projected at ₹${postIssueCapital.toFixed(2)} Crores, of which ₹18.00 Crores is specifically allocated towards capital expenditure for the establishment of our manufacturing plant in Pune, Maharashtra.`);
      setDraftCol2(`The balance of the Net Proceeds will be deployed for general corporate purposes, subject to such deployment not exceeding 25% of the total issue size as prescribed under Chapter IX of the SEBI ICDR Regulations. We operate in a competitive market environment where our top 3 clients account for 42.1% of our revenue based on the Restated Financial Statements for the fiscal year ended March 31, 2025. Any termination of relations with these key enterprise clients may adversely affect our operational viability.`);
      
      triggerToast("Draft generated locally (Simulated Fallback).");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleConfirmMatch = () => {
    setConfirmedClaims(prev => ({ ...prev, [selectedClaim]: true }));
    setAuditLogs(prev => [
      { id: Date.now(), text: `Confirmed citation claim matching ${CLAIMS_DATABASE[selectedClaim].doc}`, time: "just now", author: "Lead Banker", type: "match" },
      ...prev
    ]);
  };

  const getChapterStatus = (id) => {
    if (id !== 3) return appStage > 0 ? "Pending" : "Not started";
    if (appStage >= 3) return approveStage >= 3 ? "Approved" : "Generated";
    if (appStage >= 1) return "Drafting";
    return "Not started";
  };

  const renderCol1 = () => {
    const defaultText = draftCol1 || "";
    const targetText = "projected at ₹";
    if (defaultText.includes(targetText)) {
      const parts = defaultText.split(targetText);
      const afterTarget = parts[1] || "";
      const croresIdx = afterTarget.indexOf("Crores");
      if (croresIdx !== -1) {
        const remaining = afterTarget.substring(croresIdx + 6);
        return (
          <span>
            {parts[0]}
            {targetText}
            <span 
              onClick={() => handleClaimClick('claim1')}
              className={`cursor-pointer border-b-[1.5px] font-medium px-1 rounded transition-all duration-300 ${
                selectedClaim === 'claim1' ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300 shadow-[0_0_12px_rgba(99,102,241,0.3)] font-semibold' : 
                claimsPulsing ? 'bg-indigo-900/30 border-indigo-500/50 text-indigo-200' : 
                'bg-slate-900 border-slate-700 hover:bg-slate-850 hover:border-slate-500'
              }`}
            >
              {postIssueCapital.toFixed(2)} Crores
            </span>
            {remaining}
          </span>
        );
      }
    }
    return <span>{defaultText}</span>;
  };

  const renderCol2 = () => {
    const defaultText = draftCol2 || "";
    const targetText = "top 3 clients account for 42.1% of our revenue";
    if (defaultText.includes(targetText)) {
      const parts = defaultText.split(targetText);
      return (
        <span>
          {parts[0]}
          <span 
            onClick={() => handleClaimClick('claim2')}
            className={`cursor-pointer border-b-[1.5px] font-medium px-1 rounded transition-all duration-300 ${
              selectedClaim === 'claim2' ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300 shadow-[0_0_12px_rgba(99,102,241,0.3)] font-semibold' : 
              claimsPulsing ? 'bg-indigo-900/30 border-indigo-500/50 text-indigo-200' : 
              'bg-slate-900 border-slate-700 hover:bg-slate-850 hover:border-slate-500'
            }`}
          >
            {targetText}
          </span>
          {parts[1] || ""}
        </span>
      );
    }
    return <span>{defaultText}</span>;
  };

  return (
    <div className="h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black flex flex-col font-sans overflow-hidden text-slate-300">
      
      {/* 1. TOP BAR */}
      <header className="h-[56px] bg-slate-950/50 backdrop-blur-md border-b border-slate-850 px-5 flex items-center justify-between shrink-0 z-20">
        <div className="flex items-center gap-3">
          <div className={`w-7 h-7 rounded flex items-center justify-center shadow-sm transition-colors duration-300 ${role === 'reviewer' ? 'bg-purple-900/30 border border-purple-500/20' : 'bg-slate-900 border border-slate-800'}`}>
            <ShieldIcon className={`w-4 h-4 ${role === 'reviewer' ? 'text-purple-400' : 'text-slate-400'}`} />
          </div>
          <span className="font-semibold text-[15px] tracking-tight text-white">DRHP Copilot</span>
          
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900/80 border border-slate-800 ml-2 animate-in fade-in duration-300">
            <span className={`w-1.5 h-1.5 rounded-full ${role === 'reviewer' ? 'bg-purple-500' : 'bg-indigo-500'}`}></span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
              {role === 'reviewer' ? "Lead Reviewer (Banker)" : "SME Promoter Workspace"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={handleExport}
            disabled={appStage < 3 || exportState !== 'idle' || (role === 'reviewer' && approveStage < 4)}
            className={`text-xs px-4 py-1.5 rounded-md font-medium transition-all flex items-center gap-2 w-[125px] justify-center ${
              role === 'reviewer' ? 'bg-purple-600 hover:bg-purple-500 disabled:bg-slate-800 disabled:text-slate-500' : 'bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500'
            }`}
          >
            {exportState === 'loading' ? <Loader2Icon className="w-3.5 h-3.5 animate-spin" /> : 
             exportState === 'success' ? <><CheckIcon className="w-3.5 h-3.5"/> Compiled</> : 
             <><DownloadIcon className="w-3.5 h-3.5"/> Export DRHP</>}
          </button>

          <button 
            onClick={onLogout}
            className="p-1.5 rounded-lg border border-slate-800 hover:bg-slate-900/50 hover:text-white transition-all cursor-pointer"
            title="Sign Out Session"
          >
            <LogOutIcon className="w-4 h-4 text-slate-500" />
          </button>
        </div>
      </header>

      {/* 2. CONTEXTUAL HINT BAR */}
      {showHintBar && appStage >= 3 && (
        <div className="h-[32px] w-full bg-indigo-950/40 border-b border-indigo-900/40 flex items-center justify-between px-5 text-[11px] text-indigo-300 shrink-0 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-2">
            <InfoIcon className="w-3.5 h-3.5 text-indigo-400" />
            <span>Deterministic Drafting Active · Click any underlined claim in the draft to map direct source citations.</span>
          </div>
          <button onClick={() => setShowHintBar(false)} className="hover:text-indigo-100 p-1 cursor-pointer"><XIcon className="w-3 h-3" /></button>
        </div>
      )}

      {/* 3. CORE FRAMEWORK VIEW */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Chapter Nav Tree */}
        <aside className="w-[230px] bg-slate-950/20 border-r border-slate-850 flex flex-col shrink-0 overflow-y-auto">
          <div className="p-4 flex flex-col gap-4">
            
            {/* SME Promoter Exclusive Upload Card */}
            {role === 'promoter' && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                {appStage === 0 && (
                  <button onClick={handleUpload} className="border border-dashed border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-50/5 bg-slate-900/40 rounded-xl p-4 text-center transition-all group cursor-pointer text-left w-full">
                    <UploadIcon className="w-5 h-5 text-slate-500 mb-2 group-hover:text-indigo-400 transition-colors mx-auto" />
                    <span className="text-xs font-semibold text-slate-300 block mb-0.5 text-center">Upload Data Room</span>
                    <span className="text-[10px] text-slate-500 text-center block">Financial PDFs or Excel sheets</span>
                  </button>
                )}

                {appStage === 1 && (
                  <div className="border border-slate-800 bg-slate-900/50 rounded-xl p-3 text-left w-full flex items-center gap-3">
                    <Loader2Icon className="w-4 h-4 text-indigo-400 animate-spin shrink-0" />
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-xs font-medium text-slate-300 truncate">FY26_Financials.xlsx</span>
                      <span className="text-[9px] text-indigo-300">Parsing structures...</span>
                    </div>
                  </div>
                )}

                {appStage >= 2 && (
                  <div className="border border-emerald-900/30 bg-emerald-950/10 rounded-xl p-3 text-left w-full flex items-center justify-between">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <FileTextIcon className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="text-[11px] font-medium text-emerald-200 truncate">FY26_Data_Room.zip</span>
                    </div>
                    <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  </div>
                )}
              </div>
            )}

            {/* Chapters List */}
            <div className="pt-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3.5 block font-mono">Prospectus Scope</span>
              <nav className="space-y-1.5">
                {CHAPTERS_LIST.map((chap) => {
                  const isTarget = chap.id === 3 && appStage > 0;
                  const status = getChapterStatus(chap.id);

                  return (
                    <div 
                      key={chap.id} 
                      className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center justify-between border transition-all duration-500 ${
                        isTarget ? (chapterFlash ? 'bg-emerald-950/30 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-slate-900/50 border-slate-800') : 'border-transparent'
                      }`}
                    >
                      <span className={`text-[11px] truncate pr-2 ${isTarget ? 'font-medium text-slate-200' : 'text-slate-500'}`}>{chap.name}</span>
                      
                      <span className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold transition-all ${
                        status === 'Not started' || status === 'Pending' ? 'bg-slate-900 text-slate-600 border border-slate-850' :
                        status === 'Drafting' ? 'bg-amber-950/40 text-amber-500 border border-amber-900/30 animate-pulse' :
                        status === 'Approved' ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-800/30' :
                        'bg-indigo-900/30 text-indigo-400 border border-indigo-800/30'
                      }`}>
                        {status === 'Generated' ? 'Ready' : status === 'Drafting' ? 'Drafting' : status === 'Approved' ? 'Approved' : '—'}
                      </span>
                    </div>
                  );
                })}
              </nav>
            </div>

          </div>
        </aside>

        {/* 4. CENTER WORKSPACE: Premium Landscape Canvas */}
        <main className="flex-1 flex flex-col relative bg-slate-950/20 overflow-y-auto">
          <div className="p-6 md:p-10 flex justify-center items-start min-h-full">
            
            <div className="w-full max-w-5xl bg-slate-950 border border-slate-850 rounded-2xl shadow-2xl p-8 md:p-12 min-h-[600px] relative transition-all duration-700">
              
              {/* Draft Header */}
              <div className="flex justify-between items-start border-b border-slate-850 pb-5 mb-8">
                <div>
                  <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest block mb-1 font-mono">Section V</span>
                  <h1 className="text-xl font-bold tracking-tight text-white">Objects of the Issue</h1>
                </div>
                {appStage >= 2 && (
                  <div className="text-right flex flex-col items-end">
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest mb-0.5 font-mono">Grounding Match</span>
                    <span className="text-2xl font-bold text-emerald-400 tracking-tight drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">{stats.complete}%</span>
                  </div>
                )}
              </div>

              {/* Stage 0: Placeholder */}
              {appStage === 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600">
                  <FileTextIcon className="w-10 h-10 mb-3 opacity-25 animate-bounce" />
                  <p className="text-sm font-medium tracking-wide">Awaiting data room assets to generate Section V draft.</p>
                </div>
              )}

              {/* Stage 1: Initial Pulse */}
              {appStage === 1 && (
                <div className="space-y-4 animate-pulse pt-4 columns-1 md:columns-2 gap-10">
                  <div className="h-3.5 bg-slate-900 rounded w-full"></div>
                  <div className="h-3.5 bg-slate-900 rounded w-11/12"></div>
                  <div className="h-3.5 bg-slate-900 rounded w-4/5"></div>
                  <div className="h-3.5 bg-slate-900 rounded w-full mt-6"></div>
                  <div className="h-3.5 bg-slate-900 rounded w-3/4"></div>
                </div>
              )}

              {/* Stage 2: Processing Ticker & Skeletons */}
              {appStage === 2 && (
                <div className="pt-4">
                  <div className="mb-8 border border-indigo-500/10 bg-indigo-950/20 rounded-xl p-4 max-w-xl mx-auto shadow-sm">
                    {tickerSteps.map((step, idx) => (
                      <div key={idx} className={`flex items-center gap-3 text-[11px] font-medium transition-all duration-300 py-1 ${idx === tickerIndex ? 'text-indigo-300 opacity-100' : idx < tickerIndex ? 'text-slate-500 opacity-60' : 'hidden'}`}>
                        {idx < tickerIndex ? <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-500" /> : <Loader2Icon className="w-3.5 h-3.5 animate-spin text-indigo-400" />}
                        {step}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4 animate-pulse columns-1 md:columns-2 gap-10">
                    <div className="h-3.5 bg-slate-900 rounded w-full"></div>
                    <div className="h-3.5 bg-slate-900 rounded w-11/12"></div>
                    <div className="h-3.5 bg-slate-900 rounded w-4/5"></div>
                  </div>
                </div>
              )}

              {/* Stage 3+: Text Rendering */}
              {appStage >= 3 && (
                <div className="text-[13.5px] leading-relaxed text-slate-300 font-serif text-justify animate-in fade-in duration-700 columns-1 md:columns-2 gap-10">
                  <p className="mb-4 font-normal">
                    {renderCol1()}
                  </p>
                  <p className="mb-4 font-normal">
                    {renderCol2()}
                  </p>
                </div>
              )}
              
            </div>
          </div>
        </main>

        {/* 5. RIGHT PANEL: Custom layout scroll-adjusted */}
        <aside className="w-[330px] bg-slate-950 border-l border-slate-850 flex flex-col shrink-0 relative overflow-y-auto max-h-[calc(100vh-56px)] pb-12">
          
          {/* ================= PROMOTER MODE SIDEBAR ================= */}
          {role === 'promoter' ? (
            <div className="p-5 flex flex-col gap-5 animate-in fade-in duration-300">
              
              {/* Stat Chips */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-850 shadow-inner">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-1 font-mono">Pre-verified Checks</span>
                  <div className="text-base font-bold text-slate-200 font-mono">
                    {appStage === 0 ? '—' : `${guardrailsVisible}/3`}
                  </div>
                </div>
                <div className="bg-slate-900/50 p-3.5 rounded-xl border border-slate-850 shadow-inner">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-1 font-mono">Drafting ROI</span>
                  <div className="text-base font-bold text-emerald-400 font-mono tracking-tight flex items-baseline gap-0.5">
                    {appStage === 0 ? '—' : `+${stats.hours}h`}
                  </div>
                </div>
              </div>

              {/* Traceability Lineage Card */}
              <div>
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5 flex items-center gap-1.5 font-mono">
                  <ShieldIcon className="w-3.5 h-3.5 text-indigo-400" /> Grounded Citations
                </h3>
                <div className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${
                  selectedClaim ? 'bg-slate-900 border-indigo-500/30 shadow-md' : 'bg-slate-900/25 border-slate-800 border-dashed'
                }`}>
                  {!selectedClaim ? (
                    <div className="p-6 text-center">
                      <p className="text-[11px] text-slate-500 font-medium">Click any underlined claim in the draft text to trace its source.</p>
                    </div>
                  ) : (
                    <div className="p-4 animate-in fade-in slide-in-from-right-4 duration-300">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 font-mono"><CheckCircleIcon className="w-3 h-3"/> Lineage Mapped</span>
                        <button onClick={() => setSelectedClaim(null)} className="text-slate-500 hover:text-slate-300 cursor-pointer"><XIcon className="w-3.5 h-3.5"/></button>
                      </div>
                      <div className="space-y-3.5 text-[11px]">
                        <div>
                          <span className="text-[9px] text-slate-500 font-bold uppercase block mb-1 font-mono">Source File Name</span>
                          <div className="bg-slate-950 px-2.5 py-1.5 rounded border border-slate-800 font-medium text-slate-300 flex items-center gap-1.5 truncate">
                            <FileTextIcon className="w-3 h-3 text-indigo-400 shrink-0"/> {CLAIMS_DATABASE[selectedClaim].doc}
                          </div>
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-500 font-bold uppercase block mb-1 font-mono">Data Grid Location</span>
                          <div className="text-slate-200 font-mono font-medium bg-slate-950 px-2.5 py-1.5 rounded border border-slate-850">
                            {CLAIMS_DATABASE[selectedClaim].loc}
                          </div>
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-500 font-bold uppercase block mb-1 font-mono">Extracted Source Value</span>
                          <div className="bg-black/50 border border-emerald-950 text-emerald-400 p-2.5 rounded font-mono text-[10.5px] leading-relaxed">
                            {selectedClaim === 'claim1' 
                              ? `Total Fresh Issue Fund Requirement: INR ${(postIssueCapital * 10000000).toLocaleString()}` 
                              : CLAIMS_DATABASE[selectedClaim].val}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* SEBI Guardrails Interactive Controls */}
              <div>
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5 font-mono">SEBI Chapter IX Guardrails</h3>
                <div className="space-y-2">
                  {[
                    { id: 1, title: "Promoter Minimum Lock-In (20%)", val: "Pass" },
                    { id: 2, title: "GCP Allocation Limit (<25%)", val: "22.4%", detail: `GCP mapped to ₹${(postIssueCapital * 0.224).toFixed(2)}Cr against total issue size ₹${postIssueCapital.toFixed(2)}Cr. Complies safely.` }
                  ].map((rule, idx) => (
                    <div key={rule.id} className={`border rounded-lg overflow-hidden transition-all duration-500 bg-slate-900/40 ${
                      appStage >= 2 && idx < guardrailsVisible ? 'opacity-100 translate-x-0 border-slate-800' : 'opacity-0 translate-x-4 h-0 border-transparent overflow-hidden'
                    }`}>
                      <button onClick={() => rule.detail && setExpandedGuardrail(expandedGuardrail === rule.id ? null : rule.id)} className={`w-full flex items-center justify-between p-3 text-left text-[11px] font-medium ${rule.detail ? 'cursor-pointer hover:bg-slate-900/80' : 'cursor-default'}`}>
                        <span className="text-slate-300">{rule.title}</span>
                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-mono font-bold text-[9px]">{rule.val}</span>
                      </button>
                      {rule.detail && expandedGuardrail === rule.id && (
                        <div className="px-3 pb-3 text-[10.5px] text-slate-400 animate-in slide-in-from-top-1">
                          <div className="pt-2 border-t border-slate-850 mt-1">{rule.detail}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sandbox Parameters Simulator */}
              {appStage >= 3 && (
                <div className="border-t border-slate-850 pt-3.5 mt-2 flex flex-col gap-4">
                  <div className="bg-slate-900/50 border border-slate-850 rounded-xl p-3.5">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-slate-300">Projected Capital Limit</span>
                      <span className="font-mono font-bold text-white">₹{postIssueCapital.toFixed(2)} Cr</span>
                    </div>
                    <input 
                      type="range" 
                      min="15" 
                      max="32" 
                      step="0.1"
                      value={postIssueCapital} 
                      onChange={(e) => setPostIssueCapital(parseFloat(e.target.value))}
                      className="w-full accent-indigo-500 h-1 bg-slate-800 rounded-lg cursor-pointer" 
                    />
                    <div className="flex justify-between text-[8px] text-slate-500 mt-1 font-mono uppercase tracking-wider">
                      <span>15 Cr</span>
                      <span className="text-amber-500 font-bold">SME limit (25 Cr)</span>
                      <span>32 Cr</span>
                    </div>
                  </div>

                  {/* Fully Restored Prompt Tuner and AI Dispatcher */}
                  <div className="bg-slate-900/50 border border-slate-850 rounded-xl p-3.5">
                    <span className="font-semibold text-slate-300 block text-xs mb-2">Gemini Pro Prompt Tuner</span>
                    <textarea
                      rows="2"
                      value={promoterPrompt}
                      onChange={(e) => setPromoterPrompt(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-300 p-2 text-xs rounded mb-2 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                    <button
                      onClick={handleGeminiDraft}
                      disabled={isGenerating}
                      className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-semibold text-xs py-2 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                    >
                      {isGenerating ? <Loader2Icon className="w-3.5 h-3.5 animate-spin" /> : <SparklesIcon className="w-3.5 h-3.5" />}
                      Redraft Prospectus via Server
                    </button>
                  </div>
                </div>
              )}

            </div>
          ) : (
            
            /* ================= REVIEWER MODE SIDEBAR ================= */
            <div className="flex flex-col h-full bg-slate-950 animate-in fade-in duration-300">
              
              {/* Sticky Action Card */}
              <div className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-25 flex flex-col gap-3 shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1 block font-mono">Chapter Assessment</span>
                    <span className="text-xs font-semibold text-white truncate block w-40">Objects of the Issue</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold tracking-tight transition-colors duration-300 font-mono ${
                    approveStage >= 2 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}>
                    {approveStage >= 2 ? "APPROVED FOR FILING" : "PENDING AUDIT"}
                  </span>
                </div>
                
                <div className="flex gap-2 mt-1.5">
                  <button 
                    onClick={handleApproveChapter}
                    disabled={approveStage > 0}
                    className={`flex-1 font-semibold text-[11px] py-2 rounded flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer ${
                      approveStage > 0 ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/30' : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-900/20'
                    }`}
                  >
                    <CheckCircleIcon className="w-3.5 h-3.5" /> 
                    {approveStage > 0 ? "Approved ✓" : "Approve Chapter"}
                  </button>
                  <button 
                    disabled={approveStage > 0}
                    className="bg-slate-800 border border-slate-700 hover:bg-slate-750 disabled:opacity-40 text-slate-300 font-semibold text-[11px] px-3 py-2 rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <AlertTriangleIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-5 flex-1">
                
                {/* Actionable Traceability Panel */}
                <div>
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5 font-mono">
                    <ShieldIcon className="w-3.5 h-3.5 text-purple-400"/> Audit Verification Matrix
                  </h3>
                  <div className={`relative overflow-hidden rounded-xl border bg-slate-900/40 transition-all duration-300 ${
                    selectedClaim ? 'border-purple-500/30 shadow-md shadow-purple-950/20' : 'border-slate-800 border-dashed'
                  }`}>
                    {!selectedClaim ? (
                      <div className="p-6 text-center">
                        <p className="text-[11px] text-slate-500 font-medium">Click a highlighted claim in the draft text to trace and verify its matching source coordinates.</p>
                      </div>
                    ) : (
                      <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="p-4">
                          <div className="space-y-3.5 text-[11px]">
                            <div>
                              <span className="text-[9px] text-slate-500 font-bold uppercase block mb-1 font-mono">Source Document Reference</span>
                              <div className="bg-slate-950 px-2.5 py-1.5 rounded border border-slate-850 font-medium text-slate-300 flex items-center gap-1.5 truncate">
                                <FileTextIcon className="w-3 h-3 text-purple-400 shrink-0"/> {CLAIMS_DATABASE[selectedClaim].doc}
                              </div>
                            </div>
                            <div>
                              <span className="text-[9px] text-slate-500 font-bold uppercase block mb-1 font-mono">Audit Trail Coordinate</span>
                              <div className="text-slate-200 font-mono font-medium bg-slate-950 px-2.5 py-1.5 rounded border border-slate-850">
                                {CLAIMS_DATABASE[selectedClaim].loc}
                              </div>
                            </div>
                            <div>
                              <span className="text-[9px] text-slate-500 font-bold uppercase block mb-1 font-mono">Extracted Source Value</span>
                              <div className="bg-black/50 border border-emerald-950 text-emerald-400 p-2.5 rounded font-mono text-[10.5px] leading-relaxed">
                                {CLAIMS_DATABASE[selectedClaim].val}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Staggered Decision Footer */}
                        <div className="bg-slate-900 border-t border-slate-800 p-3 h-12 flex items-center justify-center overflow-hidden">
                          {confirmedClaims[selectedClaim] ? (
                            <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5 animate-in zoom-in duration-200 font-mono">
                              <CheckCircleIcon className="w-3.5 h-3.5" /> LINEAGE VERIFIED
                            </div>
                          ) : showConfirmButtons ? (
                            <div className="flex gap-2 w-full animate-in slide-in-from-bottom-2 fade-in duration-300">
                              <button onClick={handleConfirmMatch} className="flex-1 bg-slate-950 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-400 text-slate-300 font-semibold text-[10px] py-1.5 rounded transition-all cursor-pointer">
                                Confirm Match
                              </button>
                              <button onClick={() => { triggerToast("Claim flag logged."); setSelectedClaim(null); }} className="px-3 bg-slate-950 border border-slate-800 hover:border-rose-500/40 hover:text-rose-400 text-slate-300 font-semibold text-[10px] py-1.5 rounded transition-all cursor-pointer">
                                Flag Mismatch
                              </button>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Collapsible Audit Trail */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setIsAuditExpanded(!isAuditExpanded)}
                    className="w-full p-3 flex items-center justify-between bg-slate-900/60 hover:bg-slate-900 transition-colors cursor-pointer text-left"
                  >
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                      <HistoryIcon className="w-3.5 h-3.5 text-purple-400"/> Compliance Ledger
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold font-mono text-purple-400 bg-purple-500/5 px-1.5 py-0.5 rounded border border-purple-500/10">{auditLogs.length} EVENTS</span>
                      <ChevronRightIcon className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isAuditExpanded ? 'rotate-90' : ''}`} />
                    </div>
                  </button>
                  
                  {isAuditExpanded && (
                    <div className="p-3 bg-slate-950/50 border-t border-slate-850 space-y-3.5 max-h-44 overflow-y-auto">
                      {auditLogs.map((log) => (
                        <div key={log.id} className="flex gap-2 animate-in slide-in-from-top-1 duration-300">
                          <div className="mt-0.5 relative flex flex-col items-center">
                            <div className={`w-1.5 h-1.5 rounded-full z-10 ${log.type === 'approved' ? 'bg-emerald-400' : 'bg-slate-600'}`}></div>
                            <div className="w-px h-[200%] bg-slate-800 absolute top-1.5"></div>
                          </div>
                          <div className="pb-0.5">
                            <div className={`text-[11px] leading-tight ${log.type === 'approved' ? 'font-semibold text-emerald-400' : 'text-slate-300'}`}>{log.text}</div>
                            <div className="text-[9px] text-slate-500 mt-0.5 flex items-center gap-1 font-mono">
                              <span>{log.author}</span> • <span>{log.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Static Compliance glance checklist */}
                <div className="mt-auto">
                   <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 font-mono">Statutory Checks Reprise</h3>
                   <div className="space-y-1.5">
                     {["GCP Allocation Cap (<25%)", "Promoter Lock-In Minimum (20%)"].map((title, i) => (
                       <div key={i} className="bg-slate-900 border border-slate-800 rounded p-2 flex justify-between items-center text-[10px] font-medium text-slate-400">
                         {title} <span className="text-emerald-400 font-bold font-mono text-[9px]">PASS</span>
                       </div>
                     ))}
                   </div>
                </div>

              </div>
            </div>
          )}
        </aside>
      </div>

      {/* Floating Global Success Toast */}
      {toastMsg && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white border border-slate-700 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold animate-in slide-in-from-bottom-5 fade-in duration-300 z-50">
          <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
          {toastMsg}
        </div>
      )}
    </div>
  );
}