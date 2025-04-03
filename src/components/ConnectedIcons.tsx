import React, { useState, useEffect } from 'react';

interface ConnectedIconsProps {
  className?: string;
}

const ConnectedIcons: React.FC<ConnectedIconsProps> = ({ className = '' }) => {
  const [loadedIcons, setLoadedIcons] = useState<Record<string, boolean>>({});
  
  // 官方图标URL - 主备双URL方案
  const iconUrls = {
    jira: {
      primary: 'https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/atlassian-icon-512.png',
      fallback: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg'
    },
    slack: {
      primary: 'https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png',
      fallback: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg'
    },
    github: {
      primary: 'https://github.githubassets.com/favicons/favicon.svg',
      fallback: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg'
    },
    gitlab: {
      primary: 'https://gitlab.com/uploads/-/system/project/avatar/278964/logo-extra-whitespace.png',
      fallback: 'https://cdn.worldvectorlogo.com/logos/gitlab.svg'
    },
    figma: {
      primary: 'https://static.figma.com/app/icon/1/favicon.png',
      fallback: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg'
    }
  };

  // 使用备用URL逻辑
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, iconName: string) => {
    const img = e.target as HTMLImageElement;
    img.src = iconUrls[iconName].fallback;
  };

  const handleImageLoad = (iconName: string) => {
    setLoadedIcons(prev => ({ ...prev, [iconName]: true }));
  };

  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <div className="relative w-full max-w-4xl h-24 flex items-center justify-between px-12">
        
        {/* Jira 图标 */}
        <div className="relative z-10 w-16 h-16 flex items-center justify-center">
          <img 
            src={iconUrls.jira.primary} 
            onError={(e) => handleImageError(e, 'jira')}
            alt="Jira" 
            className={`w-12 h-12 transition-opacity ${loadedIcons.jira ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => handleImageLoad('jira')}
          />
        </div>
        
        {/* Slack 图标 */}
        <div className="relative z-10 w-16 h-16 flex items-center justify-center">
          <img 
            src={iconUrls.slack.primary} 
            onError={(e) => handleImageError(e, 'slack')}
            alt="Slack" 
            className={`w-10 h-10 transition-opacity ${loadedIcons.slack ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => handleImageLoad('slack')}
          />
        </div>
        
        {/* GitHub 图标 */}
        <div className="relative z-10 w-16 h-16 flex items-center justify-center">
          <img 
            src={iconUrls.github.primary} 
            onError={(e) => handleImageError(e, 'github')}
            alt="GitHub" 
            className={`w-10 h-10 transition-opacity ${loadedIcons.github ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => handleImageLoad('github')}
          />
        </div>
        
        {/* GitLab 图标 */}
        <div className="relative z-10 w-16 h-16 flex items-center justify-center">
          <img 
            src={iconUrls.gitlab.primary} 
            onError={(e) => handleImageError(e, 'gitlab')}
            alt="GitLab" 
            className={`w-12 h-12 transition-opacity ${loadedIcons.gitlab ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => handleImageLoad('gitlab')}
          />
        </div>
        
        {/* Figma 图标 */}
        <div className="relative z-10 w-16 h-16 flex items-center justify-center">
          <img 
            src={iconUrls.figma.primary} 
            onError={(e) => handleImageError(e, 'figma')}
            alt="Figma" 
            className={`w-10 h-10 transition-opacity ${loadedIcons.figma ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => handleImageLoad('figma')}
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectedIcons;
