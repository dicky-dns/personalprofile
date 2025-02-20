'use client';

import { useEffect, useRef, useState } from 'react';
import { gql, GraphQLClient } from 'graphql-request';
import { format, parseISO } from 'date-fns';
import { useAnimation, useInView, motion } from "framer-motion";
import { enUS } from "date-fns/locale";

const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';
const ACCESS_TOKEN = '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';
const USERNAME = 'dicky-dns';

const query = gql`
  {
    user(login: "${USERNAME}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface Week {
  contributionDays: ContributionDay[];
}

export default function GitHubHeatmap() {
  const [data, setData] = useState<Week[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref); 
  const ctrls = useAnimation();

  useEffect(() => {
    const fetchData = async () => {
      const client = new GraphQLClient(GITHUB_GRAPHQL_URL, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });

      try {
        const response = await client.request(query) as {
          user?: {
            contributionsCollection?: {
              contributionCalendar?: {
                totalContributions: number;
                weeks: { contributionDays: { date: string; contributionCount: number }[] }[];
              };
            };
          };
        };

        const contributionCalendar = response.user?.contributionsCollection?.contributionCalendar;

        if (contributionCalendar) {
          setData(contributionCalendar.weeks);
          setTotalContributions(contributionCalendar.totalContributions);
        }
      } catch (err) {
        setError(err as Error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible"); 
    }
  }, [isInView, ctrls]);

  const AnimationGithub = {
    hidden: {
      opacity: 0,
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1.8,
        delay: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  if (error) return <p className="text-red-500">Error fetching data</p>;

  const months = data.flatMap(week =>
    week.contributionDays.map(day => format(parseISO(day.date), 'MMM'))
  );

  const filteredMonths = months.slice(0, 52 * 7).filter((_, index) => index % 7 === 0);
  const fullMonths = Array.from(new Set(filteredMonths));

  const currentMonth = format(new Date(), "MMM");
  fullMonths.push(currentMonth);

  const formatDate = (dateString: string): string => {
    return format(new Date(dateString), "MMMM do.", { locale: enUS });
  };

  return (
    <motion.div
      ref={ref} 
      initial="hidden"
      animate={ctrls}
      variants={AnimationGithub}
      className="github-section"
    >
      <h2 className="text-xl lg:text-4xl font-bold mb-6 lg:mb-8">Contributions</h2>
      <div className="relative z-10 w-full items-stretch justify-center overflow-hidden rounded-xl p-4 bg-zinc-200 dark:bg-zinc-800">
        <div className="overflow-x-auto p-2 rounded-md">
          <div className="pl-[7px] flex mb-2 text-sm w-full">
            {fullMonths.map((month, index) => (
              <div key={index} className="min-w-[85px] text-center">{month}</div>
            ))}
          </div>
          <div className="flex">
            <div className="flex flex-col text-sm mr-2 justify-center">
              <div className="h-[28px] mt-1">Mon</div>
              <div className="h-[28px] mt-3">Wed</div>
              <div className="h-[28px] mt-3">Fri</div>
            </div>
    
            <div className="flex gap-1">
              {data.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.contributionDays.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`w-4 h-4 rounded-sm ${getColor(day.contributionCount)}`}
                      title={`${day.contributionCount > 0 ? day.contributionCount : "No"} contributions on ${formatDate(day.date)}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between px-2 md:px-6">
          <p className="mt-2 text-sm">{totalContributions} contributions in the last year</p>
          <div className="flex items-center gap-1 mt-2 text-sm">
            <span>Less</span>
            <div className="w-4 h-4 rounded-sm bg-zinc-300 dark:bg-zinc-900" />
            <div className="w-4 h-4 rounded-sm bg-[#88d394] dark:bg-[#0e4429]" />
            <div className="w-4 h-4 rounded-sm bg-[#40c463] dark:bg-[#006d32]" />
            <div className="w-4 h-4 rounded-sm bg-[#30a14e] dark:bg-[#26a641]" />
            <div className="w-4 h-4 rounded-sm bg-[#216e39] dark:bg-[#39d353]" />
            <span>More</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const getColor = (count: number): string => {
  if (count === 0) return 'bg-zinc-300 dark:bg-zinc-900';
  if (count < 4) return 'bg-[#88d394] dark:bg-[#0e4429]';
  if (count < 6) return 'bg-[#40c463] dark:bg-[#006d32]';
  if (count < 10) return 'bg-[#30a14e] dark:bg-[#26a641]';
  return 'bg-[#216e39] dark:bg-[#39d353]';
};