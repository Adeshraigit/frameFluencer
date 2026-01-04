// import { Globe, Mail, Phone } from 'lucide-react';
// import Link from 'next/link';
// import { WobbleCard } from './ui/wobble-card';
// import { ShootingStars } from "@/components/ui/shooting-stars";
// import { StarsBackground } from "@/components/ui/stars-background";

// export default function Contact() {
//   return (
//     <div className="w-full  bg-neutral-900 overflow-clip">
//       <section className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-20">
//       <WobbleCard
//         containerClassName="col-span-1 lg:col-span-2 h-full bg-orange min-h-[500px] lg:min-h-[300px]"
//         className="relative isolate w-full overflow-hidden rounded-2xl"
//       >
//         <div className="relative isolate overflow-hidden px-4 py-12 sm:px-24">
//             <p className="w-fit rounded-xl bg-white px-4 py-1 text-center text-base leading-7 font-semibold text-black uppercase lg:text-left">
//               Get in touch
//             </p>
//             <h2 className="mt-3 max-w-md text-4xl font-semibold text-white md:text-6xl">
//               How Can You <span className="text-primary-2"> Reach Us</span>?
//             </h2>
//             <p className="my-auto mt-3 max-w-2xl text-base text-gray-300 md:text-lg">
//               If you need to get in touch, there are several ways to contact us.
//             </p>
//             <div className="mt-8 flex w-full flex-col justify-between gap-4 text-lg md:flex-row">
//               <a
//                 className="flex items-center gap-2 text-white"
//                 href="mailto:subha9.5roy350@gmail.com"
//               >
//                 <Mail className="h-7 w-7 text-red-500" />
//                 adeshrai707@gmail.com
//               </a>
//               <a className="flex items-center gap-2 text-white" href="#">
//                 <Phone className="h-7 w-7 text-green-500" />
//                 +91-7304012624
//               </a>
//               <Link prefetch={false} className="flex items-center gap-2 text-white" href="/">
//                 <Globe className="h-7 w-7 text-blue-500" />
//                 framefluence.com
//               </Link>
//             </div>
//             <ul className="mt-8 ml-4 list-disc text-sm text-gray-300 md:text-base">
//               <li>Submit your query and state your requirements.</li>
//               <li>
//                 Receive a call back from our experts as per your query to help
//                 for your need.
//               </li>
//             </ul>
//           </div>
//       </WobbleCard>
//       </section>
//       <ShootingStars />
//       <StarsBackground />
//     </div>
//   );
// }

export default function Contact() {
  return (
    <div className="w-full  bg-neutral-900 overflow-clip">
    <div className="relative max-w-4xl overflow-hidden rounded-[40px] bg-orange-500 p-6 sm:p-10 md:p-20">
      <div className="absolute inset-0 hidden h-full w-full overflow-hidden md:block">
        <div className="absolute top-1/2 right-[-45%] aspect-square h-[800px] w-[800px] -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-orange-400 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.8] rounded-full bg-orange-300 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.6] rounded-full bg-orange-200 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.4] rounded-full bg-orange-100 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.2] rounded-full bg-orange-50 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.1] rounded-full bg-white/50 opacity-30"></div>
        </div>
      </div>

      <div className="relative z-10">
        <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl md:mb-4 md:text-5xl">
          Let&apos;s Get In Touch.
        </h1>
        <p className="mb-6 max-w-md text-base text-white sm:text-lg md:mb-8">
          Your laboratory instruments should serve you, not the other way
          around. We&apos;re happy to help you.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <button className="flex w-full items-center justify-between rounded-full bg-black px-5 py-3 text-white sm:w-[240px]">
            <span className="font-medium">Book a discovery call</span>
            <span className="h-5 w-5 flex-shrink-0 rounded-full bg-white"></span>
          </button>
          <button className="flex w-full items-center justify-between rounded-full bg-black px-5 py-3 text-white sm:w-[240px]">
            <span className="font-medium">Test Your Samples</span>
            <span className="h-5 w-5 flex-shrink-0 rounded-full bg-white"></span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
