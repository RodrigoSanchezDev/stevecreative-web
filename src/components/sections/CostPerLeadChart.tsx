"use client";

import React from "react";

const dataPoints = [
  { label: "WC 31st Oct", value: 95 },
  { label: "WC 7th Nov", value: 62 },
  { label: "WC 14th Nov", value: 48 },
  { label: "WC 21st Nov", value: 35 },
  { label: "WC 28th Nov", value: 38 },
  { label: "WC 5th Dec", value: 28 },
];

export function CostPerLeadChart() {
  const maxValue = 100;
  const chartWidth = 500;
  const chartHeight = 220;
  const paddingLeft = 10;
  const paddingRight = 10;
  const paddingTop = 10;
  const paddingBottom = 10;

  const stepX =
    (chartWidth - paddingLeft - paddingRight) / (dataPoints.length - 1);

  const points = dataPoints.map((d, i) => ({
    x: paddingLeft + i * stepX,
    y: paddingTop + (1 - d.value / maxValue) * (chartHeight - paddingTop - paddingBottom),
  }));

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  // Gradient fill area
  const areaD = `${pathD} L ${points[points.length - 1].x} ${chartHeight - paddingBottom} L ${points[0].x} ${chartHeight - paddingBottom} Z`;

  // Horizontal grid lines
  const gridLines = [0.2, 0.4, 0.6, 0.8].map((pct) => ({
    y: paddingTop + pct * (chartHeight - paddingTop - paddingBottom),
  }));

  return (
    <div className="rounded-xl border border-white/10 bg-dark-900/80 p-5 sm:p-6">
      <h4
        className="text-sm font-semibold text-white mb-1"
        style={{ fontFamily: "var(--font-space)" }}
      >
        Cost Per Lead - Paid Social
      </h4>
      <p className="text-xs text-dark-500 mb-4">Results over 6 weeks</p>

      <div className="relative w-full" style={{ aspectRatio: "500 / 280" }}>
        <svg
          viewBox={`0 0 ${chartWidth} 280`}
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {gridLines.map((line, i) => (
            <line
              key={i}
              x1={paddingLeft}
              y1={line.y}
              x2={chartWidth - paddingRight}
              y2={line.y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          ))}

          {/* Area fill */}
          <path d={areaD} fill="url(#areaGradient)" />

          {/* Line */}
          <path
            d={pathD}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {points.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="4" fill="#1e293b" stroke="#60a5fa" strokeWidth="2" />
            </g>
          ))}

          {/* Y-axis label */}
          <text
            x="0"
            y={chartHeight / 2}
            fill="rgba(255,255,255,0.35)"
            fontSize="9"
            textAnchor="middle"
            transform={`rotate(-90, 8, ${chartHeight / 2})`}
          >
            Cost Per Lead
          </text>

          {/* X-axis labels */}
          {dataPoints.map((d, i) => (
            <text
              key={i}
              x={points[i].x}
              y={chartHeight + 16}
              fill="rgba(255,255,255,0.4)"
              fontSize="9"
              textAnchor="middle"
            >
              {d.label}
            </text>
          ))}

          {/* X-axis title */}
          <text
            x={chartWidth / 2}
            y={chartHeight + 36}
            fill="rgba(255,255,255,0.35)"
            fontSize="9"
            textAnchor="middle"
          >
            Date
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/5">
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-5 rounded bg-primary-400" />
          <span className="text-[10px] text-dark-400">CPL Trend</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 10 10">
            <path d="M 1 8 L 5 2 L 9 8" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          </svg>
          <span className="text-[10px] text-emerald-400">-70% reduction</span>
        </div>
      </div>
    </div>
  );
}
