import { cn } from "@/lib/utils";
import {
  IconBriefcase,
  IconClock,
  IconLayersIntersect,
  IconHeadset,
  IconCheck,
  IconRocket, 
  IconBrandYoutube,
  IconCurrencyDollar,
} from "@tabler/icons-react";

export default function Features() {
  const features = [
    {
      title: "Tailored for Businesses",
      description:
        "We craft videos that speak your brand’s language and connect with your audience.",
      icon: <IconBriefcase />,
    },
    {
      title: "Creative Storytelling",
      description:
        "From script to screen, we turn raw ideas into powerful visual stories.",
      icon: <IconBrandYoutube />,
    },
    {
      title: "Affordable Packages",
      description:
        "High-quality edits without breaking the bank. Transparent pricing, no hidden costs.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Reliable Delivery",
      description: "Tight deadline? No problem. We deliver on time, every time.",
      icon: <IconClock />,
    },
    {
      title: "All-in-One Production",
      description:
        "Editing, motion graphics, sound design — everything under one roof.",
      icon: <IconLayersIntersect />,
    },
    {
      title: "Dedicated Support",
      description:
        "Our team is always just a message away to help you refine and finalize your vision.",
      icon: <IconHeadset />,
    },
    {
      title: "Satisfaction Guarantee",
      description:
        "We’re not done until you’re thrilled. Unlimited revisions until it’s perfect.",
      icon: <IconCheck />,
    },
    {
      title: "Future-Ready Videos",
      description:
        "Content optimized for YouTube, social media, and every platform that matters.",
      icon: <IconRocket />,
    },
  ];
  
  return (
    <div className="relative z-20 py-10 lg:py-20 w-full mx-auto">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(249,115,22,0.6),transparent)]">
</div>
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with thousands of features
        </h4>
 
        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>
      <div className="relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
        ))}
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
