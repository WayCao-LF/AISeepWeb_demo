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
      <div className="pt-8 pb-12 w-full flex justify-center bg-white  shadow-md">
        <ConnectedIcons className="h-[150px]" />
      </div>
      
      <div className="h-[200px]"></div>
      
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 px-4 mt-8">
        {/* Left Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg md:col-span-2">
        <div className="h-[20px]"></div>
          <h2 className="text-2xl font-bold mb-5 text-center">Input Information</h2>
          <div className="h-[20px]"></div>
          <div className="space-y-5 px-4">
            <div>
              <label htmlFor="jiraNo" className="block mb-2 text-lg">
                JIRA Card No.
              </label>
              <input
                id="jiraNo"
                type="text"
                value={jiraNo}
                onChange={(e) => setJiraNo(e.target.value)}
                className="w-[300px] px-6 py-4 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                placeholder=" e.g. PGO-123"
              />
            </div>
            <div className="h-[20px]"></div>
            <div>
              <label htmlFor="figmaLink" className="block mb-2 text-lg">
                Figma Link:
              </label>
              <input
                id="figmaLink"
                type="text"
                value={figmaLink}
                onChange={(e) => setFigmaLink(e.target.value)}
                className="w-[300px] px-6 py-4 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                placeholder=" e.g. https://figma.com/file/..."
              />
            </div>
            <div className="h-[20px]"></div>
            <div>
              <label htmlFor="slackChannel" className="block mb-2 text-lg">
                Slack Notification Channel:
              </label>
              <input
                id="slackChannel"
                type="text"
                value={slackChannel}
                onChange={(e) => setSlackChannel(e.target.value)}
                className="w-[300px] px-6 py-4 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                placeholder=" e.g. #project-globeone"
              />
            </div>
            <div className="h-[40px]"></div>
          </div>
        </div>
        
        {/* Middle Button */}
        <div className="flex items-center justify-center md:col-span-1">
          <button
            className="w-[200px] px-12 py-6 bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold rounded-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={handleGenerate}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-label="Generate AI workflow steps"
            disabled={!jiraNo || !figmaLink || !slackChannel}
          >
            <span className="px-6">Generate</span>
          </button>
        </div>
        
        {/* Right Generated Content */}
        <div className="bg-gray-800 p-5 rounded-lg shadow-lg md:col-span-2">
        <div className="h-[20px]"></div>
          <h2 className="text-2xl font-bold mb-5 text-center">AI Speed Workflow</h2>
          
          {generated ? (
            <div className="space-y-5">
              <div className="font-bold text-green-400 mb-4 text-lg text-center">
                Follow this steps your work will finish in ai speed:
                <br />
                Copy this prompt to your cursor or windsurf ide step by step
              </div>
              <div className="h-[20px]"></div>
              <div className="space-y-6">
                {/* STEP 1 */}
                <div className="border border-white rounded-lg p-4 relative bg-gray-700">
                  <div className="mb-4">
                    <span className="font-semibold text-lg text-blue-300">STEP 1:</span>
                    <p className="text-gray-300 mt-2">
                      JIRA Fetch {jiraNo} details in PGO project, Update the JIRA card {jiraNo} status to inprogress
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <CopyButton text={`JIRA Fetch ${jiraNo} details in PGO project, Update the JIRA card ${jiraNo} status to inprogress`} />
                  </div>
                </div>
                <div className="h-[20px]"></div>
                {/* STEP 2 */}
                <div className="border border-white rounded-lg p-4 relative bg-gray-700">
                  <div className="mb-4">
                    <span className="font-semibold text-lg text-blue-300">STEP 2:</span>
                    <p className="text-gray-300 mt-2">
                      check out new branch named feature/{jiraNo} from main branch in https://github.com/WayCao-LF/ph-GlobeOne repo
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <CopyButton text={`check out new branch named feature/${jiraNo} from main branch in https://github.com/WayCao-LF/ph-GlobeOne repo`} />
                  </div>
                </div>
                <div className="h-[20px]"></div>
                {/* STEP 3 */}
                <div className="border border-white rounded-lg p-4 relative bg-gray-700">
                  <div className="mb-4">
                    <span className="font-semibold text-lg text-blue-300">STEP 3:</span>
                    <p className="text-gray-300 mt-2">
                      Follow the card details and the figma link {figmaLink} build the pages
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <CopyButton text={`Follow the card details and the figma link ${figmaLink} build the pages`} />
                  </div>
                </div>
                <div className="h-[20px]"></div>
                {/* STEP 4 */}
                <div className="border border-white rounded-lg p-4 relative bg-gray-700">
                  <div className="mb-4">
                    <span className="font-semibold text-lg text-blue-300">STEP 4:</span>
                    <p className="text-gray-300 mt-2">
                      commits this changes and sumbit a PR in https://github.com/WayCao-LF/ph-GlobeOne merge current branch to main,the title and body please help me to generate refer to the commit message
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <CopyButton text={`commits this changes and sumbit a PR in https://github.com/WayCao-LF/ph-GlobeOne merge current branch to main,the title and body please help me to generate refer to the commit message`} />
                  </div>
                </div>
                <div className="h-[20px]"></div>
                {/* STEP 5 */}
                <div className="border border-white rounded-lg p-4 relative bg-gray-700">
                  <div className="mb-4">
                    <span className="font-semibold text-lg text-blue-300">STEP 5:</span>
                    <p className="text-gray-300 mt-2">
                      send a message to the slack channel {slackChannel} : @wei.wang Please review my PR . and Attachment the PR url refer to previous action.
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <CopyButton text={`send a message to the slack channel ${slackChannel} : @wei.wang Please review my PR . and Attachment the PR url refer to previous action.`} />
                  </div>
                </div>
                <div className="h-[20px]"></div>
                {/* STEP 6 */}
                <div className="border border-white rounded-lg p-4 relative bg-gray-700">
                  <div className="mb-4">
                    <span className="font-semibold text-lg text-blue-300">STEP 6:</span>
                    <p className="text-gray-300 mt-2">
                      Update the JIRA card {jiraNo} status to done
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <CopyButton text={`Update the JIRA card ${jiraNo} status to done`} />
                  </div>
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
