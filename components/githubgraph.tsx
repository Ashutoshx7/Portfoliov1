"use client"

import { useEffect, useState, cloneElement } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { Tooltip } from "react-tooltip";

interface PR {
  id: number;
  title: string;
  url: string;
  repository: {
    nameWithOwner: string;
  };
  state: string;
  createdAt: string;
  mergedAt?: string;
  closedAt?: string;
}

const GithubGraph = () => {
  const { theme } = useTheme();
  const [prs, setPrs] = useState<PR[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [filterType, setFilterType] = useState<"merged" | "open" | "closed">("merged");
  const [showPRSection, setShowPRSection] = useState(true);
  const [closedPRIds, setClosedPRIds] = useState<Set<number>>(new Set());
  const [mounted, setMounted] = useState(false);

  const initialCount = 2;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchPRs = async () => {
      try {
        const searchQuery = filterType === "merged" 
          ? "author:Ashutoshx7 type:pr is:merged"
          : filterType === "open"
          ? "author:Ashutoshx7 type:pr is:open"
          : "author:Ashutoshx7 type:pr is:closed is:unmerged";

        const query = `query {
          search(query: "${searchQuery}", type: ISSUE, first: 12) {
            edges {
              node {
                ... on PullRequest {
                  id
                  title
                  url
                  repository {
                    nameWithOwner
                  }
                  state
                  createdAt
                  mergedAt
                  closedAt
                }
              }
            }
          }
        }`;

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN || ""}`,
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        if (data.data?.search?.edges) {
          const fetchedPRs = data.data.search.edges.map((edge: any) => edge.node);
          // Sort by date (newest first)
          fetchedPRs.sort((a: PR, b: PR) => {
            const dateA = new Date(b.mergedAt || b.closedAt || b.createdAt).getTime();
            const dateB = new Date(a.mergedAt || a.closedAt || a.createdAt).getTime();
            return dateA - dateB;
          });
          setPrs(fetchedPRs);
          setShowAll(false);
        }
      } catch (error) {
        console.error("Failed to fetch PRs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPRs();
  }, [filterType]);

  return (
    <div>
      <div className="absolute right-6 w-212 h-px bg-(--pattern-fg) opacity-90 dark:opacity-15"></div>


        <h1 className="text-neutral-900 dark:text-neutral-50 font-custom font-bold  text-3xl tracking-tight "><span className="link--elara">Proof Of Work</span></h1>
                      <div className="absolute right-6 w-212 h-px bg-(--pattern-fg) my-[0.4] opacity-90 dark:opacity-15"></div>
                      <p className=" font-custom2 text-neutral-600 dark:text-neutral-400 mt-3 px-4 py-[7px]
                                 text-sm inline-flex w-full max-w-2xl flex-wrap items-center justify-center text-center
                                 bg-black/5 dark:bg-white/5 border border-dashed border-neutral-300 dark:border-neutral-700 my-5"> I live spending time in open source,building real stuff and solving real problems</p>

    
          

      {/* Graph Component */}
      <div className="w-full overflow-x-auto">
        <div className="flex min-w-[640px] justify-center px-4">
          {mounted && (
            <>
              <GitHubCalendar 
                username="Ashutoshx7" 
                colorScheme={theme === "dark" ? "dark" : "light"}
                blockSize={10}
                blockMargin={3}
                fontSize={12}
                style={{
                  color: theme === "dark" ? "#e5e5e5" : "#171717",
                }}
                renderBlock={(block: any, activity: any) => 
                  cloneElement(block, {
                    "data-tooltip-id": "github-tooltip",
                    "data-tooltip-content": `${activity.count} contributions on ${activity.date}`,
                  })
                }
              />
              <Tooltip 
                id="github-tooltip" 
                style={{ 
                  color: theme === "dark" ? "#e5e5e5" : "#171717",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontSize: "12px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: theme === "dark" ? "1px solid #404040" : "1px solid #e5e5e5",
                }}
              />
            </>
          )}
        </div>
      </div>
      
      {/* PRs Section */}
      {showPRSection && (
      <div className="mt-4">
        <div className="mb-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-neutral-900 dark:text-neutral-50 font-custom font-bold text-2xl tracking-tight">
            <span className="link--elara">Pull Requests</span>
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex gap-1 bg-black/5 dark:bg-white/5 rounded-lg p-1 border border-neutral-300/30 dark:border-neutral-700/30 ">
              <button
                onClick={() => setFilterType("merged")}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 ${
                  filterType === "merged"
                    ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                Merged
              </button>
              <button
                onClick={() => setFilterType("open")}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 ${
                  filterType === "open"
                    ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                Open
              </button>
              <button
                onClick={() => setFilterType("closed")}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 ${
                  filterType === "closed"
                    ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                Closed
              </button>
            </div>
           
            
          </div>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 font-custom2 mb-4">
          {filterType === "merged" 
            ? "Merged contributions to open source" 
            : filterType === "open"
            ? "Active pull requests"
            : "Closed pull requests"}
        </p>
        <div className="absolute right-6 w-212 h-px bg-(--pattern-fg) opacity-90 dark:opacity-15"></div>

        {loading ? (
          <div className="text-neutral-600 dark:text-neutral-400 font-custom2 text-sm mt-4">Loading pull requests...</div>
        ) : prs.length > 0 ? (
          <div>
            <div className="space-y-2 mt-5">
              {prs.slice(0, showAll ? prs.length : initialCount).filter(pr => !closedPRIds.has(pr.id)).map((pr, index) => (
                <div key={pr.id} className="group flex items-start gap-3 p-3 rounded-md transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 border border-transparent hover:border-neutral-300/50 dark:hover:border-neutral-700/50">
                  <div className="shrink-0 mt-0.5">
                    <div className={`w-1 h-1 rounded-full group-hover:scale-150 transition-transform duration-200 ${
                      filterType === "merged"
                        ? "bg-linear-to-r from-purple-400 to-pink-400"
                        : filterType === "open"
                        ? "bg-linear-to-r from-green-400 to-emerald-400"
                        : "bg-linear-to-r from-red-400 to-rose-400"
                    }`}></div>
                  </div>
                  <a
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-0 hover:no-underline"
                  >
                    <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-50 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors truncate">
                      {pr.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5 font-custom2">
                      {pr.repository.nameWithOwner}
                    </p>
                  </a>
                </div>
              ))}
            </div>
            {prs.length > initialCount && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-4 py-2 text-sm font-custom2 font-medium text-neutral-900 dark:text-neutral-50 
                  bg-neutral-100 dark:bg-neutral-800/60 hover:bg-neutral-200 dark:hover:bg-neutral-700/80
                  border border-neutral-300/50 dark:border-neutral-700/50 rounded-lg
                  transition-all duration-300 hover:shadow-md"
                >
                  {showAll ? "↑ Collapse" : `↓ Expand • ${prs.length - closedPRIds.size - initialCount} more`}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-secondary font-custom2 text-sm mt-4">No pull requests found</div>
        )}
      </div>
      )}
    </div>
    
  );
};

export default GithubGraph;
