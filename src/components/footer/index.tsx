"use client";
import { FC } from "react";
import { ArrowUpRight, PlusCircle } from "lucide-react";

export const Footer: FC = () => {
  return (
    <footer className="w-full bg-white mt-16 py-8 px-6 md:px-12 border-t border-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* LEFT: Subscription Box */}
        <div className="flex-1 p-6 rounded-3xl bg-gray-100 flex flex-col items-start justify-center">
          <h3 className="text-lg font-bold">SUBSCRIBE FOR FIRST ACCESS</h3>
          <p className="text-sm mt-1 mb-4 text-black/80">NO SALES OR SPAM</p>

          {/* Email + Subscribe */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-full border border-black px-4 py-2 text-sm flex-1 placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold tracking-widest flex items-center justify-center gap-1">
              SUBSCRIBE
              <PlusCircle width={16} height={16} />
            </button>
          </div>
        </div>

        {/* RIGHT: Navigation Columns */}
        <div className="flex-[1] flex flex-wrap md:flex-nowrap gap-8 uppercase">
          {/* ACCOUNT COLUMN */}
          <div className="min-w-[120px]">
            <h4 className="font-semibold text-gray-500 uppercase text-xs mb-3">
              Account
            </h4>
            <ul className="space-y-1 text-sm text-black">
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Join</a>
              </li>
            </ul>
          </div>

          {/* HOW IT WORKS COLUMN */}
          <div className="min-w-[120px]">
            <h4 className="font-semibold text-gray-500 uppercase text-xs mb-3">
              How It Works
            </h4>
            <ul className="space-y-1 text-sm text-black">
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Booking</a>
              </li>
              <li>
                <a href="#">For a Creator</a>
              </li>
              <li>
                <a href="#">For an Agency</a>
              </li>
            </ul>
          </div>

          {/* COMPANY COLUMN */}
          <div className="min-w-[120px]">
            <h4 className="font-semibold text-gray-500 uppercase text-xs mb-3">
              Company
            </h4>
            <ul className="space-y-1 text-sm text-black">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Information</a>
              </li>
            </ul>
          </div>

          {/* LEGAL COLUMN */}
          <div className="min-w-[120px]">
            <h4 className="font-semibold text-gray-500 uppercase text-xs mb-3">
              Legal
            </h4>
            <ul className="space-y-1 text-sm text-black">
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>


{/* SOCIAL MEDIA COLUMN */}
<div className="min-w-[120px]">
  <h4 className="font-semibold text-gray-500 uppercase text-xs mb-3">
    Social Media
  </h4>
  <ul className="space-y-1 text-sm text-black">
    {/* Instagram */}
    <li className="group relative inline-flex items-center">
      <a href="#" className="hover:underline flex items-center">
        Instagram
        <ArrowUpRight
          size={20}
          strokeWidth={2.5}
          absoluteStrokeWidth
          className="transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300"
        />
      </a>
    </li>

    {/* LinkedIn */}
    <li className="group relative inline-flex items-center">
      <a href="#" className="hover:underline flex items-center">
        LinkedIn
        <ArrowUpRight
          size={20}
          strokeWidth={2.5}
          absoluteStrokeWidth
          className="transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300"
        />
      </a>
    </li>
  </ul>
</div>

        </div>
      </div>
    </footer>
  );
};
