"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

export function Input({ label, className, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-dark-300">
        {label}
      </label>
      <input
        className={cn(
          "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-dark-500 focus:border-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/50 transition-all duration-300 backdrop-blur-sm",
          className
        )}
        {...props}
      />
    </div>
  );
}

export function Textarea({ label, className, ...props }: TextareaProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-dark-300">
        {label}
      </label>
      <textarea
        className={cn(
          "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-dark-500 focus:border-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/50 transition-all duration-300 backdrop-blur-sm resize-none",
          className
        )}
        rows={5}
        {...props}
      />
    </div>
  );
}

export function Select({ label, options, className, ...props }: SelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-dark-300">
        {label}
      </label>
      <select
        className={cn(
          "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/50 transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer",
          className
        )}
        {...props}
      >
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="bg-dark-900 text-white"
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
