import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConnectedIcons from '../components/ConnectedIcons';
import CopyButton from '../components/CopyButton';
import DataFlowBackground from '../components/DataFlowBackground';

const GeneratorPage: React.FC = () => {
  const figmaLinkRef = useRef<HTMLTextAreaElement>(null);
  const [jiraNo, setJiraNo] = useState('');
  const [figmaLink, setFigmaLink] = useState('');
  const [slackChannel, setSlackChannel] = useState('ai-speed');

  const adjustTextareaHeight = () => {
    if (figmaLinkRef.current) {
      figmaLinkRef.current.style.height = 'auto';
      figmaLinkRef.current.style.height = `${figmaLinkRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, []);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (jiraNo && figmaLink) {
      setGenerated(true);
    }
  };

  return (
    <div className="min-h-screen w-screen text-white overflow-x-hidden flex flex-col items-center relative">
      <DataFlowBackground />
      
      {/* Header Section */}
      <div className="w-full flex justify-center bg-blue-100/80 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent animate-[shine_2s_linear_infinite] w-[200%]"></div>
        <ConnectedIcons className="h-[150px] relative z-10" />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 px-4 items-center">
          
          {/* Left Form Panel */}
          <div className="bg-gray-800 py-6 rounded-lg shadow-lg md:col-span-2 h-fit self-center">
            <h2 className="text-2xl font-bold mb-5 text-center">Task Information</h2>
            
            <div className="space-y-5 px-6 pb-6">
              <div className="flex flex-col items-start pl-0">
                <label htmlFor="jiraNo" className="mb-2 text-lg text-left w-full pl-0">JIRA Ticket No:</label>
                <input
                  id="jiraNo"
                  type="text"
                  value={jiraNo}
                  onChange={(e) => setJiraNo(e.target.value)}
                  className="w-full py-4 px-6 bg-gray-700 border border-border rounded-md text-left"
                  placeholder="e.g. PGO-123"
                />
              </div>
              
              <div className="flex flex-col items-start pl-0">
                <label htmlFor="figmaLink" className="mb-2 text-lg text-left w-full pl-0">Figma Link:</label>
                <textarea
                  id="figmaLink"
                  ref={figmaLinkRef}
                  value={figmaLink}
                  onChange={(e) => {
                    setFigmaLink(e.target.value);
                    adjustTextareaHeight();
                  }}
                  className="w-full py-4 px-6 bg-gray-700 border border-border rounded-md text-left"
                  placeholder="e.g. https://figma.com/file/..."
                  rows={1}
                  style={{ height: 'auto', minHeight: '60px', resize: 'none' }}
                />
              </div>
              
              <div className="flex flex-col items-start pl-0">
                <label htmlFor="slackChannel" className="mb-2 text-lg text-left w-full pl-0">Slack Channel:</label>
                <input
                  id="slackChannel"
                  type="text"
                  value="ai-speed"
                  readOnly
                  className="w-full py-4 px-6 bg-gray-700 border border-border rounded-md text-left"
                />
              </div>
            </div>
          </div>
          
          {/* Generate Button */}
          <div className="flex items-center justify-center md:col-span-1">
            <button
              className="w-full max-w-[200px] px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold rounded-md"
              onClick={handleGenerate}
              disabled={!jiraNo || !figmaLink}
            >
              Generate
            </button>
          </div>
          
          {/* Right Results Panel */}
          <div className="bg-gray-800 py-8 px-5 rounded-lg shadow-lg md:col-span-2 my-4">
            <h2 className="text-2xl font-bold mb-5 text-center">AI Speed Workflow</h2>
            
            <AnimatePresence>
              {generated ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-5"
                >
                  <div className="font-bold text-green-400 mb-4 text-lg text-center">
                    Follow these steps your work will finish in AI speed:
                  </div>
                  
                  {[
                    `JIRA Fetch ${jiraNo} details in PGO project`,
                    `Check out new branch named feature/${jiraNo}`,
                    `Follow the figma link ${figmaLink} to build pages`,
                    `Commit changes and submit PR`,
                    `Notify ${slackChannel} channel`,
                    `Update JIRA card ${jiraNo} status to done`
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="border border-white rounded-lg p-6 bg-gray-700 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1 min-w-0 pr-4">
                          <span className="font-semibold text-blue-300">STEP {index + 1}:</span>
                          <p className="text-gray-300 mt-2 break-words whitespace-normal overflow-hidden">
                            {step}
                          </p>
                        </div>
                        <CopyButton text={step} />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="flex items-center justify-center h-64 text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Please fill in the form and click Generate
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratorPage;
