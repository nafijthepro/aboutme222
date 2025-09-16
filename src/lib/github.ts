export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  stargazers_count: number;
  forks_count: number;
  archived: boolean;
  disabled: boolean;
  private: boolean;
}

export interface ProjectData {
  title: string;
  description: string;
  image: string;
  tags: string[];
  dataAiHint: string;
  liveLink: string;
  githubLink?: string;
  isRecent?: boolean;
  updatedAt?: string;
}

const GITHUB_USERNAME = 'nafijninja'; // Nafij Rahaman's GitHub username
const GITHUB_API_BASE = 'https://api.github.com';

// Cache for GitHub data
let githubCache: {
  data: GitHubRepo[] | null;
  timestamp: number;
} = {
  data: null,
  timestamp: 0,
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const now = Date.now();
  
  // Return cached data if it's still fresh
  if (githubCache.data && (now - githubCache.timestamp) < CACHE_DURATION) {
    return githubCache.data;
  }

  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Nafij-Portfolio',
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();
    
   // Filter out archived, disabled, private, and non-owned repos
const filteredRepos = repos.filter(
  repo =>
    !repo.archived &&
    !repo.disabled &&
    !repo.private &&
    repo.description &&
    repo.owner?.login === GITHUB_USERNAME // only repos owned by Nafij Rahaman
);

    // Update cache
    githubCache = {
      data: filteredRepos,
      timestamp: now,
    };

    return filteredRepos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    // Return cached data if available, otherwise empty array
    return githubCache.data || [];
  }
}

export async function fetchRecentProjects(): Promise<ProjectData[]> {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/nafijthepro/logo/refs/heads/main/recent_project/project.json',
      {
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error(`Recent projects API error: ${response.status}`);
    }

    const data = await response.json();
    const projects = Array.isArray(data) ? data : [data];

    return projects.map((project: any) => ({
      title: project.title || 'Untitled Project',
      description: project.description || 'No description available',
      image: project.image || 'https://picsum.photos/600/400?random=' + Math.floor(Math.random() * 1000),
      tags: project.stack || project.tags || [],
      dataAiHint: project.dataAiHint || 'web application',
      liveLink: project.url || project.liveLink || '#',
      githubLink: project.githubLink,
      isRecent: true,
      updatedAt: project.updatedAt,
    }));
  } catch (error) {
    console.error('Error fetching recent projects:', error);
    return [];
  }
}

export function convertGitHubRepoToProject(repo: GitHubRepo): ProjectData {
  // Generate image based on language or use a default
  const getImageForLanguage = (language: string | null): string => {
    const languageImages: Record<string, string> = {
      'JavaScript': 'https://picsum.photos/600/400?random=js',
      'TypeScript': 'https://picsum.photos/600/400?random=ts',
      'Python': 'https://picsum.photos/600/400?random=py',
      'Java': 'https://picsum.photos/600/400?random=java',
      'HTML': 'https://picsum.photos/600/400?random=html',
      'CSS': 'https://picsum.photos/600/400?random=css',
      'React': 'https://picsum.photos/600/400?random=react',
      'Vue': 'https://picsum.photos/600/400?random=vue',
      'Angular': 'https://picsum.photos/600/400?random=angular',
    };
    
    return languageImages[language || ''] || `https://picsum.photos/600/400?random=${repo.id}`;
  };

  // Generate tags from topics and language
  const tags = [
    ...(repo.topics || []),
    ...(repo.language ? [repo.language] : []),
  ].slice(0, 5); // Limit to 5 tags

  // Generate AI hint based on repo name and description
  const generateAiHint = (name: string, description: string | null): string => {
    const hints: Record<string, string> = {
      'portfolio': 'portfolio website',
      'blog': 'blog platform',
      'ecommerce': 'e-commerce store',
      'chat': 'chat application',
      'todo': 'todo app',
      'weather': 'weather app',
      'calculator': 'calculator app',
      'game': 'game',
      'api': 'API service',
      'dashboard': 'dashboard',
      'landing': 'landing page',
      'website': 'website',
      'app': 'web application',
    };

    const nameAndDesc = `${name} ${description || ''}`.toLowerCase();
    
    for (const [key, hint] of Object.entries(hints)) {
      if (nameAndDesc.includes(key)) {
        return hint;
      }
    }
    
    return 'web application';
  };

  return {
    title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: repo.description || 'A GitHub repository project',
    image: getImageForLanguage(repo.language),
    tags,
    dataAiHint: generateAiHint(repo.name, repo.description),
    liveLink: repo.homepage || repo.html_url,
    githubLink: repo.html_url,
    isRecent: false,
    updatedAt: repo.updated_at,
  };
}

export async function getAllProjects(): Promise<{
  staticProjects: ProjectData[];
  githubProjects: ProjectData[];
  recentProjects: ProjectData[];
}> {
  try {
    const [githubRepos, recentProjects] = await Promise.all([
      fetchGitHubRepos(),
      fetchRecentProjects(),
    ]);

    // Convert GitHub repos to project format
    const githubProjects = githubRepos
      .slice(0, 10) // Limit to 10 most recent repos
      .map(convertGitHubRepoToProject);

    // Static projects (your existing hardcoded projects)
    const staticProjects: ProjectData[] = [
      {
        title: 'Futuristic Mail Sender',
        description: 'A futuristic mail sender with backend and API integration, similar to Web3 forms.',
        image: 'https://picsum.photos/600/400?random=1',
        tags: ['Backend', 'API', 'Web3'],
        dataAiHint: 'email interface',
        liveLink: 'https://mail-service-pro.onrender.com/',
      },
      {
        title: 'Futuristic Social Platform',
        description: 'A futuristic social media platform for sharing files, photos, and media.',
        image: 'https://picsum.photos/600/400?random=2',
        tags: ['Social Media', 'File Sharing', 'Next.js'],
        dataAiHint: 'social network',
        liveLink: 'https://share-pro.onrender.com/',
      },
      {
        title: 'GitHub File Editor',
        description: 'An online tool to edit GitHub repository files directly from the web.',
        image: 'https://picsum.photos/600/400?random=3',
        tags: ['GitHub', 'API', 'Developer Tool'],
        dataAiHint: 'code editor',
        liveLink: 'https://cookie-pro.onrender.com/',
      },
      {
        title: 'BTEB Result Checker',
        description: 'A dedicated app for students of Magura Polytechnic Institute to check their BTEB results.',
        image: 'https://picsum.photos/600/400?random=4',
        tags: ['React', 'Vercel', 'Educational'],
        dataAiHint: 'student results',
        liveLink: 'https://btebresultcheek.vercel.app/',
      },
    ];

    return {
      staticProjects,
      githubProjects,
      recentProjects,
    };
  } catch (error) {
    console.error('Error fetching all projects:', error);
    return {
      staticProjects: [],
      githubProjects: [],
      recentProjects: [],
    };
  }
}