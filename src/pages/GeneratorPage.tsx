import React, { useState } from 'react';
import ConnectedIcons from '../components/ConnectedIcons';
import CopyButton from '../components/CopyButton';

const GeneratorPage: React.FC = () => {
  const [jiraNo, setJiraNo] = useState('');
  const [figmaLink, setFigmaLink] = useState('');
  const [slackChannel, setSlackChannel] = useState('');
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (jiraNo && figmaLink && slackChannel) {
      setGenerated(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleGenerate();
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gray-900 text-white p-6 overflow-x-hidden flex flex-col items-center">
      {/* Top Icons */}
      <div className="pt-8 pb-12 w-full flex justify-center">
        <ConnectedIcons className="h-[150px]" />
      </div>
      
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {/* Left Form */}
        <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-5 text-center">Input Information</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="jiraNo" className="block mb-2 text-lg">
                JIRA Card No.
              </label>
              <input
                id="jiraNo"
                type="text"
                value={jiraNo}
                onChange={(e) => setJiraNo(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                placeholder="e.g. PGO-123"
              />
            </div>
            
            <div>
              <label htmlFor="figmaLink" className="block mb-2 text-lg">
                Figma Link:
              </label>
              <input
                id="figmaLink"
                type="text"
                value={figmaLink}
                onChange={(e) => setFigmaLink(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                placeholder="e.g. https://figma.com/file/..."
              />
            </div>
            
            <div>
              <label htmlFor="slackChannel" className="block mb-2 text-lg">
                Slack Notification Channel:
              </label>
              <input
                id="slackChannel"
                type="text"
                value={slackChannel}
                onChange={(e) => setSlackChannel(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                placeholder="e.g. #project-globeone"
              />
            </div>
          </div>
        </div>
        
        {/* Middle Button */}
        <div className="flex items-center justify-center">
          <button
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold rounded-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={handleGenerate}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-label="Generate AI workflow steps"
            disabled={!jiraNo || !figmaLink || !slackChannel}
          >
            Generation
          </button>
        </div>
        
        {/* Right Generated Content */}
        <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-5 text-center">AI Speed Workflow</h2>
          
          {generated ? (
            <div className="space-y-5">
              <div className="font-bold text-green-400 mb-4 text-lg text-center">
                Follow this steps your work will finish in ai speed:
                <br />
                Copy this prompt to your cursor or windsurf ide step by step
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-1">
                    <span className="font-semibold text-lg">STEP 1:</span>
                    <p className="text-gray-300">
                      JIRA Fetch {jiraNo} details in PGO project, Update the JIRA card {jiraNo} status to inprogress
                    </p>
                  </div>
                  <CopyButton text={`JIRA Fetch ${jiraNo} details in PGO project, Update the JIRA card ${jiraNo} status to inprogress`} className="ml-4" />
                </div>
                
                <div className="flex items-start">
                  <div className="flex-1">
                    <span className="font-semibold text-lg">STEP 2:</span>
                    <p className="text-gray-300">
                      check out new branch named feature/{jiraNo} from main branch in https://github.com/WayCao-LF/ph-GlobeOne repo
                    </p>
                  </div>
                  <CopyButton text={`check out new branch named feature/${jiraNo} from main branch in https://github.com/WayCao-LF/ph-GlobeOne repo`} className="ml-4" />
                </div>
                
                <div className="flex items-start">
                  <div className="flex-1">
                    <span className="font-semibold text-lg">STEP 3:</span>
                    <p className="text-gray-300">
                      Follow the card details and the figma link {figmaLink} build the pages
                    </p>
                  </div>
                  <CopyButton text={`Follow the card details and the figma link ${figmaLink} build the pages`} className="ml-4" />
                </div>
                
                <div className="flex items-start">
                  <div className="flex-1">
                    <span className="font-semibold text-lg">STEP 4:</span>
                    <p className="text-gray-300">
                      commits this changes and sumbit a PR in https://github.com/WayCao-LF/ph-GlobeOne merge current branch to main,the title and body please help me to generate refer to the commit message
                    </p>
                  </div>
                  <CopyButton text={`commits this changes and sumbit a PR in https://github.com/WayCao-LF/ph-GlobeOne merge current branch to main,the title and body please help me to generate refer to the commit message`} className="ml-4" />
                </div>
                
                <div className="flex items-start">
                  <div className="flex-1">
                    <span className="font-semibold text-lg">STEP 5:</span>
                    <p className="text-gray-300">
                      send a message to the slack channel {slackChannel} : @wei.wang Please review my PR . and Attachment the PR url refer to previous action.
                    </p>
                  </div>
                  <CopyButton text={`send a message to the slack channel ${slackChannel} : @wei.wang Please review my PR . and Attachment the PR url refer to previous action.`} className="ml-4" />
                </div>
                
                <div className="flex items-start">
                  <div className="flex-1">
                    <span className="font-semibold text-lg">STEP 6:</span>
                    <p className="text-gray-300">
                      Update the JIRA card {jiraNo} status to done
                    </p>
                  </div>
                  <CopyButton text={`Update the JIRA card ${jiraNo} status to done`} className="ml-4" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-gray-400 text-lg">
              Please fill in the form and click the generate button
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneratorPage;
