import { asset } from "$fresh/runtime.ts";

import { resume } from "../library/resume.ts";

export default function Resume() {
  const { basics, work } = resume;

  return (
    <div class="mx-1 md:mx-auto mt-8 print:mt-0 p-6 print:p-0 md:max-w-3xl bg-white rounded-t-lg shadow-lg animate-slide-up">
      <header class="mb-4 flex justify-between">
        <div>
          <h1 class="mb-1 font-bold font-sans text-2xl">{basics.name}</h1>
          <h2 class="mb-1 font-mono text-sm text-slate-600 tracking-tight">{basics.label}</h2>
          <p class="mb-4 font-mono text-xs text-slate-600 tracking-tight">
            {basics.location.city} {basics.location.region}, {basics.location.countryCode}
          </p>
          <nav>
            <p class="font-mono text-xs text-blue-600"><a href={`mailto:${basics.email}`}>{basics.email}</a> <span class="text-slate-600">/</span> <a href={basics.url}>{basics.url}</a></p>
          </nav>
        </div>

        <figure class="w-20 md:w-28 h-20 md:h-28 bg-gray-300 rounded-lg">
          <img src={asset("/avatar.png")} alt="Kivlor" />
        </figure>
      </header>

      <section class="mb-4">
        <h3 class="mb-2 font-bold font-sans text-xl">About</h3>
        <p class="font-mono text-sm text-slate-600 leading-5 tracking-tight">{basics.summary}</p>
      </section>

      <section class="mb-4">
        <h3 class="mb-2 font-bold font-sans text-xl">Experience</h3>

        {work.map((job) => (
          <div class="mb-4 break-inside-avoid">
            <h4 class="font-bold font-sans text-lg">
              {job.name}
            </h4>
            <p class="mb-2 font-sans text-base">
              {job.position} <span class="float-end font-light text-sm text-slate-600">{job.startDate}{job.endDate && ` to ${job.endDate}`}</span>
            </p>
            <p class="mb-2 font-mono text-sm text-slate-600 leading-5 tracking-tight">
              {job.summary}
            </p>
            <ul class="mb-2 flex flex-wrap items-start">
              {job.highlights.map((highlight) => (
                <li class="mr-1 mb-1 px-1 py-0.5 text-xs bg-slate-200 text-slate-600 rounded">{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/*<section class="mb-4">
        <h3 class="mb-2 font-bold font-sans text-xl">Interests</h3>
      </section>*/}
    </div>
  );
}
