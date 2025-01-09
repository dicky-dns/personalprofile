// pages/index.js
import React from 'react';

const skills = [
  { id: 1, name: 'HTML', position: 'top-left' },
  { id: 2, name: 'CSS', position: 'top-right' },
  { id: 3, name: 'JavaScript', position: 'left-top' },
  { id: 4, name: 'TypeScript', position: 'left-bottom' },
  { id: 5, name: 'React', position: 'bottom-left' },
  { id: 6, name: 'Next.js', position: 'bottom-right' },
  { id: 7, name: 'Tailwind CSS', position: 'right-top' },
  { id: 8, name: 'Flutter', position: 'right-bottom' },
  { id: 9, name: 'Node.js', position: 'left' },
  { id: 10, name: 'Express.js', position: 'right' },
];

const getPositionStyle = (position) => {
  switch (position) {
    case 'top-left':
      return 'top-[10%] left-[20%]';
    case 'top-right':
      return 'top-[10%] right-[20%]';
    case 'left-top':
      return 'top-[30%] left-[5%]';
    case 'left-bottom':
      return 'bottom-[30%] left-[5%]';
    case 'bottom-left':
      return 'bottom-[10%] left-[20%]';
    case 'bottom-right':
      return 'bottom-[10%] right-[20%]';
    case 'right-top':
      return 'top-[30%] right-[5%]';
    case 'right-bottom':
      return 'bottom-[30%] right-[5%]';
    case 'left':
      return 'top-[50%] left-[5%] translate-y-[-50%]';
    case 'right':
      return 'top-[50%] right-[5%] translate-y-[-50%]';
    default:
      return '';
  }
};

const getPathD = (fromX, fromY, toX, toY) => {
  const midX = (fromX + toX) / 2;
  const midY = (fromY + toY) / 2;
  return `M${fromX},${fromY} Q${midX},${fromY < toY ? fromY - 20 : fromY + 20} ${toX},${toY}`;
};

const SkillsMap = () => {
  const centerX = 50;
  const centerY = 50;

  const positions = {
    'top-left': { x: 20, y: 10 },
    'top-right': { x: 80, y: 10 },
    'left-top': { x: 5, y: 30 },
    'left-bottom': { x: 5, y: 70 },
    'bottom-left': { x: 20, y: 90 },
    'bottom-right': { x: 80, y: 90 },
    'right-top': { x: 95, y: 30 },
    'right-bottom': { x: 95, y: 70 },
    'left': { x: 5, y: 50 },
    'right': { x: 95, y: 50 },
  };

  return (
    <div className="relative w-full h-screen bg-gray-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-700 text-white px-8 py-4 rounded-lg text-center text-xl font-bold">
        Skills
      </div>

      {skills.map((skill) => (
        <div
          key={skill.id}
          className={`absolute bg-white text-gray-900 px-4 py-2 rounded-lg text-center text-sm font-bold ${getPositionStyle(skill.position)}`}
        >
          {skill.name}
        </div>
      ))}

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {skills.map((skill) => {
          const from = positions[skill.position];
          if (!from) return null;
          const pathD = getPathD(centerX, centerY, from.x, from.y);
          return (
            <path
              key={skill.id}
              d={pathD}
              stroke="white"
              fill="transparent"
              strokeWidth="2"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default SkillsMap;
