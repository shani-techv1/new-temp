"use client";

import React from "react";
import { useRouter } from "next/navigation";

// Export creative roles for use in the signup page
export type CreativeRole = string;
export const creativeRoles = [
  "Photographer",
  "Videographer",
  "Director",
  "Producer",
  "Editor",
  "Colorist",
  "Audio Engineer",
  "Gaffer",
  "Grip",
  "Hair Stylist",
  "Makeup Artist",
  "Wardrobe Stylist",
  "Art Director",
  "Set Designer",
  "Prop Stylist",
  "Location Scout",
  "Model",
  "Talent",
  "Production Assistant",
  "Digital Tech",
  "Retoucher"
];

// Export form field type for use in the signup page
export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  isOptional?: boolean;
}

// Export photographer fields -
export const photographerFields: FormField[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Your first name"
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Your last name"
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Your email address"
  },
  {
    name: "instagram",
    label: "Instagram",
    type: "text",
    placeholder: "@yourusername",
    isOptional: true
  },
  {
    name: "bio",
    label: "Bio",
    type: "textarea",
    placeholder: "Tell us a bit about yourself and your experience",
    isOptional: true
  },
  {
    name: "portfolio",
    label: "Portfolio",
    type: "file",
    placeholder: "JPG, PNG or PDF up to 10MB"
  }
];

// Export videographer fields
export const videographerFields: FormField[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Your first name"
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Your last name"
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Your email address"
  },
  {
    name: "instagram",
    label: "Instagram",
    type: "text",
    placeholder: "@yourusername",
    isOptional: true
  },
  {
    name: "websites",
    label: "Website",
    type: "text",
    placeholder: "Your website URL",
    isOptional: true
  },
  {
    name: "bio",
    label: "Bio",
    type: "textarea",
    placeholder: "Tell us a bit about yourself and your experience",
    isOptional: true
  },
  {
    name: "reelLink",
    label: "Reel Link",
    type: "text",
    placeholder: "Link to your reel (Vimeo, YouTube, etc.)"
  }
];

interface SignupFlowProps {
  onOpenChange?: (open: boolean) => void;
}

export default function SignupFlow({ onOpenChange }: SignupFlowProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onOpenChange) {
      onOpenChange(true);
    }
    router.push('/signup');
  };

  return (
    <button
      onClick={handleClick}
      className="group relative w-full md:w-auto max-w-[200px] cursor-pointer overflow-hidden rounded-full bg-black p-2 px-4 md:px-8 py-4 text-center text-xs md:text-lg font-semibold uppercase tracking-tighter"
    >
      <div className="flex items-center justify-center text-center gap-2">
        {/* <div className="h-2 w-2 rounded-full bg-white transition-all duration-300 group-hover:-translate-x-20 md:group-hover:-translate-x-10"></div> */}
        <span className="inline-block text-center transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-white">
          Get Started
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full -translate-x-10 items-center justify-center gap-2 tracking-tighter text-primary-foreground opacity-0 transition-all duration-700 group-hover:-translate-x-6 group-hover:opacity-100">
        <span className="text-white">Get Started</span>
      </div>
    </button>
  );
} 