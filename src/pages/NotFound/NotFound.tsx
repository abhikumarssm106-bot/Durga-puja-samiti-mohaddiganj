import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="w-full px-margin md:px-margin-lg max-w-2xl mx-auto text-center py-space-xl">
        <span className="material-symbols-outlined text-[64px] text-secondary/30 mb-space-md">
          explore_off
        </span>
        <h1 className="font-display-hero text-[80px] md:text-[120px] text-primary tracking-tight leading-none mb-space-sm">
          404
        </h1>
        <h2 className="font-headline-md text-headline-md text-on-surface mb-space-md">
          यह पृष्ठ नहीं मिला।
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
          आप जिस पृष्ठ की तलाश कर रहे हैं उसे हटा दिया गया होगा, उसका नाम बदल दिया गया होगा, या वह अस्थायी रूप से अनुपलब्ध है।
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-primary text-on-primary font-label-md text-label-md rounded shadow-md hover:bg-primary-container transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">home</span>
          <span>होम पर लौटें</span>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
