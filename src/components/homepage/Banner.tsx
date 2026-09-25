import React from 'react';
import bannerImg from '@/assets/hero_img.jpg'
import Image from 'next/image';

const Banner = () => {
    return (
        
<section className=" py-10 px-4 sm:px-6">
  <div
    className="
      container mx-auto
      grid grid-cols-1 lg:grid-cols-2
      items-center gap-5
      overflow-hidden
      rounded-3xl
      bg-gradient-to-br
      from-slate-100 via-slate-200 to-emerald-100
      px-6 py-6
      sm:px-8 sm:py-8
      lg:px-12 lg:py-8
    "
  >
    {/* Left Content */}
    <div className="space-y-4 text-center lg:text-left">

      <span
        className="
          inline-block rounded-full
          bg-emerald-100 px-3 py-1
          text-xs font-semibold text-emerald-700
        "
      >
        Discover Your Next Read
      </span>

      <h2
        className="
          text-3xl font-extrabold
          leading-tight tracking-tight
          text-slate-900
          sm:text-4xl lg:text-5xl
        "
      >
        Books to freshen up
        <span className="block text-emerald-600">
          your bookshelf
        </span>
      </h2>

      <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600 lg:mx-0">
        Explore inspiring stories and exciting new books
        to add to your collection.
      </p>

      <button
        className="
          rounded-full bg-emerald-600
          px-6 py-3 text-sm font-bold text-white
          shadow-lg transition-all duration-300
          hover:-translate-y-1 hover:bg-emerald-700
        "
      >
        View The List →
      </button>
    </div>

    {/* Right Image */}
    <div className="flex items-center justify-center">
      <Image
        src={bannerImg}
        alt="Books collection"
        priority
        className="
          h-auto w-full max-w-xs
          object-contain drop-shadow-2xl
          transition-transform duration-500
          hover:scale-105
        "
      />
    </div>
  </div>
</section>
    );
};

export default Banner;